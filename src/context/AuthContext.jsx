import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthCtx = createContext(null);
export const useAuth = () => useContext(AuthCtx);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem('currentUser')) || null);

  useEffect(() => {
    if (user) localStorage.setItem('currentUser', JSON.stringify(user));
    else localStorage.removeItem('currentUser');
  }, [user]);

  const signup = (username, password, isAdmin = false) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    if (users.find(u => u.username === username)) return { ok: false, msg: 'User exists' };
    const newUser = { username, password, isAdmin, profilePic: '/img/default-profile.png', bookmarks: [] };
    localStorage.setItem('users', JSON.stringify([...users, newUser]));
    setUser(newUser);
    return { ok: true };
  };

  const login = (username, password) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const found = users.find(u => u.username === username && u.password === password);
    if (!found) return { ok: false, msg: 'Invalid credentials' };
    setUser(found);
    return { ok: true };
  };

  const logout = () => setUser(null);

  const value = { user, setUser, signup, login, logout };
  return <AuthCtx.Provider value={value}>{children}</AuthCtx.Provider>;
}
