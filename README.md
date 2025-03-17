# User Management App (React + Express + Mysql)

A simple **User Management App** built with **React** on the frontend and **Express** on the backend. This app allows users to list, add, and update user data.

## Table of Contents

1. [Technologies](#technologies)
2. [Getting Started](#getting-started)
3. [Backend Setup (Express)](#backend-setup-express)
4. [API Endpoints](#api-endpoints)

---

## Technologies
- **Frontend**: React, React Router, Fetch API
- **Backend**: Express.js
- **Database**: Mysql
- **CORS**: For handling cross-origin requests between the React frontend and Express backend.

---

## Getting Started
### Prerequisites

Make sure you have the following installed on your machine:
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
### Backend Setup (Express)

1. **Clone the repository**:

   ```bash
   git clone https://github.com/aakash-simform/trainee_backend.git   
   ```

2. **Navigate to the trainee_backend folder** and install dependencies:

   ```bash
   cd trainee_backend
   npm install
   ```

3. **Run the Express backend**:

   To start the backend, run:

   ```bash
   npm start
   ```

   This will start the Express server on `http://localhost:3000` by default.


## API Endpoints

### **Backend API Endpoints**:

1. **GET /users** - Fetch the list of users
   - **URL**: `http://localhost:5000/users`
   - **Method**: GET
   - **Response**: List of users (Example: `[ { "id": 1, "name": "John Doe", "email": "john@example.com" } ]`)

2. **POST /add** - Add a new user
   - **URL**: `http://localhost:5000/add`
   - **Method**: POST
   - **Body**:
     ```json
     {
       "name": "New User",
       "email": "newuser@example.com"
     }
     ```
   - **Response**: Confirmation message (e.g., `{"message": "User added successfully"}`)

3. **PUT /update** - Update an existing user
   - **URL**: `http://localhost:5000/update`
   - **Method**: PUT
   - **Body**:
     ```json
     {
       "id": 1,
       "name": "Updated Name"
     }
     ```
   - **Response**: Confirmation message (e.g., `{"message": "User updated successfully"}`)
