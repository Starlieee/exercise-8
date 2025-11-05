import React from 'react';
import Card from './card';

const List = ({ foods, onDetailClick }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {foods.map(food => (
        <Card key={food.id} food={food} onDetailClick={onDetailClick} />
      ))}
    </div>
  );
};

export default List;
