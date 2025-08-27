import React, { useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getRecipeById, saveAllRecipes, getAllRecipes } from '../utils/storage.js';
import StarRating from '../components/StarRating.jsx';
import StepByStep from '../components/StepByStep.jsx';
import BookmarkButton from '../components/BookmarkButton.jsx';
import { useAuth } from '../context/AuthContext.jsx';

const placeholder = 'data:image/svg+xml;utf8,' + encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="500"><rect width="100%" height="100%" fill="#f1f2f6"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#888" font-size="32">No Image</text></svg>`
);

export default function RecipeDetail() {
  const { id } = useParams();
  const { user } = useAuth();
  const [recipe, setRecipe] = useState(() => getRecipeById(id));

  const reviews = recipe?.reviews || [];
  const avg = useMemo(() => {
    if (!reviews.length) return 0;
    return Math.round((reviews.reduce((a, r) => a + (r.rating || 0), 0) / reviews.length) * 10) / 10;
  }, [reviews]);

  if (!recipe) return <div className="container py-4">Recipe not found.</div>;

  const onRate = (stars) => {
    if (!user) return alert('Login to rate.');
    const all = getAllRecipes();
    const idx = all.findIndex(r => r.id === id);
    if (idx === -1) return;
    const revs = [...(all[idx].reviews || [])];
    const mine = revs.find(r => r.username === user.username);
    if (mine) mine.rating = stars; else revs.push({ username: user.username, rating: stars, comment: '' });
    all[idx].reviews = revs;
    all[idx].rating = Math.round((revs.reduce((a, r) => a + (r.rating || 0), 0) / revs.length) * 10) / 10;
    saveAllRecipes(all);
    setRecipe(all[idx]);
  };

  const [comment, setComment] = useState('');
  const submitReview = () => {
    if (!user) return alert('Login to review.');
    if (!comment.trim()) return;
    const all = getAllRecipes();
    const idx = all.findIndex(r => r.id === id);
    const revs = [...(all[idx].reviews || [])];
    const mine = revs.find(r => r.username === user.username);
    if (mine) mine.comment = comment; else revs.push({ username: user.username, rating: 0, comment });
    all[idx].reviews = revs;
    saveAllRecipes(all);
    setRecipe(all[idx]);
    setComment('');
  };

  return (
    <div className="container py-4">
      <img
        src={recipe.imageData || placeholder}
        alt={recipe.title}
        style={{width:'100%', maxHeight:'420px', objectFit:'cover', borderRadius:'10px'}}
        className="mb-3"
      />
      <h2>{recipe.title}</h2>
      <p><span className="badge badge-culture">{recipe.culture}</span></p>
      <p>By {recipe.author}</p>
      <p>⭐ {avg}</p>
      {user && <BookmarkButton recipeId={recipe.id} />}

      <hr />
      <h5>Ingredients</h5>
      <ul>{recipe.ingredients.map((x,i)=><li key={i}>{x}</li>)}</ul>

      <h5 className="mt-3">👣 Step-by-Step</h5>
      <StepByStep steps={recipe.steps} />

      <hr />
      <h5>Rate this recipe</h5>
      <StarRating value={0} onRate={onRate} />

      <h5 className="mt-4">Reviews</h5>
      {reviews.length ? reviews.map((r,i)=>(
        <div key={i} className="border-bottom py-2">
          <strong>{r.username}</strong> <span className="text-warning">{'★'.repeat(r.rating || 0)}</span>
          {r.comment && <p className="mb-0">{r.comment}</p>}
        </div>
      )) : <p className="text-muted">No reviews yet.</p>}

      {user ? (
        <div className="mt-2">
          <textarea className="form-control" rows="2" placeholder="Write a review..." value={comment} onChange={e=>setComment(e.target.value)} />
          <button className="btn btn-primary btn-sm mt-2" onClick={submitReview}>Submit Review</button>
        </div>
      ) : (
        <p className="text-muted">Log in to review.</p>
      )}
    </div>
  );
}

