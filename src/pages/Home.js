import React, { useEffect, useMemo, useState } from 'react';
import RecipeCard from '../components/RecipeCard.js';
import { seedRecipes } from '../data/recipes.js';
import { KEYS, load, save } from '../storage.js';

export default function Home() {
  const [recipes, setRecipes] = useState(() => {
    const saved = load(KEYS.RECIPES, null);
    return saved || seedRecipes;
  });

  useEffect(() => { save(KEYS.RECIPES, recipes); }, [recipes]);

  const basic = useMemo(() => recipes.filter(r => r.difficulty === 'basic'), [recipes]);

  return (
    <div className="container">
      <h1>Public Recipes</h1>

      {/* in case we need to reset pictures - uncomment below
      {process.env.NODE_ENV === 'development' && (
        <div style={{ marginBottom: '1rem' }}>
          <button onClick={() => {
            localStorage.removeItem('rw_recipes_v1');
            window.location.reload();
          }}>
            Reset Recipes Data
          </button>
        </div>
      )} */}

      <p style={{ color: '#94a3b8' }}>A curated list of beginner‑friendly recipes.</p>
      <div className="grid">
        {basic.map(r => <RecipeCard key={r.id} item={r} />)}
      </div>
    </div>
  );
}
