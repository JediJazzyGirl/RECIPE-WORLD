import React from 'react';
import { getAllRecipes } from '../utils/storage.js';

export default function AdminDashboard() {
  const all = getAllRecipes();
  const total = all.length;
  const pending = all.filter(r => !r.approved).length;
  const approved = total - pending;
  const uniqueUsers = new Set(all.map(r => r.author)).size;

  return (
    <div className="container py-4">
      <h2>📊 Admin Dashboard</h2>
      <div className="row text-center g-3 mt-2">
        <div className="col-md-3"><div className="card p-3"><h5>Total Recipes</h5><div className="display-6">{total}</div></div></div>
        <div className="col-md-3"><div className="card p-3"><h5>Pending</h5><div className="display-6">{pending}</div></div></div>
        <div className="col-md-3"><div className="card p-3"><h5>Approved</h5><div className="display-6">{approved}</div></div></div>
        <div className="col-md-3"><div className="card p-3"><h5>Unique Submitters</h5><div className="display-6">{uniqueUsers}</div></div></div>
      </div>
    </div>
  );
}
