import React, { useMemo, useState } from 'react';
import { getApprovedRecipes } from '../utils/storage.js';
import RecipeCard from '../components/RecipeCard.jsx';

export default function PublicRecipes() {
  const [q, setQ] = useState('');
  const [culture, setCulture] = useState('');

  const list = getApprovedRecipes();
  const filtered = useMemo(() =>
    list.filter(r =>
      (r.difficulty !== 'advanced') &&
      r.title.toLowerCase().includes(q.toLowerCase()) &&
      (!culture || r.culture === culture)
    ), [list, q, culture]);

  return (
    <div className="container py-4">
      <h2 className="mb-3">🍲 Public Recipes</h2>

      <div className="row g-2 mb-3">
        <div className="col-md-6">
          <input className="form-control" placeholder="Search recipes..." value={q} onChange={e=>setQ(e.target.value)} />
        </div>
        <div className="col-md-6">
          <select className="form-select" value={culture} onChange={e=>setCulture(e.target.value)}>
            <option value="">All Cultures</option>
            <option>Italian</option><option>Mexican</option><option>Japanese</option><option>Indian</option><option>French</option>
          </select>
        </div>
      </div>

      <div className="row">
        {filtered.length ? filtered.map(r => <RecipeCard key={r.id} recipe={r} />)
                         : <p className="text-muted">No recipes match.</p>}
      </div>
    </div>
  );
}
