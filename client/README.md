# Client - Dita Employee Management System

This is the frontend of the Dita Employee Management System, built with **React**, **TypeScript**, and **Vite**. The client communicates with the backend API to fetch and manage employee data.

## Features
- Responsive UI for managing employees.
- Fetches data from the backend API (`/employees` endpoint).
- Displays employee details in a table format.

## Installation
1. Navigate to the `client` directory:
   ```bash
   cd client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

## Running the App
1. Start the development server:
   ```bash
   npm run dev
   ```
2. Open the app in your browser at [http://localhost:5173](http://localhost:5173).

## Environment Variables
This app uses environment variables to configure the API endpoint. Create a `.env` file in the `client` directory with the following:
```env
VITE_API_URL=http://localhost:3001
```

## Project Structure
```
client/
├── src/
│   ├── hooks/          # Custom React hooks
│   ├── App.tsx         # Main application file
│   ├── index.tsx       # Entry point
│   ├── styles/         # Styling files
├── public/             # Static assets
├── .env                # Environment variables
```

## Available Scripts
- **`npm run dev`**: Starts the development server.
- **`npm run build`**: Builds the app for production.
- **`npm run preview`**: Previews the production build.

## Dependencies
- **React**
- **Vite**
- **Axios**

## TODO
- Implement employee CRUD operations.
- Add advanced filtering and sorting options.

