# Dita Employee Management System

This project is a full-stack web application designed to manage employee data. It includes a **frontend** built with React, TypeScript, and Vite, and a **backend** built with Node.js, Express, and Sequelize connected to a PostgreSQL database.

## Features
- **Client**:
  - Responsive UI to manage and display employee data.
  - Fetches data from the backend API.
  - Built with modern tools like React and Vite.
- **Server**:
  - RESTful API for managing employee data.
  - PostgreSQL integration using Sequelize ORM.
  - Endpoints for fetching and adding employee data.

## Project Structure
```
dita-employee-management-system/
├── client/             # Frontend application
│   ├── src/            # React application source code
│   ├── public/         # Static assets
│   ├── .env            # Frontend environment variables
│   ├── README.md       # Client documentation
├── server/             # Backend application
│   ├── models/         # Sequelize models
│   ├── database.ts     # Database connection
│   ├── server.ts       # Main server file
│   ├── .env.development# Backend environment variables
│   ├── README.md       # Server documentation
└── README.md           # Root documentation
```

## Getting Started
To run the project, follow these steps:

### Prerequisites
- Node.js (v16+ recommended)
- PostgreSQL installed locally or via Docker

### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd dita-employee-management-system
   ```

2. Install dependencies for both `client` and `server`:
   ```bash
   cd client
   npm install
   cd ../server
   npm install
   ```

### Environment Variables
Set up environment variables for both client and server:

#### Client (`client/.env`):
```env
VITE_API_URL=http://localhost:3001
```

#### Server (`server/.env.development`):
```env
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USER=postgres
DATABASE_PASSWORD=yourpassword
DATABASE_NAME=postgres
```

### Running the Applications
1. **Start the backend**:
   ```bash
   cd server
   NODE_ENV=development npx ts-node server.ts
   ```

2. **Start the frontend**:
   ```bash
   cd client
   npm run dev
   ```

3. Open the frontend in your browser at [http://localhost:5173](http://localhost:5173).

## API Endpoints
- **GET /employees**: Fetch all employees.
- **POST /employees**: Add a new employee.

## Future Enhancements
- Implement employee update and delete operations.
- Add filtering, sorting, and pagination for employee data.
- Secure the API with authentication and authorization.
- Add unit and integration tests.

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.

---

Feel free to explore the individual `README.md` files in the `client` and `server` directories for more details about each application.

