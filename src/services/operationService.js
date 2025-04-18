import axios from 'axios';

const API_URL = 'http://localhost:5000/api/operations'; // Remplacer par l'URL de votre API

export const getOperations = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch operations');
    }
};

export const createOperation = async (operation) => {
    try {
        const response = await axios.post(API_URL, operation);
        return response.data;
    } catch (error) {
        throw new Error('Failed to create operation');
    }
};
