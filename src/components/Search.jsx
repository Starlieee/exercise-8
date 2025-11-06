import React from 'react';

const Search = ({ placeholder, value, onChange }) => {
  return (
    <div className="mb-8">
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-md transition-all"
      />
    </div>
  );
};

export default Search;