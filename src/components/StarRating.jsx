import React from 'react';

export default function StarRating({ value = 0, onRate }) {
  const stars = [1,2,3,4,5];
  return (
    <div>
      {stars.map(s => (
        <button key={s}
          className={`btn btn-sm ${s <= value ? 'btn-warning' : 'btn-outline-warning'} me-1`}
          onClick={() => onRate?.(s)}>
          ★
        </button>
      ))}
    </div>
  );
}
