import React from 'react';
import Evolution from './Evolution';
import TypeEffect from './TypeEffect';
import Logo from './Logo';

const CardInfo = ({ name, category, price, image, description, evolution, types }) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300">
      {/* Logo di dalam Card */}
      <div className="mb-4">
        <Logo text={name} size="text-xl" />
      </div>

      {/* Image */}
      <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
        <span className="text-6xl">{image}</span>
      </div>

      {/* Info */}
      <h3 className="text-2xl font-bold mb-2 text-gray-800">{name}</h3>
      <p className="text-gray-600 mb-2">{category}</p>
      <p className="text-2xl font-bold text-blue-600 mb-4">{price}</p>
      <p className="text-gray-700 mb-4 text-sm">{description}</p>

      {/* Evolution Component */}
      {evolution && (
        <div className="mb-4">
          <Evolution stages={evolution} />
        </div>
      )}

      {/* TypeEffect Component */}
      {types && (
        <div className="mb-4">
          <TypeEffect types={types} />
        </div>
      )}

      <button className="w-full bg-blue-500 text-white py-3 rounded-xl font-semibold hover:bg-blue-600 transition-colors">
        Lihat Detail
      </button>
    </div>
  );
};

export default CardInfo;