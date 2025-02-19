using api.Config;
using Microsoft.AspNetCore.Mvc;
using api.Services;
using api.Models;
using BCrypt.Net;
using System.Security.Claims;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.IdentityModel.Tokens;
using System.Text;

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

        // POST: api/users
        [HttpPost("register")]
        public async Task<ActionResult> Create([FromBody] User newUser)
        {
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

            var claims = new[] {
                new Claim(JwtRegisteredClaimNames.Sub, user.Email),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim(ClaimTypes.NameIdentifier, user.Id)
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_jwtConfig.Key));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(
                _jwtConfig.Issuer,
                _jwtConfig.Audience,
                claims,
                expires: DateTime.Now.AddMinutes(2),
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