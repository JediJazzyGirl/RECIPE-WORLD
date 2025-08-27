import React, { useState } from 'react';
import { addPending } from '../utils/storage.js';
import { useAuth } from '../context/AuthContext.jsx';

export default function SubmitRecipe() {
  const { user } = useAuth();
  const [form, setForm] = useState({
    title: '',
    culture: '',
    difficulty: 'advanced',
    type: 'food',
    ingredients: '',
    steps: '',
    imageData: '' // Base64 image
  });
  const [preview, setPreview] = useState('');

  const set = (k) => (e) => setForm((s) => ({ ...s, [k]: e.target.value }));

  const onFile = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      alert('Please choose an image file.');
      e.target.value = '';
      return;
    }
    // Optional: 2MB size limit (adjust if you want)
    if (file.size > 2 * 1024 * 1024) {
      alert('Please upload an image under 2MB.');
      e.target.value = '';
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setForm((s) => ({ ...s, imageData: reader.result }));
      setPreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.title?.trim() || !form.ingredients?.trim() || !form.steps?.trim()) {
      alert('Please fill all required fields.');
      return;
    }
    if (!form.imageData) {
      alert('Please upload a dish image (required).');
      return;
    }

    const newRecipe = {
      id: crypto.randomUUID(),
      title: form.title.trim(),
      culture: form.culture,
      difficulty: form.difficulty, // basic | advanced
      type: form.type,            // food | drink-alcohol | drink-non-alcohol
      ingredients: form.ingredients.split('\n').map(s => s.trim()).filter(Boolean),
      steps: form.steps.split('\n').map(s => s.trim()).filter(Boolean),
      imageData: form.imageData,  // Base64 image stored here
      author: user.username,
      authorPic: user.profilePic,
      rating: 0,
      reviews: [],
      approved: false
    };

    addPending(newRecipe);
    alert('Recipe submitted for admin approval.');
    setForm({ title:'', culture:'', difficulty:'advanced', type:'food', ingredients:'', steps:'', imageData:'' });
    setPreview('');
    // clear the file input visually
    const fileInput = document.getElementById('dishImage');
    if (fileInput) fileInput.value = '';
  };

  return (
    <div className="container py-4">
      <h2>📤 Submit Recipe</h2>
      <form onSubmit={onSubmit} className="mt-3">
        <input className="form-control mb-2" placeholder="Title *" value={form.title} onChange={set('title')} required />

        <select className="form-select mb-2" value={form.culture} onChange={set('culture')} required>
          <option value="">Culture...</option>
          <option>Italian</option><option>American</option><option>Mexican</option><option>Japanese</option><option>Indian</option><option>French</option><option>Other</option>
        </select>

        <div className="row g-2">
          <div className="col-md-6">
            <select className="form-select mb-2" value={form.difficulty} onChange={set('difficulty')} required>
              <option value="basic">Basic</option><option value="advanced">Advanced</option>
            </select>
          </div>
          <div className="col-md-6">
            <select className="form-select mb-2" value={form.type} onChange={set('type')} required>
              <option value="food">Food</option>
              <option value="drink-alcohol">Alcoholic Drink</option>
              <option value="drink-non-alcohol">Non-Alcoholic Drink</option>
            </select>
          </div>
        </div>

        {/* REQUIRED dish image upload */}
        <div className="mb-2">
          <label className="form-label">Dish Image (required)</label>
          <input
            id="dishImage"
            className="form-control"
            type="file"
            accept="image/*"
            onChange={onFile}
            required
          />
          {preview && (
            <div className="mt-2">
              <img src={preview} alt="Preview" style={{maxWidth:'260px', borderRadius:'8px'}} />
            </div>
          )}
        </div>

        <textarea className="form-control mb-2" rows="4" placeholder="Ingredients (one per line) *" value={form.ingredients} onChange={set('ingredients')} required></textarea>
        <textarea className="form-control mb-2" rows="4" placeholder="Steps (one per line) *" value={form.steps} onChange={set('steps')} required></textarea>

        <button className="btn btn-success">Submit for Approval</button>
      </form>
    </div>
  );
}
