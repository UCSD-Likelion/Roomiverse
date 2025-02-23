using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Models
{
    public class RefreshRequest
    {
        public string RefreshToken { get; set; } = string.Empty;
    }
}