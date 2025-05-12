import React, { useState } from 'react';

const OwnerReviews = () => {
  const [reviews, setReviews] = useState([
    { _id: 1, driver: { name: 'John Doe' }, text: 'Great driver, punctual and polite.' },
    { _id: 2, driver: { name: 'Jane Smith' }, text: 'Very professional and safe.' }
  ]);
  const [newReview, setNewReview] = useState('');
  const [driverName, setDriverName] = useState('');

  const handleAddReview = e => {
    e.preventDefault();
    if (driverName && newReview) {
      setReviews([...reviews, { _id: Date.now(), driver: { name: driverName }, text: newReview }]);
      setDriverName('');
      setNewReview('');
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Driver Reviews</h1>
      <form onSubmit={handleAddReview} className="mb-4 space-y-2">
        <input value={driverName} onChange={e => setDriverName(e.target.value)} placeholder="Driver Name" className="w-full p-2 border rounded" required />
        <textarea value={newReview} onChange={e => setNewReview(e.target.value)} placeholder="Write a review..." className="w-full p-2 border rounded" required />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded w-full">Add Review</button>
      </form>
      <ul>
        {reviews.map(r => (
          <li key={r._id} className="border-b py-2">
            <div className="font-semibold">{r.driver.name}</div>
            <div>{r.text}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OwnerReviews; 