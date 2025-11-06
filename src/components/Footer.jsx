import React from 'react';
import Generations from './Generations';

const Footer = ({ title, generations, onSelectGen }) => {
  return (
    <footer className="bg-gray-800 text-white py-12 px-4 mt-16">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-3xl font-bold mb-6 text-center">{title}</h3>
        <Generations 
          generations={generations}
          onSelectGen={onSelectGen}
        />
        <p className="text-center text-gray-400 mt-8">
          © 2025 Food App - Made with ❤️
        </p>
      </div>
    </footer>
  );
};

export default Footer;