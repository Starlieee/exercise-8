import React from 'react';

const Detail = ({ food, onClose }) => {
  if (!food) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <div className="text-8xl text-center mb-4">{food.image}</div>
        <h2 className="text-2xl font-bold mb-2">{food.name}</h2>
        <p className="text-gray-600 mb-2">{food.category}</p>
        <p className="text-xl text-blue-600 font-semibold mb-4">{food.price}</p>
        <p className="text-gray-700 mb-6">{food.description}</p>
        <button
          onClick={onClose}
          className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition-colors"
        >
          Tutup
        </button>
      </div>
    </div>
  );
};

export default Detail;
