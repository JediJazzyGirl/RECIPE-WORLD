import React, { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { KEYS, load, save } from '../storage.js';
import { seedDrinks } from '../data/drinks.js';
import { average } from '../utils.js';
import StarRating from '../components/StarRating.js';
import ReviewList from '../components/ReviewList.js';
import { useAuth } from '../context/AuthContext.js';

export default function DrinkDetail() {
  const { id } = useParams();
  const { user } = useAuth();

  const [drinks, setDrinks] = useState(() => load(KEYS.DRINKS, seedDrinks));
  const drink = useMemo(() => drinks.find(r => r.id === id), [drinks, id]);

  useEffect(() => { save(KEYS.DRINKS, drinks); }, [drinks]);

  if (!drink) return <div className="container"><p className="notice">Drink not found.</p></div>;

  const avg = average(drink.ratings || []);

  const setDrink = (next) => {
    setDrinks(prev => prev.map(r => r.id === drink.id ? next : r));
  };

  const handleRate = (val) => {
    const next = { ...drink, ratings: [...(drink.ratings||[]), val] };
    setDrink(next);
  };

  const handleAddReview = ({ text, rating }) => {
    const newReview = {
      id: 'rv' + Math.random().toString(36).slice(2,8),
      user: user?.name || user?.email || 'Guest',
      text,
      rating,
      date: new Date().toISOString().slice(0,10)
    };
    const next = { ...drink, reviews: [...(drink.reviews||[]), newReview] };
    if (rating) next.ratings = [...(drink.ratings||[]), rating];
    setDrink(next);
  };

  return (
    <div className="container">
      <div className="card" style={{ overflow:'hidden' }}>
        <img src={drink.image} alt={drink.title} style={{ height: 320 }} />
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
          <h1 style={{ marginBottom: 0 }}>{drink.title}</h1>
          <span className="badge">{drink.alcoholic ? 'Alcoholic' : 'Non‑Alcoholic'}</span>
        </div>
        <p><strong>Average Rating:</strong> {avg} ⭐</p>

        {user ? (
          <div>
            <label>Rate this drink</label>
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
              {(drink.ingredients||[]).map((ing,i)=>(<li key={i}>{ing}</li>))}
            </ul>
          </div>
          <div>
            <h3>Steps</h3>
            <ol>
              {(drink.steps||[]).map((s,i)=>(<li key={i}>{s}</li>))}
            </ol>
          </div>
        </div>
      </div>

      <ReviewList item={drink} onAddReview={handleAddReview} />
    </div>
  );
}
