using DotNetEnv; // for .env
using api.Config; 
using api.Services; // UserService namespace
using Microsoft.OpenApi.Models;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

// .env 파일 로드
DotNetEnv.Env.Load();

var jwtSettings = new JwtSettings
{
    Key = Environment.GetEnvironmentVariable("JWT_KEY") ?? throw new Exception("JWT_KEY is required"),
    Issuer = Environment.GetEnvironmentVariable("JWT_ISSUER") ?? throw new Exception("JWT_ISSUER is required"),
    Audience = Environment.GetEnvironmentVariable("JWT_AUDIENCE") ?? throw new Exception("JWT_AUDIENCE is required")
};

Console.WriteLine($"JWT_KEY: {jwtSettings.Key}");
Console.WriteLine($"JWT_ISSUER: {jwtSettings.Issuer}");

builder.Services.AddSingleton(jwtSettings);

// Configure JWT
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options => {
    options.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuer = true,
        ValidateAudience = true,
        ValidateLifetime = true,
        ValidateIssuerSigningKey = true,
        ValidIssuer = jwtSettings.Issuer,
        ValidAudience = jwtSettings.Audience,
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtSettings.Key))
    };
});

// CORS 설정
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAllOrigins", policy =>
    {
        policy.AllowAnyOrigin()
              .AllowAnyMethod()
              .AllowAnyHeader();
    });
});

// Controller 활성화
builder.Services.AddControllers();

// MongoDB UserService 등록
builder.Services.AddSingleton<UserService>();
builder.Services.AddSingleton<PreferencesService>();

// Swagger
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "MyUserAPI", Version = "v1" });
});

var app = builder.Build();

// CORS
app.UseCors("AllowAllOrigins");

// JWT 인증
app.UseAuthentication();
app.UseAuthorization();

// Swagger UI
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// 기타 기본 미들웨어
app.UseHttpsRedirection();
app.UseAuthorization();

// Controller 라우팅
app.MapControllers();

app.Run();