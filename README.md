# Roomiverse - AI-Powered Roommate Matching

Roomiverse is a web application designed to help users find compatible roommates through a detailed, preference-based matching system powered by a machine learning model.

**Team**: Andrew Park, Chanhee Kang, Junseo Yun, Seah Park, Chanbin Na

## Features

- **User Authentication**: Secure user registration and login system using JWT for session management.
- **Multi-Step Matching Survey**: A comprehensive, multi-part questionnaire to gather user preferences on lifestyle, habits, and housing choices.
- **Heuristic Matching**: Utilizes a backend machine learning model (ML.NET) to calculate a cosine similarity score between users, ensuring highly compatible matches.
- **User Profiles**: Users can create and manage their profiles, including personal information and profile pictures with cropping functionality.
- **Dashboard**: A personalized dashboard where users can view their potential roommate matches.
- **Responsive Design**: A modern and responsive user interface built with React and Material-UI.

## Tech Stack

### Frontend

- **Framework**: React.js
- **Build Tool**: Vite
- **UI Library**: Material-UI (MUI)
- **Routing**: React Router
- **HTTP Client**: Axios
- **State Management**: React Context
- **Linting**: ESLint

### Backend

- **Framework**: ASP.NET Core Web API (.NET 8)
- **Database**: MongoDB
- **Machine Learning**: ML.NET (for Cosine Similarity)
- **Authentication**: JSON Web Tokens (JWT)
- **API Documentation**: Swashbuckle (Swagger)

## Getting Started

This section will guide you through setting up and running the Roomiverse application locally.

### Prerequisites

Make sure you have the following software installed on your system:

-   [.NET 8 SDK](https://dotnet.microsoft.com/download/dotnet/8.0)
-   [Node.js (v18 or later)](https://nodejs.org/)
-   [MongoDB](https://www.mongodb.com/try/download/community)

### Backend Setup (API)

1.  **Navigate to the API directory:**
    ```bash
    cd api
    ```

2.  **Create an environment file:**
    Create a new file named `.env` in the `api` directory and add the following environment variables.

    ```
    MONGO_URI="your_mongodb_connection_string"
    JWT_KEY="a_super_secret_key_that_is_long_and_secure"
    JWT_ISSUER="your_issuer"
    JWT_AUDIENCE="your_audience"
    ```
    *Replace `"your_mongodb_connection_string"` with your actual MongoDB connection string.*

3.  **Install dependencies:**
    ```bash
    dotnet restore
    ```

4.  **Run the backend server:**
    ```bash
    dotnet run
    ```
    The API will start, and by default, it should be accessible at `http://localhost:5129` and `https://localhost:7129`. Swagger UI will be available at `https://localhost:7129/swagger`.

### Frontend Setup

1.  **Navigate to the frontend directory:**
    In a new terminal, go to the `frontend` directory.
    ```bash
    cd frontend
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the frontend development server:**
    ```bash
    npm run dev
    ```

4.  **Access the application:**
    Open your web browser and navigate to `http://localhost:5173`.
