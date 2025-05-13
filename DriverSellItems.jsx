import React, { useState } from 'react';

const initialSold = [
  {
    id: "prod6",
    name: "Old GPS Unit",
    price: 30,
    buyer: "Michael Carter"
  }
];

const DriverSellItems = () => {
  const [form, setForm] = useState({ name: '', description: '', price: '' });
  const [loading, setLoading] = useState(false);
  const [sold, setSold] = useState(initialSold);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setSold([
        ...sold,
        { id: `prod${sold.length + 7}`, name: form.name, price: form.price, buyer: 'Demo Buyer' }
      ]);
      setForm({ name: '', description: '', price: '' });
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Sell an Item</h1>
      <form onSubmit={handleSubmit} className="space-y-4 mb-8">
        <input name="name" value={form.name} onChange={handleChange} placeholder="Item Name" className="w-full p-2 border rounded" required />
        <textarea name="description" value={form.description} onChange={handleChange} placeholder="Description" className="w-full p-2 border rounded" required />
        <input name="price" value={form.price} onChange={handleChange} placeholder="Price" type="number" className="w-full p-2 border rounded" required />
        <button type="submit" disabled={loading} className="bg-blue-600 text-white px-4 py-2 rounded w-full">{loading ? 'Listing...' : 'List Item'}</button>
      </form>
      <h2 className="text-lg font-semibold mb-2">Sold Items</h2>
      <ul>
        {sold.map(item => (
          <li key={item.id} className="flex justify-between items-center border-b py-2">
            <span>{item.name} - ${item.price} (Buyer: {item.buyer})</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DriverSellItems; 