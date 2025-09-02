import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Recipe World</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link" to="/">Public</Link></li>
            {user && <li className="nav-item"><Link className="nav-link" to="/members">Members</Link></li>}
            <li className="nav-item"><Link className="nav-link" to="/drinks">Drinks</Link></li>
            {user?.role === "admin" && <li className="nav-item"><Link className="nav-link" to="/admin">Dashboard</Link></li>}
            {user ? (
              <li className="nav-item"><button className="btn btn-sm btn-danger" onClick={logout}>Logout</button></li>
            ) : (
              <li className="nav-item"><Link className="nav-link" to="/">Login/Signup</Link></li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
