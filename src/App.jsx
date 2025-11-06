import React, { useState } from 'react';
import List from './components/List';
import Detail from './components/Detail';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Food App 🍔</h1>
      <SearchBar />
      <p className="text-gray-600 mt-4">Tailwind & React are working!</p>
    </div>
  );
}

export default App;
