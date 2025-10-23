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
