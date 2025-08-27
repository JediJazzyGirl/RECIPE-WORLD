import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark px-3">
      <div className="container">
        <Link className="navbar-brand" to="/">🍽 Recipe World</Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navContent"
          aria-controls="navContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div id="navContent" className="collapse navbar-collapse justify-content-end">
          <ul className="navbar-nav">
            <li className="nav-item"><NavLink to="/public" className="nav-link">Public</NavLink></li>

            {/* ➕ New Spinner link (always visible) */}
            <li className="nav-item"><NavLink to="/spinner" className="nav-link">🎯 Spinner</NavLink></li>

            {user && (
              <>
                <li className="nav-item"><NavLink to="/members" className="nav-link">Members</NavLink></li>
                <li className="nav-item"><NavLink to="/drinks" className="nav-link">Drinks</NavLink></li>
                <li className="nav-item"><NavLink to="/submit" className="nav-link">Submit</NavLink></li>
                <li className="nav-item"><NavLink to="/profile" className="nav-link">Profile</NavLink></li>
              </>
            )}

            {user?.isAdmin && (
              <>
                <li className="nav-item"><NavLink to="/admin" className="nav-link">Admin</NavLink></li>
                <li className="nav-item"><NavLink to="/admin-dashboard" className="nav-link">Dashboard</NavLink></li>
              </>
            )}
          </ul>

          <div className="ms-3">
            {!user ? (
              <>
                <Link to="/signup" className="btn btn-warning btn-sm me-2">Sign Up</Link>
                <Link to="/login" className="btn btn-success btn-sm">Login</Link>
              </>
            ) : (
              <>
                <span className="text-white me-2">Hi, {user.username}</span>
                <button className="btn btn-danger btn-sm" onClick={logout}>Logout</button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
