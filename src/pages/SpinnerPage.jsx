import React, { useMemo, useState } from 'react';
import { getApprovedRecipes } from '../utils/storage.js';

export default function SpinnerPage() {
  const list = getApprovedRecipes();
  const [pick, setPick] = useState(null);
  const spin = () => {
    if (!list.length) return setPick(null);
    const choice = list[Math.floor(Math.random() * list.length)];
    setPick(choice);
  };

  return (
    <div className="container py-4 text-center">
      <h2>🎯 What Should I Cook?</h2>
      <div style={{width:300,height:300,border:'10px solid #ffc107',borderRadius:'50%',margin:'20px auto'}} />
      <button className="btn btn-warning" onClick={spin}>Spin!</button>
      <div className="mt-3 fs-5">{pick ? `Try: ${pick.title}` : 'No selection yet.'}</div>
    </div>
  );
}
