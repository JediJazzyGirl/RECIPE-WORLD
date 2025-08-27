import React from 'react';
import { getAllRecipes, approveRecipeById, deleteRecipeById } from '../utils/storage.js';

export default function Admin() {
  const recipes = getAllRecipes().filter(r => !r.approved);

  const approve = (id) => { approveRecipeById(id); window.location.reload(); };
  const remove = (id) => { deleteRecipeById(id); window.location.reload(); };

  return (
    <div className="container py-4">
      <h2>🛠 Pending Recipes</h2>
      {!recipes.length && <p className="text-muted">No pending recipes.</p>}
      <div className="row">
        {recipes.map(r => (
          <div className="col-md-6 mb-3" key={r.id}>
            <div className="card p-3">
              <h5>{r.title}</h5>
              <p><span className="badge badge-culture">{r.culture}</span> • {r.type}</p>
              <p>By: {r.author}</p>
              <button className="btn btn-success btn-sm me-2" onClick={()=>approve(r.id)}>Approve</button>
              <button className="btn btn-danger btn-sm" onClick={()=>remove(r.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
