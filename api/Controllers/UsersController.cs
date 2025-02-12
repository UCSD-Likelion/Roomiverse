using Microsoft.AspNetCore.Mvc;
using api.Services;
using api.Models;
using BCrypt.Net;

namespace api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsersController : ControllerBase
    {
        private readonly UserService _service;

        public UsersController(UserService service)
        {
            _service = service;
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
        [HttpPost]
        public async Task<ActionResult> Create([FromBody] User newUser)
        {
            // 새 User 문서 삽입
            await _service.CreateAsync(newUser);

            // 생성된 user 반환 + Location 헤더
            return CreatedAtAction(nameof(Get), new { id = newUser.Id }, newUser);
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