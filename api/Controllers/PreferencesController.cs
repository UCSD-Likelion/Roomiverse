using Microsoft.AspNetCore.Mvc;
using api.Services;   // Namespace for PreferencesService
using api.Models;     // Namespace for Preferences model
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using System.Security.Claims;

namespace api.Controllers  // Typical convention for controllers
{
    [Route("api/preferences")]
    [ApiController]
    public class PreferencesController : ControllerBase
    {
        private readonly PreferencesService _preferencesService;

        public PreferencesController(PreferencesService preferencesService)
        {
            _preferencesService = preferencesService;
        }

        // 1) Get All Preferences
        [HttpGet]
        public async Task<ActionResult<List<Preferences>>> GetAllPreferences()
        {
            var allPrefs = await _preferencesService.GetAllAsync();
            return Ok(allPrefs);
        }

        // 2) Get Preferences by User ID
        [HttpGet("{userId}")]
        public async Task<ActionResult<Preferences>> GetPreferencesByUserId(string userId)
        {
            var userPrefs = await _preferencesService.GetByUserIdAsync(userId);
            if (userPrefs == null)
            {
                return NotFound(new { message = "Preferences not found" });
            }

            return Ok(userPrefs);
        }

        // 3) Create Preferences
        [HttpPost]
        public async Task<ActionResult> CreatePreferences([FromBody] Preferences prefs)
        {
            await _preferencesService.CreateAsync(prefs);
            return CreatedAtAction(
                nameof(GetPreferencesByUserId),
                new { userId = prefs.UserId },
                prefs
            );
        }

        // 4) Update Preferences
        [HttpPut]
        [Authorize] // Ensure only authenticated users can update preferences
        public async Task<IActionResult> UpdatePreferences([FromBody] Preferences updatedPrefs)
        {
            // Retrieve ID from the token
            var userId = User.Claims.FirstOrDefault(c => c.Type == ClaimTypes.NameIdentifier)?.Value;

            if (userId == null)
            {
                return Unauthorized(new { message = "User ID not found in token" });
            }


            var existing = await _preferencesService.GetByUserIdAsync(userId);

            if (existing == null)
            {
                return NotFound(new { message = "Preferences not found" });
            }

            // Retain the existing `_id` to prevent modification
            updatedPrefs.Id = existing.Id;

            await _preferencesService.UpdateAsync(userId, updatedPrefs);
            return NoContent();
        }

        // 5) Delete Preferences
        [HttpDelete("{userId}")]
        public async Task<IActionResult> DeletePreferences(string userId)
        {
            var existing = await _preferencesService.GetByUserIdAsync(userId);
            if (existing == null)
            {
                return NotFound(new { message = "Preferences not found" });
            }

            await _preferencesService.DeleteAsync(userId);
            return NoContent();
        }
    }
}
