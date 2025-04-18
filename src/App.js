import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import OperationPage from './pages/OperationPage';
import CategoryPage from './pages/CategoryPage';
import './App.css';

const App = () => {
    return ( 
        <Router>
            <Navbar />
            <main>
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/dashboard" element={<DashboardPage />} />
                    <Route path="/operations" element={<OperationPage />} />
                    <Route path="/categories" element={<CategoryPage />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
};

export default App;
