import React from 'react';
import { Routes, Route, Navigate, Link } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext.jsx';

import Home from './pages/Home.jsx';
import PublicRecipes from './pages/PublicRecipes.jsx';
import Members from './pages/Members.jsx';
import Drinks from './pages/Drinks.jsx';
import SubmitRecipe from './pages/SubmitRecipe.jsx';
import RecipeDetail from './pages/RecipeDetail.jsx';
import Admin from './pages/Admin.jsx';
import AdminDashboard from './pages/AdminDashboard.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import Profile from './pages/Profile.jsx';
import SpinnerPage from './pages/SpinnerPage.jsx';

import Navbar from './components/Navbar.jsx';

function RequireAuth({ children }) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" replace />;
}

function RequireAdmin({ children }) {
  const { user } = useAuth();
  return user?.isAdmin ? children : <Navigate to="/" replace />;
}

export default function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/public" element={<PublicRecipes />} />
        <Route path="/members" element={<RequireAuth><Members /></RequireAuth>} />
        <Route path="/drinks" element={<RequireAuth><Drinks /></RequireAuth>} />
        <Route path="/submit" element={<RequireAuth><SubmitRecipe /></RequireAuth>} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
        <Route path="/admin" element={<RequireAdmin><Admin /></RequireAdmin>} />
        <Route path="/admin-dashboard" element={<RequireAdmin><AdminDashboard /></RequireAdmin>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<RequireAuth><Profile /></RequireAuth>} />
        <Route path="/spinner" element={<SpinnerPage />} />
        <Route path="*" element={<div className="container py-5">Not Found. <Link to="/">Go Home</Link></div>} />
      </Routes>
    </AuthProvider>
  );
}
