import React from 'react';

const OwnerMarketplace = () => {
  const items = [
    { _id: 1, name: 'Car Battery', price: 120 },
    { _id: 2, name: 'Wiper Blades', price: 30 }
  ];

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Marketplace</h1>
      <ul>
        {items.map(item => (
          <li key={item._id} className="flex justify-between items-center border-b py-2">
            <span>{item.name} - ${item.price}</span>
            <button className="bg-green-600 text-white px-3 py-1 rounded">Buy</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OwnerMarketplace; 