import React, { useEffect, useMemo, useState } from 'react';
import RecipeCard from '../components/RecipeCard.js';
import { seedDrinks } from '../data/drinks.js';
import { KEYS, load, save } from '../storage.js';

export default function Drinks() {
  const [drinks, setDrinks] = useState(() => load(KEYS.DRINKS, seedDrinks));
  const [showAlcoholic, setShowAlcoholic] = useState('all');

  useEffect(() => { save(KEYS.DRINKS, drinks); }, [drinks]);

  const filtered = useMemo(() => {
    if (showAlcoholic === 'all') return drinks;
    const isAlc = showAlcoholic === 'alcoholic';
    return drinks.filter(d => d.alcoholic === isAlc);
  }, [drinks, showAlcoholic]);

  return (
    <div className="container">
      <h1>Drinks</h1>
      <div className="form-row" style={{ marginTop: '.5rem', marginBottom: '1rem' }}>
        <div className="form-group">
          <label>Show</label>
          <select className="select" value={showAlcoholic} onChange={e=>setShowAlcoholic(e.target.value)}>
            <option value="all">All</option>
            <option value="alcoholic">Alcoholic</option>
            <option value="non">Non‑Alcoholic</option>
          </select>
        </div>
      </div>
      <div className="grid">
        {filtered.map(d => <RecipeCard key={d.id} item={d} type="drink" />)}
      </div>
    </div>
  );
}
