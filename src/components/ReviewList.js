import React, { useState } from 'react';
import StarRating from './StarRating.js';

export default function ReviewList({ item, onAddReview }) {
  const [rating, setRating] = useState(0);
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text || rating < 0) return;
    onAddReview({ text, rating });
    setText('');
    setRating(0);
  };

  return (
    <div className="card" style={{ marginTop: '1rem' }}>
      <h3 style={{ marginTop: 0 }}>Reviews</h3>
      {(!item.reviews || item.reviews.length === 0) && <p className="notice">No reviews yet — be the first!</p>}
      {item.reviews && item.reviews.map(r => (
        <div key={r.id} style={{ borderBottom: '1px solid #1f2937', padding: '.5rem 0' }}>
          <div style={{ display:'flex', justifyContent:'space-between' }}>
            <strong>{r.user}</strong>
            <span>{new Date(r.date).toLocaleDateString()}</span>
          </div>
          <StarRating value={r.rating} readOnly />
          <p style={{ margin: '.3rem 0' }}>{r.text}</p>
        </div>
      ))}
      <form onSubmit={handleSubmit} style={{ marginTop: '.5rem' }}>
        <label>Leave a review</label>
        <StarRating value={rating} onChange={setRating} />
        <textarea className="textarea" placeholder="Write your thoughts..." value={text} onChange={e=>setText(e.target.value)} />
        <button className="btn" type="submit">Submit Review</button>
      </form>
    </div>
  );
}
