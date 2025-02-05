using Microsoft.AspNetCore.Mvc;
using api.Services;   // Namespace for PreferencesService
using api.Models;     // Namespace for Preferences model
using System.Collections.Generic;
using System.Threading.Tasks;

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
        [HttpPut("{userId}")]
        public async Task<IActionResult> UpdatePreferences(string userId, [FromBody] Preferences updatedPrefs)
        {
            // First, check if existing preferences are present
            var existing = await _preferencesService.GetByUserIdAsync(userId);
            if (existing == null)
            {
                return NotFound(new { message = "Preferences not found" });
            }

            // If found, update them
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
