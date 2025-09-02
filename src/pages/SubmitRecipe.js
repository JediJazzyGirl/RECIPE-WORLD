import React, { useState } from 'react';
import { KEYS, load, save } from '../storage.js';

export default function SubmitRecipe() {
  const [title, setTitle] = useState('');
  const [culture, setCulture] = useState('American');
  const [difficulty, setDifficulty] = useState('basic');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [message, setMessage] = useState(null);

  const submissions = load(KEYS.SUBMISSIONS, []);

  const handleFile = (e) => {
    const file = e.target.files?.[0];
    setImageFile(file || null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);
    if (!imageFile) {
      setMessage('A photo is required to submit.');
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      const payload = {
        id: 's' + Math.random().toString(36).slice(2,8),
        title,
        culture,
        difficulty,
        ingredients: ingredients.split('\n').filter(Boolean),
        steps: steps.split('\n').filter(Boolean),
        image: reader.result,
        ratings: [],
        reviews: []
      };
      const next = [...submissions, payload];
      save(KEYS.SUBMISSIONS, next);
      setMessage('Submitted! Your recipe is pending admin approval.');
      setTitle(''); setIngredients(''); setSteps(''); setImageFile(null);
      const input = document.getElementById('photo_input');
      if (input) input.value = '';
    };
    reader.readAsDataURL(imageFile);
  };

  return (
    <div className="container" style={{ maxWidth: 720 }}>
      <h1>Submit a Recipe</h1>
      <p className="notice">Photo is <strong>required</strong>. Your submission will appear after an admin approves it.</p>
      {message && <p className="notice">{message}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input className="input" value={title} onChange={e=>setTitle(e.target.value)} required />
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Culture</label>
            <select className="select" value={culture} onChange={e=>setCulture(e.target.value)}>
              {['American','Italian','Indian','Mexican','Korean','Japanese','Chinese','French','Thai','Greek'].map(c=>(<option key={c} value={c}>{c}</option>))}
            </select>
          </div>
          <div className="form-group">
            <label>Difficulty</label>
            <select className="select" value={difficulty} onChange={e=>setDifficulty(e.target.value)}>
              <option value="basic">basic</option>
              <option value="advanced">advanced</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <label>Ingredients (one per line)</label>
          <textarea className="textarea" value={ingredients} onChange={e=>setIngredients(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Steps (one per line)</label>
          <textarea className="textarea" value={steps} onChange={e=>setSteps(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Photo (required)</label>
          <input id="photo_input" className="input" type="file" accept="image/*" onChange={handleFile} required />
        </div>
        <button className="btn" type="submit">Submit for Review</button>
      </form>
    </div>
  );
}
