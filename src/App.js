import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import PublicRecipes from "./pages/PublicRecipes";
import MembersRecipes from "./pages/MembersRecipes";
import Drinks from "./pages/Drinks";
import AdminDashboard from "./pages/AdminDashboard";
import { AuthProvider } from "./context/AuthContext";
import { RecipeProvider } from "./context/RecipeContext";

export default function App() {
  return (
    <AuthProvider>
      <RecipeProvider>
        <Router>
          <Navbar />
          <div className="container my-4">
            <Routes>
              <Route path="/" element={<PublicRecipes />} />
              <Route path="/members" element={<MembersRecipes />} />
              <Route path="/drinks" element={<Drinks />} />
              <Route path="/admin" element={<AdminDashboard />} />
            </Routes>
          </div>
        </Router>
      </RecipeProvider>
    </AuthProvider>
  );
}
