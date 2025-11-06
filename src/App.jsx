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
    image: '🍳', 
    description: 'Nasi goreng spesial dengan telur',
    evolution: ['Nasi Putih', 'Nasi Goreng', 'Nasi Goreng Spesial'],
    types: ['Pedas', 'Gurih', 'Tradisional']
  },
  { 
    id: 2, 
    name: 'Mie Ayam', 
    category: 'Indonesian', 
    price: 'Rp 20.000', 
    image: '🍜', 
    description: 'Mie ayam dengan pangsit goreng',
    evolution: ['Mie Mentah', 'Mie Rebus', 'Mie Ayam'],
    types: ['Gurih', 'Berkuah', 'Tradisional']
  },
  { 
    id: 3, 
    name: 'Sate Ayam', 
    category: 'Indonesian', 
    price: 'Rp 30.000', 
    image: '🍢', 
    description: 'Sate ayam dengan bumbu kacang',
    evolution: ['Ayam Mentah', 'Ayam Potong', 'Sate Ayam'],
    types: ['Pedas', 'Manis', 'Bakar']
  },
  { 
    id: 4, 
    name: 'Gado-Gado', 
    category: 'Indonesian', 
    price: 'Rp 18.000', 
    image: '🥗', 
    description: 'Sayuran segar dengan bumbu kacang',
    evolution: ['Sayur Mentah', 'Sayur Rebus', 'Gado-Gado'],
    types: ['Sehat', 'Vegetarian', 'Segar']
  },
  { 
    id: 5, 
    name: 'Soto Ayam', 
    category: 'Indonesian', 
    price: 'Rp 22.000', 
    image: '🍲', 
    description: 'Soto ayam kuah kuning',
    evolution: ['Ayam Mentah', 'Ayam Rebus', 'Soto Ayam'],
    types: ['Berkuah', 'Hangat', 'Tradisional']
  },
  { 
    id: 6, 
    name: 'Bakso', 
    category: 'Indonesian', 
    price: 'Rp 20.000', 
    image: '🍜', 
    description: 'Bakso sapi dengan mie',
    evolution: ['Daging Sapi', 'Daging Giling', 'Bakso'],
    types: ['Berkuah', 'Gurih', 'Kenyal']
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
              <CardInfo 
                key={food.id}
                name={food.name}
                category={food.category}
                price={food.price}
                image={food.image}
                description={food.description}
                evolution={food.evolution}
                types={food.types}
              />
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
    </div>
  );
};

export default App;