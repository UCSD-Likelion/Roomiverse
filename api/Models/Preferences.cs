using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;

namespace api.Models
{
    public class Preferences
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; } = null!;

        [BsonElement("userId")]
        [BsonRepresentation(BsonType.ObjectId)]
        public string UserId { get; set; } = null!; // Links to `AuthDB.users`

        [BsonElement("offCampus")]
        public bool? OffCampus { get; set; }

        [BsonElement("guestFrequency")]
        public int? GuestFrequency { get; set; }

        [BsonElement("genderPreference")]
        public string GenderPreference { get; set; } = "no-preference";

        [BsonElement("pets")]
        public string? Pets { get; set; }

        [BsonElement("smokingStatus")]
        public string? SmokingStatus { get; set; }

        [BsonElement("okayWithSmoker")]
        public bool? OkayWithSmoker { get; set; }

        [BsonElement("drinkingStatus")]
        public string? DrinkingStatus { get; set; }

        [BsonElement("okayWithDrinker")]
        public bool? OkayWithDrinker { get; set; }

        [BsonElement("sleepTime")]
        public string? SleepTime { get; set; }

        [BsonElement("wakeTime")]
        public string? WakeTime { get; set; }

        [BsonElement("importanceOfSleepSchedule")]
        public int? ImportanceOfSleepSchedule { get; set; }

        [BsonElement("cleaningFrequency")]
        public int? CleaningFrequency { get; set; }

        [BsonElement("major")]
        public string Major { get; set; } = string.Empty;

        [BsonElement("college")]
        public string College { get; set; } = string.Empty;

        [BsonElement("ethnicity")]
        public string Ethnicity { get; set; } = string.Empty;

        [BsonElement("offCampusPreferences")]
        public OffCampusPreferences? OffCampusPreferences { get; set; }
    }

    public class OffCampusPreferences
    {
        [BsonElement("distanceFromSchool")]
        public double DistanceFromSchool { get; set; }

        [BsonElement("preferredPriceRange")]
        public string PreferredPriceRange { get; set; } = string.Empty;

        [BsonElement("roomType")]
        public string RoomType { get; set; } = string.Empty;
    }
}
