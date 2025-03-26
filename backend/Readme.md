# Nexin Backend

This is the backend service for the Nexin application. It provides user authentication, profile management, and session handling.

## Features
- User registration and login
- JWT-based authentication
- Password hashing with bcrypt
- Redis-based session management for logout
- Validation for user input

## Prerequisites
- Node.js (v14 or higher)
- MongoDB
- Redis
- Environment variables configured in a `.env` file

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd Nexin/Backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and configure the following variables:
   ```
   MONGO_URI=<your-mongodb-connection-string>
   JWT_SECRET=<your-jwt-secret>
   REDIS_HOST=<your-redis-host>
   REDIS_PORT=<your-redis-port>
   ```

4. Start the server:
   ```bash
   npx nodemon
   ```

5. The server will run on `http://localhost:3000` by default.

## API Endpoints

### User Routes

#### Register a User
- **POST** `/register`
- **Body**:
  ```json
  {
    "email": "user@example.com",
    "password": "password123"
  }
  ```
- **Response**:
  ```json
  {
    "user": { "email": "user@example.com", ... },
    "token": "jwt-token"
  }
  ```

#### Login
- **POST** `/login`
- **Body**:
  ```json
  {
    "email": "user@example.com",
    "password": "password123"
  }
  ```
- **Response**:
  ```json
  {
    "user": { "email": "user@example.com", ... },
    "token": "jwt-token"
  }
  ```

#### Get Profile
- **GET** `/profile`
- **Headers**: `Authorization: Bearer <jwt-token>`
- **Response**:
  ```json
  {
    "user": { "email": "user@example.com", ... }
  }
  ```

#### Logout
- **GET** `/logout`
- **Headers**: `Authorization: Bearer <jwt-token>`
- **Response**:
  ```json
  {
    "message": "Logged Out Successfully"
  }
  ```

## Project Structure
- `controllers/`: Contains route handlers for user-related operations.
- `models/`: Defines the Mongoose schemas and models.
- `services/`: Contains business logic and utility functions.
- `routes/`: Defines API routes.
- `middleware/`: Contains middleware for authentication and validation.

## License
This project is licensed under the MIT License.
