// src/api.js

const API_BASE_URL = "https://127.0.0.1:8000/api";

/**
 * Inscription d'un nouvel utilisateur.
 * @param {Object} param0
 * @param {string} param0.username
 * @param {string} param0.email
 * @param {string} param0.password
 * @returns {Promise<Object>} Données retournées côté backend
 */
export async function registerUser({ username, email, password }) {
  const response = await fetch(`${API_BASE_URL}/users/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, email, password }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || "Erreur lors de l'inscription");
  }

  return response.json();
}

/**
 * Connexion utilisateur : récupération du token JWT.
 * @param {Object} param0
 * @param {string} param0.username
 * @param {string} param0.password
 * @returns {Promise<string>} Le token JWT
 */
export async function loginUser({ username, password }) {
  const response = await fetch(`${API_BASE_URL}/login_check`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });

  if (!response.ok) {
    const error = await response.json();
    // Selon ta config backend, erreur peut être dans detail ou error
    throw new Error(error.detail || error.error || "Erreur lors de la connexion");
  }

  const data = await response.json();

  return data.token;
}

/**
 * Récupérer la liste des catégories (protégée).
 * @param {string} token Token JWT
 * @returns {Promise<Array>} Liste des catégories
 */
export async function fetchCategories(token) {
  const response = await fetch(`${API_BASE_URL}/categories/`, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Erreur lors de la récupération des catégories");
  }

  return response.json();
}

/**
 * Récupérer la liste des opérations (protégée).
 * @param {string} token Token JWT
 * @returns {Promise<Array>} Liste des opérations
 */
export async function fetchOperations(token) {
  const response = await fetch(`${API_BASE_URL}/operations/`, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Erreur lors de la récupération des opérations");
  }

  return response.json();
}

/**
 * Ajouter une opération (protégée).
 * @param {string} token Token JWT
 * @param {Object} operation Objet opération : { label, amount, date, category_id }
 * @returns {Promise<Object>} Données retournées côté backend
 */
export async function addOperation(token, operation) {
  const response = await fetch(`${API_BASE_URL}/operations/`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(operation),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || "Erreur lors de l'ajout de l'opération");
  }

  return response.json();
}
