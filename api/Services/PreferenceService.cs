using Microsoft.Extensions.Configuration;
using MongoDB.Driver;
using api.Models;


namespace api.Services
{
    public class PreferencesService
    {
        private readonly IMongoCollection<Preferences> _preferencesCollection;

        public PreferencesService(IConfiguration configuration)
        {
            // 1) Read connection string from appsettings.json => MatchDB:ConnectionString
            var connectionString = configuration["MongoDB:ConnectionString"];

            // 2) If empty, read from .env => MATCH_MONGO_URI
            if (string.IsNullOrWhiteSpace(connectionString))
            {
                var envUri = Environment.GetEnvironmentVariable("MONGO_URI");
                if (!string.IsNullOrWhiteSpace(envUri))
                {
                    connectionString = envUri;
                }
            }

            // 3) Determine database name
<<<<<<< HEAD
            var databaseName = configuration["MongoDB:Database"] ?? "test";
=======
        var databaseName = configuration["MongoDB:Database"] ?? "test";
>>>>>>> 3fca4a0d38e8e20f5a5ef73dbef12112cc64c0a0

            // 4) Initialize MongoClient
            var client = new MongoClient(connectionString);
            var database = client.GetDatabase(databaseName);

            // 5) "preferences" collection
            _preferencesCollection = database.GetCollection<Preferences>("preferences");
        }

        // ========== CRUD Methods ==========

        // A) Get all preferences
        public async Task<List<Preferences>> GetAllAsync() =>
            await _preferencesCollection.Find(_ => true).ToListAsync();

        // B) Get by userId
        public async Task<Preferences?> GetByUserIdAsync(string userId) =>
            await _preferencesCollection.Find(p => p.UserId == userId).FirstOrDefaultAsync();

        // C) Create new
        public async Task CreateAsync(Preferences prefs)
        {
            prefs.CreatedAt = DateTime.UtcNow;
            await _preferencesCollection.InsertOneAsync(prefs);
        }

        // D) Update existing
        public async Task UpdateAsync(string userId, Preferences updatedPrefs)
        {
            var filter = Builders<Preferences>.Filter.Eq(p => p.UserId, userId);

            // Only update mutable fields, excluding `_id`
            var update = Builders<Preferences>.Update
                .Set(p => p.OffCampus, updatedPrefs.OffCampus)
                .Set(p => p.GuestFrequency, updatedPrefs.GuestFrequency)
                .Set(p => p.GenderPreference, updatedPrefs.GenderPreference)
                .Set(p => p.Pets, updatedPrefs.Pets)
                .Set(p => p.SmokingStatus, updatedPrefs.SmokingStatus)
                .Set(p => p.OkayWithSmoker, updatedPrefs.OkayWithSmoker)
                .Set(p => p.DrinkingStatus, updatedPrefs.DrinkingStatus)
                .Set(p => p.OkayWithDrinker, updatedPrefs.OkayWithDrinker)
                .Set(p => p.SleepTime, updatedPrefs.SleepTime)
                .Set(p => p.WakeTime, updatedPrefs.WakeTime)
                .Set(p => p.ImportanceOfSleepSchedule, updatedPrefs.ImportanceOfSleepSchedule)
                .Set(p => p.CleaningFrequency, updatedPrefs.CleaningFrequency)
                .Set(p => p.Major, updatedPrefs.Major)
                .Set(p => p.College, updatedPrefs.College)
                .Set(p => p.Ethnicity, updatedPrefs.Ethnicity)
                .Set(p => p.OffCampusPreferences, updatedPrefs.OffCampusPreferences);

            await _preferencesCollection.UpdateOneAsync(filter, update);
        }

        // E) Delete
        public async Task DeleteAsync(string userId) =>
            await _preferencesCollection.DeleteOneAsync(p => p.UserId == userId);
    }
}
