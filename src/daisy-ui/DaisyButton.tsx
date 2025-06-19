// components/DaisyButton.tsx
import React from 'react';

export const DaisyButton: React.FC = () => {
  return <>
  <button className="btn btn-netural btn-xs">Xsmall</button>
<button className="btn btn-primary btn-sm">Small</button>
<button className="btn btn-secodary">Medium</button>
<button className="btn btn-lg btn-info">Large</button>
<button className="btn btn-xl btn-success">Xlarge</button>
  </>
};