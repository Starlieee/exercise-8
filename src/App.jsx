import { useState } from 'react'
import SearchBar from './components/searchbar'
import List from './components/list'
import Detail from './components/detail'

const foodData = [
  { id: 1, name: 'Nasi Goreng', category: 'Indonesian', price: 'Rp 25.000', image: '🍳', description: 'Nasi goreng spesial dengan telur' },
  { id: 2, name: 'Mie Ayam', category: 'Indonesian', price: 'Rp 20.000', image: '🍜', description: 'Mie ayam dengan pangsit goreng' },
  { id: 3, name: 'Sate Ayam', category: 'Indonesian', price: 'Rp 30.000', image: '🍢', description: 'Sate ayam dengan bumbu kacang' },
  { id: 4, name: 'Gado-Gado', category: 'Indonesian', price: 'Rp 18.000', image: '🥗', description: 'Sayuran segar dengan bumbu kacang' },
  { id: 5, name: 'Soto Ayam', category: 'Indonesian', price: 'Rp 22.000', image: '🍲', description: 'Soto ayam kuah kuning' },
  { id: 6, name: 'Bakso', category: 'Indonesian', price: 'Rp 20.000', image: '🍜', description: 'Bakso sapi dengan mie' },
];

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFood, setSelectedFood] = useState(null);

  const filteredFoods = foodData.filter(food =>
    food.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          🍽️ Food App
        </h1>
        
        <SearchBar 
          searchTerm={searchTerm} 
          onSearchChange={setSearchTerm} 
        />

        {filteredFoods.length > 0 ? (
          <List 
            foods={filteredFoods} 
            onDetailClick={setSelectedFood} 
          />
        ) : (
          <p className="text-center text-gray-500">Makanan tidak ditemukan</p>
        )}

        <Detail 
          food={selectedFood} 
          onClose={() => setSelectedFood(null)} 
        />
      </div>
    </div>
  );
};

export default App;