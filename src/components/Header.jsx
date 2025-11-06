import React from 'react';
import Logo from './Logo';

const Header = ({ title, subtitle }) => {
  return (
    <header className="bg-white shadow-md py-6 px-4 mb-8">
      <div className="max-w-7xl mx-auto">
        <Logo text={title} size="text-3xl" />
        {subtitle && (
          <p className="text-gray-600 mt-2 ml-12">{subtitle}</p>
        )}
      </div>
    </header>
  );
};

export default Header;