import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.js';

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => { logout(); navigate('/'); };

  return (
    <nav className="navbar">
      <div className="container navbar-inner">
        <div className="brand">
          <span role="img" aria-label="logo">🍳</span>
          <NavLink to="/" style={{ textDecoration: 'none' }}>
            <span style={{ color: 'white' }}>Recipe World</span>
          </NavLink>
        </div>
        <div className="nav-links">
          <NavLink to="/" className="btn ghost small">Public Recipes</NavLink>
          <NavLink to="/drinks" className="btn ghost small">Drinks</NavLink>
          <NavLink to="/submit" className="btn ghost small">Submit</NavLink>
          <NavLink to="/members" className="btn ghost small">Members</NavLink>
          <NavLink to="/admin" className="btn ghost small">Admin</NavLink>
          {!user && <NavLink to="/login" className="btn small">Login</NavLink>}
          {!user && <NavLink to="/signup" className="btn secondary small">Sign Up</NavLink>}
          {user && (
            <>
              <span style={{ color: '#9ca3af' }}>Hi, {user.name || user.email}</span>
              <button className="btn danger small" onClick={handleLogout}>Logout</button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
