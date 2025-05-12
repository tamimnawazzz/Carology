import React, { useState } from 'react';

const OwnerDocuments = () => {
  const [documents, setDocuments] = useState([
    { _id: 1, name: 'Registration.pdf' },
    { _id: 2, name: 'Insurance.pdf' }
  ]);

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4">My Documents</h1>
      <input type="file" className="mb-4" />
      <ul>
        {documents.map(doc => (
          <li key={doc._id} className="flex justify-between items-center border-b py-2">
            <span>{doc.name}</span>
            <button className="text-red-600 hover:underline">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OwnerDocuments; 