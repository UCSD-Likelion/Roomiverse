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
            if (string.IsNullOrEmpty(request.Text1) || string.IsNullOrEmpty(request.Text2))
            {
                return BadRequest("Text1 and Text2 are required");
            }
            double similarity = CalculateCosineSimilarity(request.Text1, request.Text2);
            return Ok(similarity);
        }

        private double CalculateCosineSimilarity(string text1, string text2)
        {
            Dictionary<string, int> wordFrequency1 = GetWordFrequency(text1);
            Dictionary<string, int> wordFrequency2 = GetWordFrequency(text2);

            double dotProduct = 0;
            double magnitude1 = 0;
            double magnitude2 = 0;

            foreach (var word in wordFrequency1.Keys.Union(wordFrequency2.Keys))
            {
                int frequency1 = wordFrequency1.GetValueOrDefault(word, 0);
                int frequency2 = wordFrequency2.GetValueOrDefault(word, 0);

                dotProduct += frequency1 * frequency2;
                magnitude1 += frequency1 * frequency1;
                magnitude2 += frequency2 * frequency2;
            }

            magnitude1 = Math.Sqrt(magnitude1);
            magnitude2 = Math.Sqrt(magnitude2);

            return dotProduct / (magnitude1 * magnitude2);
        }

        private Dictionary<string, int> GetWordFrequency(string text)
        {
            return text.Split(' ', StringSplitOptions.RemoveEmptyEntries)
                        .GroupBy(word => word)
                        .ToDictionary(group => group.Key, group => group.Count());
        }
    }

    public class SimilarityRequest
    {
        public string Text1 { get; set; }
        public string Text2 { get; set; }
    }
}