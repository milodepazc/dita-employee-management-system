import { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export interface Employee {
  id: number;
  name: string;
  email: string;
  department: string;
  joinDate: string;
}

export const useEmployees = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get(`${API_URL}/employees`)
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((err) => {
        console.error('Error fetching employees:', err);
        setError('Failed to fetch employees.');
      })
      .finally(() => setLoading(false));
  }, []);

  return { employees, loading, error };
};
