
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NODE_ENV === 'production' 
    ? '/api' 
    : 'http://localhost:8000/api', // Assuming PHP server runs on port 8000
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
