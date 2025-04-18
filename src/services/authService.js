import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth'; // Remplacer par l'URL de votre API

export const login = async (credentials) => {
    try {
        const response = await axios.post(`${API_URL}/login`, credentials);
        return response.data; // Retourne les données de l'utilisateur
    } catch (error) {
        throw new Error('Login failed');
    }
};
