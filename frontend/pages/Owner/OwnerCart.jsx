import React from 'react';

const OwnerCart = () => {
  // Placeholder cart items
  const cart = [
    { productName: "Bluetooth Dash Cam", price: 85, quantity: 1 },
    { productName: "Phone Holder", price: 20, quantity: 2 }
  ];

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="mb-4">
          {cart.map(item => (
            <li key={item.productName} className="flex justify-between border-b py-2">
              <span>{item.productName}</span>
              <span>${item.price}</span>
            </li>
          ))}
        </ul>
      )}
      <button className="bg-indigo-600 text-white px-4 py-2 rounded w-full">Checkout</button>
    </div>
  );
};

export default OwnerCart; 