using Microsoft.Extensions.Configuration;
using MongoDB.Driver;
using api.Models;
using System.Collections.Generic;
using System.Threading.Tasks;
using System;

namespace api.Services
{
    public class PreferencesService
    {
        private readonly IMongoCollection<Preferences> _preferencesCollection;

        public PreferencesService(IConfiguration configuration)
        {
            // 1) Read connection string from appsettings.json => MatchDB:ConnectionString
            var connectionString = configuration["MatchDB:ConnectionString"];

            // 2) If empty, read from .env => MATCH_MONGO_URI
            if (string.IsNullOrWhiteSpace(connectionString))
            {
                var envUri = Environment.GetEnvironmentVariable("MATCH_MONGO_URI");
                if (!string.IsNullOrWhiteSpace(envUri))
                {
                    connectionString = envUri;
                }
            }

            // 3) Determine database name
            var databaseName = configuration["MatchDB:Database"] ?? "MatchDB";

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
            // Overwrite entire document
            updatedPrefs.CreatedAt = DateTime.UtcNow;
            await _preferencesCollection.ReplaceOneAsync(p => p.UserId == userId, updatedPrefs);
        }

        // E) Delete
        public async Task DeleteAsync(string userId) =>
            await _preferencesCollection.DeleteOneAsync(p => p.UserId == userId);
    }
}
