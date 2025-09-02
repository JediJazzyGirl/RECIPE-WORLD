import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.js';

export default function Signup() {
  const { signup } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [adminCode, setAdminCode] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    setError(null);
    try {
      signup(name, email, password, adminCode);
      navigate('/members');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="container" style={{ maxWidth: 520 }}>
      <h1>Sign Up</h1>
      {error && <p className="notice">{error}</p>}
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input className="input" value={name} onChange={e=>setName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input className="input" type="email" value={email} onChange={e=>setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input className="input" type="password" value={password} onChange={e=>setPassword(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Admin Code (optional)</label>
          <input className="input" value={adminCode} onChange={e=>setAdminCode(e.target.value)} placeholder="letmeinadmin to be admin" />
        </div>
        <button className="btn" type="submit">Create Account</button>
      </form>
      <p style={{ marginTop: '.8rem' }}>Already have an account? <Link to="/login">Login</Link></p>
    </div>
  );
}
