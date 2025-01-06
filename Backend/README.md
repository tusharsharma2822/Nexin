# Nexin AI

## Description
Nexin AI is an AI-powered chat application designed to provide secure and reliable real-time assistance. It offers features such as conversational analytics and multilingual support, making it a versatile tool for users seeking advanced AI-driven communication solutions.

## Features
- **Real-Time AI Assistance**: Get instant help from our AI-powered chat assistant.
- **Conversational Analytics**: Analyze your conversations with advanced analytics tools.
- **Multilingual Support**: Chat in multiple languages with our multilingual support.
- **User Authentication**: Secure user registration and login.
- **Session Management**: Manage user sessions with JWT and Redis.

## Installation
Follow these steps to set up and run the project locally:

### Backend
1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/nexin-ai.git
    cd nexin-ai/Backend
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Set up environment variables**:
    Create a `.env` file in the [Backend](http://_vscodecontentref_/0) directory and add the following:
    ```env
    PORT=3000
    MONGO_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    REDIS_HOST=your_redis_host
    REDIS_PORT=your_redis_port
    REDIS_PASSWORD=your_redis_password
    ```

4. **Run the server**:
    ```bash
    npm start
    ```

## Usage
1. **Register a new user**:
    - Send a POST request to `/users/register` with [email](http://_vscodecontentref_/1) and [password](http://_vscodecontentref_/2) in the body.
2. **Login**:
    - Send a POST request to `/users/login` with [email](http://_vscodecontentref_/3) and [password](http://_vscodecontentref_/4) in the body.
3. **Access Profile**:
    - Send a GET request to `/users/profile` with the JWT token in the Authorization header.
4. **Logout**:
    - Send a GET request to `/users/logout` with the JWT token in the Authorization header.

## Files Included
- **Backend**
  - [server.js](http://_vscodecontentref_/5): Entry point for the backend server.
  - [app.js](http://_vscodecontentref_/6): Express application setup.
  - [db.js]: Database connection setup.
  - [user.model.js](http://_vscodecontentref_/7): Mongoose schema and model for user.
  - [redis.service.js](http://_vscodecontentref_/8): Redis client setup.
  - [user.service.js](http://_vscodecontentref_/9): User-related business logic.
  - [user.controller.js](http://_vscodecontentref_/10): User-related request handlers.
  - [user.routes.js](http://_vscodecontentref_/11): User-related routes.
  - `middleware/auth.middleware.js`: Authentication middleware.

- **Frontend**
  - `src/context/user.context.jsx`: User context setup.
  - `src/components/Home.jsx`: Home page component.
  - `src/components/Login.jsx`: Login page component.
  - `src/App.js`: Main application component.
  - `src/index.js`: Entry point for the frontend application.

## Technologies Used
- **Backend**:
  - Node.js
  - Express
  - MongoDB
  - Mongoose
  - Redis
  - JWT
  - bcrypt
  - dotenv

- **Frontend**:
  - React
  - Tailwind CSS
  - React Router DOM

## License
This project is licensed under the MIT License.
