import React, { useEffect } from 'react';
import { getTopRated } from '../utils/storage.js';
import RecipeCard from '../components/RecipeCard.jsx';

export default function Home() {
  const top = getTopRated(3);

  useEffect(() => {
    // 25s delayed guest prompt (dismissible)
    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (!user) {
      const t = setTimeout(() => {
        const div = document.createElement('div');
        div.className = 'alert alert-info alert-dismissible fade show text-center position-fixed bottom-0 start-50 translate-middle-x m-3';
        div.innerHTML = `
          <strong>Sign up or log in</strong> to view exclusive recipes!
          <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        `;
        document.body.appendChild(div);
      }, 25000);
      return () => clearTimeout(t);
    }
  }, []);

  return (
    <div className="container py-4">
      <div className="text-center mb-4">
        <h1>Welcome to Recipe World</h1>
        <p>Explore simple and advanced recipes from around the world.</p>
      </div>

      <h3 className="mb-3">⭐ Top Rated This Week</h3>
      <div className="row">
        {top.length ? top.map(r => <RecipeCard key={r.id} recipe={r} />)
                    : <p className="text-muted">No recipes yet.</p>}
      </div>
    </div>
  );
}
