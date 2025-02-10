## Nexin Project Backend Documentation

## User Routes Documentation

### 1. Register User
- **URL:** `/register`
- **Method:** `POST`
- **Body Parameters:**
  - `email` (string, required): User's email address.
  - `password` (string, required): User's password (minimum 3 characters).
- **Example Request:**
  ```json
  {
    "email": "example@example.com",
    "password": "password123"
  }
  ```
- **Success Response:**
  - **Code:** 201
  - **Content:**
    ```json
    {
      "user": {
        "_id": "user_id",
        "email": "example@example.com",
        // ...other user fields...
      },
      "token": "jwt_token"
    }
    ```
- **Error Response:**
  - **Code:** 400
  - **Content:**
    ```json
    {
      "errors": [
        {
          "msg": "Email must be a valid email address",
          "param": "email",
          "location": "body"
        },
        {
          "msg": "Password must be atleast 3 character long",
          "param": "password",
          "location": "body"
        }
      ]
    }
    ```

### 2. Login User
- **URL:** `/login`
- **Method:** `POST`
- **Body Parameters:**
  - `email` (string, required): User's email address.
  - `password` (string, required): User's password (minimum 3 characters).
- **Example Request:**
  ```json
  {
    "email": "example@example.com",
    "password": "password123"
  }
  ```
- **Success Response:**
  - **Code:** 201
  - **Content:**
    ```json
    {
      "user": {
        "_id": "user_id",
        "email": "example@example.com",
        // ...other user fields...
      },
      "token": "jwt_token"
    }
    ```
- **Error Response:**
  - **Code:** 400
  - **Content:**
    ```json
    {
      "errors": "Invalid Credentials"
    }
    ```

### 3. Get User Profile
- **URL:** `/profile`
- **Method:** `GET`
- **Headers:**
  - `Authorization`: Bearer `jwt_token`
- **Success Response:**
  - **Code:** 200
  - **Content:**
    ```json
    {
      "user": {
        "_id": "user_id",
        "email": "example@example.com",
        // ...other user fields...
      }
    }
    ```
- **Error Response:**
  - **Code:** 401
  - **Content:**
    ```json
    {
      "message": "Unauthorized"
    }
    ```

### 4. Get All Users
- **URL:** `/all`
- **Method:** `GET`
- **Headers:**
  - `Authorization`: Bearer `jwt_token`
- **Success Response:**
  - **Code:** 200
  - **Content:**
    ```json
    {
      "users": [
        {
          "_id": "user_id_1",
          "email": "user1@example.com",
          // ...other user fields...
        },
        {
          "_id": "user_id_2",
          "email": "user2@example.com",
          // ...other user fields...
        }
      ]
    }
    ```
- **Error Response:**
  - **Code:** 401
  - **Content:**
    ```json
    {
      "message": "Unauthorized"
    }
    ```

### 5. Logout User
- **URL:** `/logout`
- **Method:** `GET`
- **Headers:**
  - `Authorization`: Bearer `jwt_token`
- **Success Response:**
  - **Code:** 200
  - **Content:**
    ```json
    {
      "message": "Logged Out Successfully"
    }
    ```
- **Error Response:**
  - **Code:** 400
  - **Content:**
    ```json
    {
      "message": "Error message"
    }
    ```

## Project Routes Documentation

### 1. Create Project
- **URL:** `/create`
- **Method:** `POST`
- **Headers:**
  - `Authorization`: Bearer `jwt_token`
- **Body Parameters:**
  - `name` (string, required): Project name.
- **Example Request:**
  ```json
  {
    "name": "New Project"
  }
  ```
- **Success Response:**
  - **Code:** 201
  - **Content:**
    ```json
    {
      "_id": "project_id",
      "name": "New Project",
      "users": ["user_id"]
      // ...other project fields...
    }
    ```
- **Error Response:**
  - **Code:** 400
  - **Content:**
    ```json
    {
      "errors": [
        {
          "msg": "Name is required",
          "param": "name",
          "location": "body"
        }
      ]
    }
    ```

### 2. Get All Projects
- **URL:** `/all`
- **Method:** `GET`
- **Headers:**
  - `Authorization`: Bearer `jwt_token`
- **Success Response:**
  - **Code:** 200
  - **Content:**
    ```json
    {
      "projects": [
        {
          "_id": "project_id_1",
          "name": "Project 1",
          "users": ["user_id"]
          // ...other project fields...
        },
        {
          "_id": "project_id_2",
          "name": "Project 2",
          "users": ["user_id"]
          // ...other project fields...
        }
      ]
    }
    ```
- **Error Response:**
  - **Code:** 401
  - **Content:**
    ```json
    {
      "message": "Unauthorized"
    }
    ```

### 3. Add Users to Project
- **URL:** `/add-user`
- **Method:** `PUT`
- **Headers:**
  - `Authorization`: Bearer `jwt_token`
- **Body Parameters:**
  - `projectId` (string, required): Project ID.
  - `users` (array of strings, required): Array of user IDs.
- **Example Request:**
  ```json
  {
    "projectId": "project_id",
    "users": ["user_id_1", "user_id_2"]
  }
  ```
- **Success Response:**
  - **Code:** 200
  - **Content:**
    ```json
    {
      "_id": "project_id",
      "name": "Project Name",
      "users": ["user_id_1", "user_id_2"]
      // ...other project fields...
    }
    ```
- **Error Response:**
  - **Code:** 400
  - **Content:**
    ```json
    {
      "errors": [
        {
          "msg": "Project ID is required",
          "param": "projectId",
          "location": "body"
        },
        {
          "msg": "Users must be an array with at least one user",
          "param": "users",
          "location": "body"
        }
      ]
    }
    ```

### 4. Get Project by ID
- **URL:** `/get-project/:projectId`
- **Method:** `GET`
- **Headers:**
  - `Authorization`: Bearer `jwt_token`
- **Success Response:**
  - **Code:** 200
  - **Content:**
    ```json
    {
      "project": {
        "_id": "project_id",
        "name": "Project Name",
        "users": ["user_id"]
        // ...other project fields...
      }
    }
    ```
- **Error Response:**
  - **Code:** 400
  - **Content:**
    ```json
    {
      "message": "Invalid Project"
    }
    ```