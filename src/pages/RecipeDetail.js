import React, { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { KEYS, load, save } from '../storage.js';
import { seedRecipes } from '../data/recipes.js';
import { average } from '../utils.js';
import StarRating from '../components/StarRating.js';
import ReviewList from '../components/ReviewList.js';
import { useAuth } from '../context/AuthContext.js';

export default function RecipeDetail() {
  const { id } = useParams();
  const { user } = useAuth();

  const [recipes, setRecipes] = useState(() => load(KEYS.RECIPES, seedRecipes));
  const recipe = useMemo(() => recipes.find(r => r.id === id), [recipes, id]);

  useEffect(() => { save(KEYS.RECIPES, recipes); }, [recipes]);

  if (!recipe) return <div className="container"><p className="notice">Recipe not found.</p></div>;

  const avg = average(recipe.ratings || []);

  const setRecipe = (next) => {
    setRecipes(prev => prev.map(r => r.id === recipe.id ? next : r));
  };

  const handleRate = (val) => {
    const next = { ...recipe, ratings: [...(recipe.ratings||[]), val] };
    setRecipe(next);
  };

  const handleAddReview = ({ text, rating }) => {
    const newReview = {
      id: 'rv' + Math.random().toString(36).slice(2,8),
      user: user?.name || user?.email || 'Guest',
      text,
      rating,
      date: new Date().toISOString().slice(0,10)
    };
    const next = { ...recipe, reviews: [...(recipe.reviews||[]), newReview] };
    if (rating) next.ratings = [...(recipe.ratings||[]), rating];
    setRecipe(next);
  };

  return (
    <div className="container">
      <div className="card" style={{ overflow:'hidden' }}>
        <img src={recipe.image} alt={recipe.title} style={{ height: 320 }} />
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
          <h1 style={{ marginBottom: 0 }}>{recipe.title}</h1>
          <span className="badge">{recipe.culture}</span>
        </div>
        <p style={{ marginTop: '.3rem', color:'#9ca3af' }}>Difficulty: {recipe.difficulty}</p>
        <p><strong>Average Rating:</strong> {avg} ⭐</p>

        {user ? (
          <div>
            <label>Rate this recipe</label>
            <StarRating value={0} onChange={handleRate} />
          </div>
        ) : (
          <p className="notice">Login to leave a rating or review.</p>
        )}

        <hr className="divider" />
        <div className="form-row">
          <div>
            <h3>Ingredients</h3>
            <ul>
              {(recipe.ingredients||[]).map((ing,i)=>(<li key={i}>{ing}</li>))}
            </ul>
          </div>
          <div>
            <h3>Steps</h3>
            <ol>
              {(recipe.steps||[]).map((s,i)=>(<li key={i}>{s}</li>))}
            </ol>
          </div>
        </div>
      </div>

      <ReviewList item={recipe} onAddReview={handleAddReview} />
    </div>
  );
}
