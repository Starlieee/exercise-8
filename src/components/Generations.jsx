import React from 'react';

const Generations = ({ generations, onSelectGen }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {generations.map((gen) => (
        <button
          key={gen.id}
          onClick={() => onSelectGen(gen)}
          className="bg-gradient-to-br from-yellow-400 to-orange-500 text-white py-4 px-6 rounded-xl font-bold text-lg hover:from-yellow-500 hover:to-orange-600 transform hover:scale-105 transition-all shadow-lg"
        >
          {gen.name}
        </button>
      ))}
    </div>
  );
};

export default Generations;