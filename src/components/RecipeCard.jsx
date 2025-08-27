import React from 'react';
import { Link } from 'react-router-dom';

const placeholder = 'data:image/svg+xml;utf8,' + encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400"><rect width="100%" height="100%" fill="#f1f2f6"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#888" font-size="24">No Image</text></svg>`
);

export default function RecipeCard({ recipe }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 recipe-card">
        <img
          src={recipe.imageData || placeholder}
          className="card-img-top"
          alt={recipe.title}
          style={{height:'180px', objectFit:'cover'}}
        />
        <div className="card-body">
          <h5 className="card-title">{recipe.title}</h5>
          <p><span className="badge badge-culture">{recipe.culture}</span></p>
          <p>{'★'.repeat(Math.round(recipe.rating || 0))} ({recipe.rating || 0})</p>
          <p className="text-muted small">By: {recipe.author}</p>
          <Link to={`/recipe/${recipe.id}`} className="btn btn-primary btn-sm">View</Link>
        </div>
      </div>
    </div>
  );
}
