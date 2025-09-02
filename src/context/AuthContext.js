import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

const AuthContext = createContext(null);

const LS_USERS = 'rw_users_v1';
const LS_SESSION = 'rw_session_v1';

function loadUsers() {
  try { return JSON.parse(localStorage.getItem(LS_USERS)) || {}; } catch { return {}; }
}
function saveUsers(users) {
  localStorage.setItem(LS_USERS, JSON.stringify(users));
}
function loadSession() {
  try { return JSON.parse(localStorage.getItem(LS_SESSION)); } catch { return null; }
}
function saveSession(session) {
  if (session) localStorage.setItem(LS_SESSION, JSON.stringify(session));
  else localStorage.removeItem(LS_SESSION);
}

export function AuthProvider({ children }) {
  const [users, setUsers] = useState(() => {
    const existing = loadUsers();
    if (!existing['admin@example.com']) {
      existing['admin@example.com'] = { email: 'admin@example.com', password: 'admin123', role: 'admin', name: 'Admin' };
    }
    saveUsers(existing);
    return existing;
  });

  const [user, setUser] = useState(() => loadSession());

  useEffect(() => {
    saveUsers(users);
  }, [users]);

  useEffect(() => {
    saveSession(user);
  }, [user]);

  const signup = (name, email, password, adminCode) => {
    if (users[email]) throw new Error('Email already registered.');
    const role = adminCode === 'letmeinadmin' ? 'admin' : 'member';
    const newUsers = { ...users, [email]: { email, password, role, name } };
    setUsers(newUsers);
    setUser({ email, role, name });
  };

  const login = (email, password) => {
    const u = users[email];
    if (!u || u.password !== password) throw new Error('Invalid credentials.');
    setUser({ email: u.email, role: u.role, name: u.name || u.email.split('@')[0] });
  };

  const logout = () => setUser(null);

  const value = useMemo(() => ({ user, signup, login, logout }), [user]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
