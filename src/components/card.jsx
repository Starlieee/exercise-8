import React from 'react';

const card = ({ food, onDetailClick }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
      <div className="text-6xl text-center mb-3">{food.image}</div>
      <h3 className="text-lg font-bold mb-1">{food.name}</h3>
      <p className="text-sm text-gray-600 mb-2">{food.category}</p>
      <p className="text-blue-600 font-semibold mb-3">{food.price}</p>
      <button
        onClick={() => onDetailClick(food)}
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors"
      >
        Lihat Detail
      </button>
    </div>
  );
};

export default card;
