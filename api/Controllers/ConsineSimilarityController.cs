using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.ML;
using System.Text;
using api.Services;
using api.Models;

namespace api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ConsineSimilarityController : ControllerBase
    {
        private readonly PreferencesService _preferencesService;

        public ConsineSimilarityController(PreferencesService preferencesService)
        {
            _preferencesService = preferencesService;
        }

        [HttpGet("{userId}")]
        public async Task<IActionResult> CalculateSimilarity(string userId)
        {
            var target = await _preferencesService.GetByUserIdAsync(userId);
            if (target == null)
            {
                return NotFound(new { message = "Preferences not found" });
            }

            var allPreferences = await _preferencesService.GetAllAsync();
            var otherUsers = allPreferences.Where(p => p.UserId != userId).ToList();

            if (otherUsers.Count == 0)
            {
                return NotFound(new { message = "No other users found" });
            }

            var results = new List<SimilarityResult>();
            var targetVector = ConvertToVector(target);

            foreach (var user in otherUsers)
            {
                if (user.GuestFrequency == null || user.SleepTime == null || user.WakeTime == null ||
                    user.ImportanceOfSleepSchedule == null || user.CleaningFrequency == null)
                {
                    continue; // Skip users with null values
                }
                var userVector = ConvertToVector(user);
                double score = CalculateCosineSimilarity(targetVector, userVector);
                results.Add(new SimilarityResult
                {
                    UserId = user.UserId,
                    Similarity = score
                });
            }

            var sorted = results.OrderByDescending(r => r.Similarity).Take(20).ToList();
            return Ok(sorted);
        }

        private static double[] ConvertToVector(Preferences p)
        {
            return new double[] {
                Convert.ToDouble(p.GuestFrequency),
                TimeToDecimal(p.SleepTime!),
                TimeToDecimal(p.WakeTime!),
                Convert.ToDouble(p.ImportanceOfSleepSchedule),
                Convert.ToDouble(p.CleaningFrequency)
            };
        }

        private static double TimeToDecimal(string timeStr)
        {
            if (TimeSpan.TryParse(timeStr, out var time))
            {
                return time.Hours + time.Minutes / 60.0;
            }
            return 0;
        }

        private static double CalculateCosineSimilarity(double[] vector1, double[] vector2)
        {
            double dotProduct = vector1.Zip(vector2, (x, y) => x * y).Sum();
            double magnitude1 = Math.Sqrt(vector1.Sum(x => x * x));
            double magnitude2 = Math.Sqrt(vector2.Sum(x => x * x));

            if (magnitude1 == 0 && magnitude2 == 0)
            {
                return 1;
            }

            return magnitude1 == 0 || magnitude2 == 0 ? 0 : dotProduct / (magnitude1 * magnitude2);
        }
    }

    public class SimilarityResult
    {
        public string UserId { get; set; } = string.Empty;
        public double Similarity { get; set; }
    }
}