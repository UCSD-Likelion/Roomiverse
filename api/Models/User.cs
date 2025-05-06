using System.ComponentModel.DataAnnotations;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace api.Models
{
    public class User
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; } = null!; // MongoDB ObjectId

        [BsonElement("name")]
        public string Name { get; set; } = string.Empty;

        [BsonElement("email")]
        public string Email { get; set; } = string.Empty;

        [BsonElement("password")]
        public string Password { get; set; } = string.Empty;

        // (1) 성별 (Gender) - 간단히 문자열로
        [BsonElement("gender")]
        public string Gender { get; set; } = string.Empty;

        // (2) 생년월일 (Birthdate) - 날짜, DateTime
        [BsonElement("birthdate")]
        public DateTime Birthdate { get; set; }

        // (3) 인스타그램 - 선택 사항 (nullable)
        [BsonElement("instagram")]
        public string? Instagram { get; set; }

        // (4) 페이스북 - 선택 사항 (nullable)
        [BsonElement("facebook")]
        public string? Facebook { get; set; }
        public string Role { get; set; } = "User";
        public string? RefreshToken { get; set; }
        public DateTime RefreshTokenExpiryTime { get; set; }
        [BsonElement("profilePicture")]
        public Photo? ProfilePicture { get; set; } = new Photo();
        [BsonElement("aboutMe")]
        public string AboutMe { get; set; } = string.Empty;
    }
}

public class Photo
{
    public byte[] Bytes { get; set; } = Array.Empty<byte>();
    public string Description { get; set; } = string.Empty;
    public string FileExtension { get; set; } = string.Empty;
    public decimal Size { get; set; }
}
