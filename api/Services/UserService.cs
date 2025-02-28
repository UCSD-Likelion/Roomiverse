using Microsoft.Extensions.Configuration;
using MongoDB.Driver;
using api.Models; // User 모델 네임스페이스

namespace api.Services
{
    public class UserService
    {
        private readonly IMongoCollection<User> _userCollection;

        public UserService(IConfiguration configuration)
        {
            // (1) appsettings.json에서 ConnectionString 읽기
            var connectionString = configuration["MongoDB:ConnectionString"];

            // (2) 만약 비어있으면 .env에서 가져오기 (MONGO_URI)
            if (string.IsNullOrWhiteSpace(connectionString))
            {
                var envUri = Environment.GetEnvironmentVariable("MONGO_URI");
                if (!string.IsNullOrWhiteSpace(envUri))
                {
                    connectionString = envUri;
                }
            }

            // (3) Database 이름
            var databaseName = configuration["MongoDB:Database"] ?? "test";

            // (4) MongoClient 초기화
            var client = new MongoClient(connectionString);
            var database = client.GetDatabase(databaseName);

            // (5) "users" 컬렉션
            _userCollection = database.GetCollection<User>("users");
        }

        // CRUD 메서드

        public async Task<List<User>> GetAllAsync() =>
            await _userCollection.Find(_ => true).ToListAsync();

        public async Task<User?> GetByIdAsync(string id) =>
            await _userCollection.Find(u => u.Id == id).FirstOrDefaultAsync();

        public async Task CreateAsync(User user)
        {
            user.Role ??= "User";
            user.Birthdate = user.Birthdate.Date;
            user.Password = BCrypt.Net.BCrypt.HashPassword(user.Password);
            await _userCollection.InsertOneAsync(user);
        }

        public async Task UpdateAsync(string id, User updatedUser)
        {
            updatedUser.Birthdate = updatedUser.Birthdate.Date;
            // ReplaceOneAsync: 기존 문서 완전히 교체
            await _userCollection.ReplaceOneAsync(u => u.Id == id, updatedUser);
        }

        public async Task DeleteAsync(string id) =>
            await _userCollection.DeleteOneAsync(u => u.Id == id);

        public async Task<User?> GetByEmailAsync(string email) {
            return await _userCollection.Find(u => u.Email == email).FirstOrDefaultAsync();
        }

        public async Task<User?> GetByRefreshToken(string refreshToken) {
            return await _userCollection.Find(u => u.RefreshToken == refreshToken).FirstOrDefaultAsync();
        }
    }
}