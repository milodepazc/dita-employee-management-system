# Server - Dita Employee Management System

This is the backend of the Dita Employee Management System, built with **Node.js**, **Express**, and **Sequelize**. The server provides API endpoints for managing employee data and connects to a PostgreSQL database.

## Features
- Serves API endpoints for employee data:
  - `GET /employees`: Fetch all employees.
  - `POST /employees`: Add a new employee.
- Connects to a PostgreSQL database using Sequelize ORM.

## Installation
1. Navigate to the `server` directory:
   ```bash
   cd server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

## Running the Server
1. Start the server:
   ```bash
   NODE_ENV=development npx ts-node server.ts
   ```
2. The server will run on [http://localhost:3001](http://localhost:3001).

## Environment Variables
Environment variables are stored in `.env` files. Create a `.env.development` file in the `server` directory with the following:
```env
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USER=postgres
DATABASE_PASSWORD=yourpassword
DATABASE_NAME=postgres
```

## Project Structure
```
server/
├── models/             # Sequelize models
│   ├── Employee.ts     # Employee model
├── database.ts         # Database connection
├── server.ts           # Main server file
├── .env.development    # Development environment variables
```

## API Endpoints
- **GET /employees**: Fetch all employees.
- **POST /employees**: Add a new employee.

## Dependencies
- **Express**
- **Sequelize**
- **PostgreSQL**

## TODO
- Add error handling and validation.
- Implement advanced filtering and pagination.
- Secure API with authentication and authorization.

