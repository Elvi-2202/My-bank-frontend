import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import OperationPage from './pages/OperationPage';
import CategoryPage from './pages/CategoryPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import NotFoundPage from './pages/NotFoundPage';
import './App.css';

function App() {
    const [operations, setOperations] = useState([]);

    // Ajoute une opération à la liste
    const addOperation = (operation) => {
        setOperations((prev) => [...prev, operation]);
    };

    return ( 
        <Router>
            <Navbar />
            <main>
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/dashboard" element={<DashboardPage />} />
                    <Route path="/operations" element={<OperationPage addOperation={addOperation} />} />
                    <Route path="/categories" element={<CategoryPage operations={operations} />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
}

export default App;
