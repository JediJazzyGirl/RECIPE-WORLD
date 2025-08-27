import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext.jsx';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const { login } = useAuth();
  const nav = useNavigate();
  const [username, setU] = useState('');
  const [password, setP] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    const { ok, msg } = login(username, password);
    if (!ok) return alert(msg || 'Login failed');
    nav('/members');
  };

  return (
    <div className="container py-4">
      <h2>Login</h2>
      <form onSubmit={onSubmit} className="mt-3">
        <input className="form-control mb-2" placeholder="Username" value={username} onChange={e=>setU(e.target.value)} />
        <input type="password" className="form-control mb-2" placeholder="Password" value={password} onChange={e=>setP(e.target.value)} />
        <button className="btn btn-success">Login</button>
      </form>
    </div>
  );
}
