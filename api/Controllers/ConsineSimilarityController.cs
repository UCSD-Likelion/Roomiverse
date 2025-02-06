using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.ML;
using System.Text;

namespace api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ConsineSimilarityController : ControllerBase
    {
        [HttpPost]
        public IActionResult CalculateSimilarity([FromBody] SimilarityRequest request)
        {
            if (request == null)
            {
                return BadRequest("Text1 and Text2 are required");
            }
            double[] vectorUser1 = ConvertToVector(request.User1);
            double[] vectorUser2 = ConvertToVector(request.User2);
            double similarity = CalculateCosineSimilarity(vectorUser1, vectorUser2);
            return Ok(similarity);
        }

        private double[] ConvertToVector(UserData user)
        {
            return new double[] {
                user.GuestFrequency,
                user.SleepTimeHours + user.SleepTimeMins / 60.0,
                user.WakeTimeHours + user.WakeTimeMins / 60.0,
                user.SleepImportance,
                user.CleaningFrequency
            };
        }

        private double CalculateCosineSimilarity(double[] vector1, double[] vector2)
        {
            double dotProduct = vector1.Zip(vector2, (x, y) => x * y).Sum();
            double magnitude1 = Math.Sqrt(vector1.Sum(x => x * x));
            double magnitude2 = Math.Sqrt(vector2.Sum(x => x * x));

            return magnitude1 == 0 || magnitude2 == 0 ? 0 : dotProduct / (magnitude1 * magnitude2);
        }
    }

    public class SimilarityRequest
    {
        public required UserData User1 { get; set; }
        public required UserData User2 { get; set; }
    }

    public class UserData
    {
        public int GuestFrequency { get; set; }
        public int SleepTimeHours { get; set; }
        public int SleepTimeMins { get; set; }
        public int WakeTimeHours { get; set; }
        public int WakeTimeMins { get; set; }
        public int SleepImportance { get; set; }
        public int CleaningFrequency { get; set; }
    }
}