import axios from 'axios';
import { ContactFormData } from '../types';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const contactService = {
  sendMessage: async (data: ContactFormData) => {
    const response = await axios.post(`${API_BASE_URL}/contact`, data);
    return response.data;
  }
};
