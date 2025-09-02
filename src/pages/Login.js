import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.js';

export default function Login() {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    setError(null);
    try {
      login(email, password);
      navigate('/members');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="container" style={{ maxWidth: 520 }}>
      <h1>Login</h1>
      {error && <p className="notice">{error}</p>}
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input className="input" type="email" value={email} onChange={e=>setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input className="input" type="password" value={password} onChange={e=>setPassword(e.target.value)} required />
        </div>
        <button className="btn" type="submit">Sign In</button>
      </form>
      <p style={{ marginTop: '.8rem' }}>No account? <Link to="/signup">Create one</Link></p>
      <hr className="divider" />
      <p style={{ color:'#94a3b8', fontSize:'.9rem' }}>
        Demo admin account: <code>admin@example.com</code> / <code>admin123</code>
      </p>
    </div>
  );
}
