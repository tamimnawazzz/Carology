import React, { useState } from 'react';

const sampleProfile = {
  name: "Sarah Kim",
  licenseNumber: "D1234567",
  vehicleType: "Toyota Prius",
  contact: "sarah.kim@email.com"
};

const DriverProfile = () => {
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState(sampleProfile);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = () => {
    setEditMode(false);
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Driver Profile</h1>
      <div className="space-y-4">
        <input name="name" disabled={!editMode} value={formData.name} onChange={handleChange} className="w-full p-2 border rounded" placeholder="Name" />
        <input name="licenseNumber" disabled={!editMode} value={formData.licenseNumber} onChange={handleChange} className="w-full p-2 border rounded" placeholder="License Number" />
        <input name="vehicleType" disabled={!editMode} value={formData.vehicleType} onChange={handleChange} className="w-full p-2 border rounded" placeholder="Vehicle Type" />
        <input name="contact" disabled={!editMode} value={formData.contact} onChange={handleChange} className="w-full p-2 border rounded" placeholder="Contact Info" />
      </div>
      <div className="flex justify-end mt-6 gap-2">
        {editMode ? (
          <>
            <button onClick={handleUpdate} className="bg-blue-500 text-white px-4 py-2 rounded">Save</button>
            <button onClick={() => setEditMode(false)} className="bg-gray-300 text-gray-800 px-4 py-2 rounded">Cancel</button>
          </>
        ) : (
          <button onClick={() => setEditMode(true)} className="bg-blue-500 text-white px-4 py-2 rounded">Edit Profile</button>
        )}
      </div>
    </div>
  );
};

export default DriverProfile; 