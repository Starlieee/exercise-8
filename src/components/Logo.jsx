import React from 'react';

const Logo = ({ text, size = "text-2xl" }) => {
  return (
    <div className={`${size} font-bold text-blue-600 flex items-center gap-2`}>
      <span className="text-3xl">🍽️</span>
      <span>{text}</span>
    </div>
  );
};

export default Logo;