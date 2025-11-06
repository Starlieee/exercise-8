import React from 'react';

const TypeEffect = ({ types }) => {
  return (
    <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
      <h4 className="font-bold text-purple-800 mb-2">Type Effect</h4>
      <div className="flex flex-wrap gap-2">
        {types.map((type, index) => (
          <span 
            key={index}
            className="px-3 py-1 bg-purple-200 text-purple-800 rounded-full text-sm font-semibold"
          >
            {type}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TypeEffect;