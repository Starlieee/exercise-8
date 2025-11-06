import React, { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import CardInfo from './components/CardInfo';
import Footer from './components/Footer';

// Data makanan
const foodData = [
  { 
    id: 1, 
    name: 'Nasi Goreng', 
    category: 'Indonesian', 
    price: 'Rp 25.000', 
    image: '', 
    description: 'Nasi goreng spesial dengan telur',
    evolution: ['Nasi Putih', 'Nasi Goreng', 'Nasi Goreng Spesial'],
    types: ['Pedas', 'Gurih', 'Tradisional']
  },
  { 
    id: 2, 
    name: 'Mie Ayam', 
    category: 'Indonesian', 
    price: 'Rp 20.000', 
    image: '', 
    description: 'Mie ayam dengan pangsit goreng',
    evolution: ['Mie Mentah', 'Mie Rebus', 'Mie Ayam'],
    types: ['Gurih', 'Berkuah', 'Tradisional']
  },
];

// Data Generations
const generationsData = [
  { id: 1, name: 'Gen 1' },
  { id: 2, name: 'Gen 2' },
  { id: 3, name: 'Gen 3' },
  { id: 4, name: 'Gen 4' },
];

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGen, setSelectedGen] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedFood, setSelectedFood] = useState(null);

  // Filter makanan berdasarkan pencarian
  const filteredFoods = foodData.filter(food =>
    food.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSelectGen = (gen) => {
    setSelectedGen(gen);
    alert(`Anda memilih ${gen.name}`);
  };

  const handleCardClick = (food) => {
    setSelectedFood(food);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header Component */}
      <Header 
        title="Food App" 
        subtitle="Temukan makanan favorit Anda"
      />

      {/* Home Component (contains Search and CardInfo) */}
      <Home 
        searchValue={searchTerm}
        onSearchChange={handleSearchChange}
      >
        {/* CardInfo Components */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFoods.length > 0 ? (
            filteredFoods.map(food => (
              <div 
                key={food.id}
                onClick={() => handleCardClick(food)}
                className="cursor-pointer"
              >
                <CardInfo 
                  name={food.name}
                  category={food.category}
                  price={food.price}
                  image={food.image}
                  description={food.description}
                  evolution={food.evolution}
                  types={food.types}
                />
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500 text-lg">
              Makanan tidak ditemukan
            </p>
          )}
        </div>
      </Home>

      {/* Footer Component (contains Generations) */}
      <Footer 
        title="Pilih Generasi"
        generations={generationsData}
        onSelectGen={handleSelectGen}
      />

      {/* Pop-up Modal */}
      {showPopup && selectedFood && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={handleClosePopup}
        >
          <div 
            className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Pop-up */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-t-2xl">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-3xl font-bold mb-2">{selectedFood.name}</h2>
                  <p className="text-blue-100">{selectedFood.category}</p>
                </div>
                <button 
                  onClick={handleClosePopup}
                  className="text-white hover:bg-white hover:bg-opacity-20 rounded-full p-2 transition"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Body Pop-up */}
            <div className="p-6 space-y-6">
              {/* Image Placeholder */}
              <div className="w-full h-48 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center">
                <span className="text-6xl">🍽️</span>
              </div>

              {/* Price */}
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-sm text-green-700 font-medium">Harga</p>
                <p className="text-2xl font-bold text-green-800">{selectedFood.price}</p>
              </div>

              {/* Description */}
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h3 className="font-bold text-blue-800 mb-2">Deskripsi</h3>
                <p className="text-gray-700">{selectedFood.description}</p>
              </div>

              {/* Types */}
              <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <h3 className="font-bold text-purple-800 mb-2">Tipe</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedFood.types.map((type, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-purple-200 text-purple-800 rounded-full text-sm font-medium"
                    >
                      {type}
                    </span>
                  ))}
                </div>
              </div>

              {/* Evolution */}
              <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                <h3 className="font-bold text-orange-800 mb-2">Evolusi</h3>
                <div className="flex items-center gap-2 flex-wrap">
                  {selectedFood.evolution.map((stage, index) => (
                    <React.Fragment key={index}>
                      <span className="px-3 py-1 bg-orange-200 text-orange-800 rounded-lg text-sm font-medium">
                        {stage}
                      </span>
                      {index < selectedFood.evolution.length - 1 && (
                        <span className="text-orange-600 font-bold">→</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Close Button */}
              <button 
                onClick={handleClosePopup}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;