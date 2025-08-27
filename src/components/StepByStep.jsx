import React, { useState } from 'react';

export default function StepByStep({ steps = [] }) {
  const [idx, setIdx] = useState(0);
  if (!steps.length) return null;

  const next = () => setIdx(i => (i + 1 < steps.length ? i + 1 : 0));

  return (
    <div className="mt-3">
      <div className="step-box"><strong>Step {idx + 1}:</strong> {steps[idx]}</div>
      <button className="btn btn-outline-primary" onClick={next}>Next Step</button>
    </div>
  );
}
