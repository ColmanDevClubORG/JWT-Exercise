# JWT-Exercise

This repository contains a simple JWT-based authorization system built with Node.js and Express. The project demonstrates how to register and login users to generate a JWT token, and how to protect routes using that token.

## Features

- **User Registration:** Create a new user and receive a JWT.
- **User Login:** Authenticate an existing user and receive a JWT.
- **Protected Route:** Access routes that require a valid JWT.

## Prerequisites

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

## Installation

Follow these steps to get the project up and running on your local machine:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/YourUsername/JWT-Exercise.git
   cd JWT-Exercise
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Configure Environment Variables:**

   Create a `.env` file in the root directory and add your secret key. For example:

   ```env
   SECRET_KEY=YOUR_SECRET_KEY_HERE
   ```

   > **Note:** The secret key is used to sign and verify JWTs. Make sure to keep it secure!

## Usage

1. **Start the Server:**

   If you installed `nodemon` as a dev dependency, you can add a start script in your `package.json`:

   ```json
   "scripts": {
     "start": "nodemon app.js"
   }
   ```

   Then run:

   ```bash
   npm start
   ```

   Alternatively, start the server with:

   ```bash
   node app.js
   ```

2. **Test Endpoints:**

   Use Postman or your preferred API testing tool to interact with the API.

   - **Register:**  
     - **Method:** POST  
     - **URL:** `http://localhost:3000/register`  
     - **Body (JSON):**

       ```json
       {
         "email": "test@example.com",
         "password": "password123"
       }
       ```

   - **Login:**  
     - **Method:** POST  
     - **URL:** `http://localhost:3000/login`  
     - **Body (JSON):**

       ```json
       {
         "email": "test@example.com",
         "password": "password123"
       }
       ```

   - **Protected Route:**  
     - **Method:** GET  
     - **URL:** `http://localhost:3000/protected`  
     - **Headers:**  
       - **Authorization:** Paste your JWT token directly.

## What Else?

- **Error Handling:**  
  The application returns appropriate HTTP status codes and error messages when:
  - A user is not found.
  - The token is missing, invalid, or expired.
  

Happy coding!
```
