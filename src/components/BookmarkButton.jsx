import React from 'react';
import { useAuth } from '../context/AuthContext.jsx';

export default function BookmarkButton({ recipeId }) {
  const { user, setUser } = useAuth();

  const isBookmarked = user?.bookmarks?.includes(recipeId);
  const toggle = () => {
    if (!user) return alert('Sign in to like recipes.');
    const next = new Set(user.bookmarks || []);
    if (next.has(recipeId)) next.delete(recipeId); else next.add(recipeId);
    const updated = { ...user, bookmarks: Array.from(next) };
    setUser(updated);

    // persist back to users list too
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const idx = users.findIndex(u => u.username === user.username);
    if (idx !== -1) {
      users[idx] = updated;
      localStorage.setItem('users', JSON.stringify(users));
    }
  };

  return (
    <button className={`btn btn-sm ${isBookmarked ? 'btn-secondary' : 'btn-outline-secondary'}`} onClick={toggle}>
      {isBookmarked ? '💖 Liked' : '🤍 Like'}
    </button>
  );
}
