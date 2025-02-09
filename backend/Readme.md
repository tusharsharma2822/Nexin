
## Nexin Project Backend Documentation

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
