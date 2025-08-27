import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext.jsx';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const { signup } = useAuth();
  const nav = useNavigate();
  const [username, setU] = useState('');
  const [password, setP] = useState('');
  const [isAdmin, setA] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const { ok, msg } = signup(username, password, isAdmin);
    if (!ok) return alert(msg || 'Signup failed');
    nav('/members');
  };

  return (
    <div className="container py-4">
      <h2>Sign Up</h2>
      <form onSubmit={onSubmit} className="mt-3">
        <input className="form-control mb-2" placeholder="Username" value={username} onChange={e=>setU(e.target.value)} />
        <input type="password" className="form-control mb-2" placeholder="Password" value={password} onChange={e=>setP(e.target.value)} />
        <div className="form-check mb-2">
          <input id="adm" type="checkbox" className="form-check-input" checked={isAdmin} onChange={e=>setA(e.target.checked)} />
          <label htmlFor="adm" className="form-check-label">Make me admin (test)</label>
        </div>
        <button className="btn btn-warning">Create Account</button>
      </form>
    </div>
  );
}
