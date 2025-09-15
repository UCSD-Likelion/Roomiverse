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

        // 3) Create or Update Preferences (Upsert)
        [HttpPut]
        [Authorize] // Ensure only authenticated users can update preferences
        public async Task<IActionResult> UpsertPreferences([FromBody] Preferences updatedPrefs)
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
                // Create new preferences
                updatedPrefs.UserId = userId;
                await _preferencesService.CreateAsync(updatedPrefs);
                return CreatedAtAction(
                    nameof(GetPreferencesByUserId),
                    new { userId = updatedPrefs.UserId },
                    updatedPrefs
                );
            }
            else
            {
                // Update existing preferences
                updatedPrefs.Id = existing.Id; // Retain the existing `_id`
                await _preferencesService.UpdateAsync(userId, updatedPrefs);
                return NoContent(); // Or return Ok(updatedPrefs) if you want to send the updated object back
            }
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
