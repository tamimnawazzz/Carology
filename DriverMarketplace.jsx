import React from 'react';

const purchased = [
  {
    id: "prod3",
    name: "Bluetooth Dash Cam",
    price: 85,
    seller: "DriveSafe Electronics"
  }
];

const sold = [
  {
    id: "prod6",
    name: "Old GPS Unit",
    price: 30,
    buyer: "Michael Carter"
  }
];

const DriverMarketplace = () => (
  <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded shadow">
    <h1 className="text-2xl font-bold mb-4">Marketplace</h1>
    <h2 className="text-lg font-semibold mb-2">Purchased</h2>
    <ul>
      {purchased.map(item => (
        <li key={item.id} className="flex justify-between items-center border-b py-2">
          <span>{item.name} - ${item.price} (Seller: {item.seller})</span>
        </li>
      ))}
    </ul>
    <h2 className="text-lg font-semibold mt-4 mb-2">Sold</h2>
    <ul>
      {sold.map(item => (
        <li key={item.id} className="flex justify-between items-center border-b py-2">
          <span>{item.name} - ${item.price} (Buyer: {item.buyer})</span>
        </li>
      ))}
    </ul>
  </div>
);

export default DriverMarketplace; 