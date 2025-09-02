import React from 'react';
import { Link } from 'react-router-dom';
import { average } from '../utils.js';

export default function RecipeCard({ item, type = 'recipe' }) {
  const avg = average(item.ratings || []);
  return (
    <div className="card">
      <img src={item.image} alt={item.title} />
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
        <h3 style={{ margin: '.2rem 0' }}>{item.title}</h3>
        <span className="badge">{type === 'recipe' ? item.culture : (item.alcoholic ? 'Alcoholic' : 'Non‑Alcoholic')}</span>
      </div>
      {type === 'recipe' && <p style={{ color: '#9ca3af', marginTop: 0 }}>Difficulty: {item.difficulty}</p>}
      <p style={{ margin: '.4rem 0', color: '#cbd5e1' }}>Avg rating: {avg} ⭐</p>
      <Link className="btn small" to={`/${type}/${item.id}`}>View Details</Link>
    </div>
  );
}
