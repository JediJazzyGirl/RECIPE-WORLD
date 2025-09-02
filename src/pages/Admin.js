import React, { useMemo, useState } from 'react';
import { KEYS, load, save } from '../storage.js';
import { seedRecipes } from '../data/recipes.js';

export default function Admin() {
  const [pending, setPending] = useState(() => load(KEYS.SUBMISSIONS, []));
  const [recipes, setRecipes] = useState(() => load(KEYS.RECIPES, seedRecipes));

  const approve = (id) => {
    const item = pending.find(p => p.id === id);
    if (!item) return;
    const nextRecipes = [...recipes, { ...item, id: 'r' + Math.random().toString(36).slice(2,8) }];
    const nextPending = pending.filter(p => p.id !== id);
    setRecipes(nextRecipes);
    setPending(nextPending);
    save(KEYS.RECIPES, nextRecipes);
    save(KEYS.SUBMISSIONS, nextPending);
  };

  const reject = (id) => {
    const nextPending = pending.filter(p => p.id !== id);
    setPending(nextPending);
    save(KEYS.SUBMISSIONS, nextPending);
  };

  const hasPending = useMemo(() => pending.length > 0, [pending]);

  return (
    <div className="container">
      <h1>Admin Review Queue</h1>
      {!hasPending && <p className="notice">No pending submissions.</p>}
      <div className="grid">
        {pending.map(p => (
          <div key={p.id} className="card">
            <img src={p.image} alt={p.title} />
            <h3 style={{ margin: '.3rem 0' }}>{p.title}</h3>
            <p style={{ color:'#9ca3b8' }}>
              Culture: <strong>{p.culture}</strong> • Difficulty: <strong>{p.difficulty}</strong>
            </p>
            <details>
              <summary>Preview details</summary>
              <div className="form-row">
                <div>
                  <h4>Ingredients</h4>
                  <ul>{p.ingredients.map((ing,i)=>(<li key={i}>{ing}</li>))}</ul>
                </div>
                <div>
                  <h4>Steps</h4>
                  <ol>{p.steps.map((s,i)=>(<li key={i}>{s}</li>))}</ol>
                </div>
              </div>
            </details>
            <div style={{ display:'flex', gap:'.5rem', marginTop:'.6rem' }}>
              <button className="btn" onClick={()=>approve(p.id)}>Approve</button>
              <button className="btn danger" onClick={()=>reject(p.id)}>Reject</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
