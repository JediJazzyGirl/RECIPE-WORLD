import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Home from './pages/Home.js';
import Login from './pages/Login.js';
import Signup from './pages/Signup.js';
import Members from './pages/Members.js';
import Drinks from './pages/Drinks.js';
import SubmitRecipe from './pages/SubmitRecipe.js';
import Admin from './pages/Admin.js';
import RecipeDetail from './pages/RecipeDetail.js';
import DrinkDetail from './pages/DrinkDetail.js';
import ProtectedRoute from './routes/ProtectedRoute.js';
import { AuthProvider } from './context/AuthContext.js';

export default function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/drinks" element={<Drinks />} /> 
        <Route path="/members" element={<ProtectedRoute><Members /></ProtectedRoute>} />
        <Route path="/submit" element={<ProtectedRoute><SubmitRecipe /></ProtectedRoute>} />
        <Route path="/admin" element={<ProtectedRoute requireAdmin><Admin /></ProtectedRoute>} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
        <Route path="/drink/:id" element={<DrinkDetail />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <footer>
        Built with React + Vite • All components in <strong>.js</strong> files (no .jsx)
      </footer>
    </AuthProvider>
  );
}
