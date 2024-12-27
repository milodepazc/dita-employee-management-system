import dotenvFlow from 'dotenv-flow';
dotenvFlow.config({
  path: __dirname,
});
import express, { Request, Response } from 'express';
import cors from 'cors'; 
import sequelize from './database';
import Employee from './models/Employee';

const app = express();
app.use(cors()); 
app.use(express.json());

app.get('/employees', async (req, res) => {
  try {
    const employees = await Employee.findAll();
    res.json(employees);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch employees' });
  }
});

app.post('/employees', async (req, res) => {
  try {
    const newEmployee = await Employee.create(req.body);
    res.status(201).json(newEmployee);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create employee' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

sequelize
  .sync()
  .then(() => console.log('Database synced'))
  .catch((err) => console.error('Database sync failed:', err));
