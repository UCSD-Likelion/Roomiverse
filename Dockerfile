# 1. Build Stage
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src

# Copy the csproj file from the 'api' folder
COPY ["api/api.csproj", "api/"]

# Restore dependencies
RUN dotnet restore "api/api.csproj"

# Copy the rest of the source code
COPY . .

# Build and Publish the API project
WORKDIR "/src/api"
RUN dotnet publish "api.csproj" -c Release -o /app/publish /p:UseAppHost=false

# 2. Runtime Stage
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS final
WORKDIR /app
EXPOSE 8080
ENV ASPNETCORE_HTTP_PORTS=8080

# Copy the build artifacts
COPY --from=build /app/publish .

# Entry point
ENTRYPOINT ["dotnet", "api.dll"]