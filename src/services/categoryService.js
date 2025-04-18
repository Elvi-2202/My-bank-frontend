import axios from 'axios';

const API_URL = 'http://localhost:5000/api/categories'; // Remplacer par l'URL de votre API

export const createCategory = async (category) => {
    try {
        const response = await axios.post(API_URL, category);
        return response.data;
    } catch (error) {
        throw new Error('Failed to create category');
    }
};
