using api.Config;
using Microsoft.AspNetCore.Mvc;
using api.Services;
using api.Models;
using BCrypt.Net;
using System.Security.Claims;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using Microsoft.AspNetCore.Authorization;

namespace api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsersController : ControllerBase
    {
        private readonly UserService _service;
        private readonly JwtSettings _jwtConfig;

        public UsersController(UserService service, JwtSettings jwtSettings)
        {
            _service = service;
            _jwtConfig = jwtSettings;

        }

        // GET: api/users
        [HttpGet]
        public async Task<ActionResult<List<User>>> GetAll()
        {
            var users = await _service.GetAllAsync();
            return Ok(users);
        }

        // GET: api/users/123456
        [HttpGet("{id}")]
        public async Task<ActionResult<User>> Get(string id)
        {
            var user = await _service.GetByIdAsync(id);
            if (user == null)
                return NotFound();

            return Ok(user);
        }

        // GET: api/users/getuser
        [HttpGet("getuser")]
        [Authorize]
        public async Task<ActionResult<User>> GetUser()
        {
            // Retrieve user ID from token
            var userId = User.Claims.FirstOrDefault(c => c.Type == ClaimTypes.NameIdentifier)?.Value;
        

            if (userId == null)
                return Unauthorized("No user ID claim present in token.");

            try
            {
                User? user = await _service.GetByIdAsync(userId);
                return Ok(user);
            }
            catch (InvalidOperationException ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // POST: api/users
        [HttpPost("register")]
        public async Task<ActionResult> Create([FromBody] User newUser)
        {
            newUser.Role ??= "User";
            // Create user with hashed password
            await _service.CreateAsync(newUser);

            return CreatedAtAction(nameof(Get), new { id = newUser.Id }, newUser);
        }

        // POST: api/users/login
        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginModel user)
        {
            var existing = await _service.GetByEmailAsync(user.Email);

            if (existing == null || !BCrypt.Net.BCrypt.Verify(user.Password, existing.Password))
                return Unauthorized("Invalid email or password");
        
            var token = GenerateJwtToken(existing);
            return Ok(new { token });
        }

        // Generate JWT token
        private string GenerateJwtToken(User user) {

            var claims = new List<Claim>
            {
                new Claim(ClaimTypes.NameIdentifier, user.Id),
                new Claim(JwtRegisteredClaimNames.Sub, user.Email),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim(ClaimTypes.Role, user.Role)
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_jwtConfig.Key));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);


            var token = new JwtSecurityToken(
                issuer: _jwtConfig.Issuer,
                audience: _jwtConfig.Audience,
                claims: claims,
                expires: DateTime.Now.AddMinutes(10),
                signingCredentials: creds
            );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        // PUT: api/users/123456
        [HttpPut("{id}")]
        public async Task<IActionResult> Update(string id, [FromBody] User updatedUser)
        {
            var existing = await _service.GetByIdAsync(id);
            if (existing == null)
                return NotFound();

            // ensure ID match
            updatedUser.Id = id;

            await _service.UpdateAsync(id, updatedUser);
            return NoContent();
        }

        // DELETE: api/users/123456
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(string id)
        {
            var user = await _service.GetByIdAsync(id);
            if (user == null)
                return NotFound();

            await _service.DeleteAsync(id);
            return NoContent();
        }
    }
}