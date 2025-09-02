import React from 'react';

export default function StarRating({ value = 0, onChange, readOnly = false }) {
  const stars = [0,1,2,3,4];
  return (
    <div className="stars">
      {stars.map((i) => {
        const active = i < Math.round(value);
        const className = 'star ' + (active ? 'active' : 'inactive');
        if (readOnly) {
          return <span key={i} className={className}>★</span>;
        }
        return (
          <span
            key={i}
            className={className}
            onClick={() => onChange && onChange(i+1)}
            role="button"
            aria-label={`Rate ${i+1} stars`}
            title={`${i+1} star${i? 's':''}`}
          >★</span>
        );
      })}
      {!readOnly && <span style={{ marginLeft: '.5rem', color: '#94a3b8', fontSize: '.9rem' }}>{value}/5</span>}
    </div>
  );
}
