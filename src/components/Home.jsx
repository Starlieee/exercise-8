import React from 'react';
import Search from './Search';

const Home = ({ searchValue, onSearchChange, children }) => {
  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <Search 
        placeholder="Cari makanan favorit..."
        value={searchValue}
        onChange={onSearchChange}
      />
      <div className="mt-8">
        {children}
      </div>
    </main>
  );
};

export default Home;