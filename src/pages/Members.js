import React, { useEffect, useMemo, useState } from 'react';
import RecipeCard from '../components/RecipeCard.js';
import { KEYS, load, save } from '../storage.js';
import { seedRecipes } from '../data/recipes.js';
import baseCultures from '../data/cultures.js';

export default function Members() {
  const [recipes, setRecipes] = useState(() => load(KEYS.RECIPES, seedRecipes));
  const [culture, setCulture] = useState('All');

  useEffect(() => { save(KEYS.RECIPES, recipes); }, [recipes]);

  const cultureOptions = ['All', ...baseCultures];
  const advanced = useMemo(() => recipes.filter(r => r.difficulty === 'advanced'), [recipes]);
  const filtered = useMemo(
    () => culture === 'All' ? advanced : advanced.filter(r => r.culture === culture),
    [advanced, culture]
  );

  return (
    <div className="container">
      <h1>Members-Only: Advanced Recipes</h1>
      <div className="form-row" style={{ marginTop: '.5rem', marginBottom: '1rem' }}>
        <div className="form-group">
          <label>Filter by Culture</label>
          <select className="select" value={culture} onChange={e=>setCulture(e.target.value)}>
            {cultureOptions.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
      </div>
      <div className="grid">
        {filtered.map(r => <RecipeCard key={r.id} item={r} />)}
      </div>
    </div>
  );
}
