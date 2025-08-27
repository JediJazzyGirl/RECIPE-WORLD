import React, { useMemo, useState } from 'react';
import { getApprovedRecipes } from '../utils/storage.js';
import RecipeCard from '../components/RecipeCard.jsx';

export default function Drinks() {
  const [type, setType] = useState('all');
  const all = getApprovedRecipes().filter(r => r.type?.startsWith('drink'));
  const filtered = useMemo(() => {
    if (type === 'all') return all;
    if (type === 'alcoholic') return all.filter(r => r.type === 'drink-alcohol');
    return all.filter(r => r.type === 'drink-non-alcohol');
  }, [all, type]);

  return (
    <div className="container py-4">
      <h2 className="mb-3">🥂 Drinks</h2>
      <div className="btn-group mb-3">
        <button className={`btn btn-outline-primary ${type==='all'&&'active'}`} onClick={()=>setType('all')}>All</button>
        <button className={`btn btn-outline-danger ${type==='alcoholic'&&'active'}`} onClick={()=>setType('alcoholic')}>Alcoholic</button>
        <button className={`btn btn-outline-success ${type==='non'&&'active'}`} onClick={()=>setType('non')}>Non-Alcoholic</button>
      </div>

      <div className="row">
        {filtered.length ? filtered.map(r => <RecipeCard key={r.id} recipe={r} />)
                         : <p className="text-muted">No drinks found.</p>}
      </div>
    </div>
  );
}
