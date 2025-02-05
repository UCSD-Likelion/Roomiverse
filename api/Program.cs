using DotNetEnv; // for .env
using api.Services; // UserService namespace
using Microsoft.OpenApi.Models;

var builder = WebApplication.CreateBuilder(args);

// (1) .env 파일 로드
DotNetEnv.Env.Load();

// (2) CORS 설정
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAllOrigins", policy =>
    {
        policy.AllowAnyOrigin()
              .AllowAnyMethod()
              .AllowAnyHeader();
    });
});

// (3) Controller 활성화
builder.Services.AddControllers();

// (4) MongoDB UserService 등록
builder.Services.AddSingleton<UserService>();
builder.Services.AddSingleton<PreferencesService>();

// (5) Swagger (선택)
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "MyUserAPI", Version = "v1" });
});

var app = builder.Build();

// (6) CORS
app.UseCors("AllowAllOrigins");

// (7) Swagger UI
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// (8) 기타 기본 미들웨어
app.UseHttpsRedirection();
app.UseAuthorization();

// (9) Controller 라우팅
app.MapControllers();

app.Run();