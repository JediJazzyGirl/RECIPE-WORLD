import React from 'react';
import { useAuth } from '../context/AuthContext.jsx';
import { getAllRecipes } from '../utils/storage.js';
import RecipeCard from '../components/RecipeCard.jsx';

export default function Profile() {
  const { user } = useAuth();
  const mine = getAllRecipes().filter(r => r.author === user.username);

  return (
    <div className="container py-4">
      <div className="text-center mb-4">
        <img src={user.profilePic || '/img/default-profile.png'} className="profile-pic" alt="profile" />
        <h3 className="mt-2">{user.username}</h3>
      </div>

      <h4>Your Recipes</h4>
      <div className="row">
        {mine.length ? mine.map(r => <RecipeCard key={r.id} recipe={r} />)
                     : <p className="text-muted">No submissions yet.</p>}
      </div>
    </div>
  );
}
