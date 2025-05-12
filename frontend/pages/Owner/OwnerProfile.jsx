import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const sampleProfile = {
  name: "Michael Carter",
  companyName: "Carter Logistics",
  contact: "michael@carterlogistics.com",
  phone: "+1-555-123-4567",
  businessAddress: "123 Fleet Ave, Springfield, IL"
};

const OwnerProfile = () => {
  const navigate = useNavigate();
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState(sampleProfile);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      // Simulate API call
      // const { data } = await axios.get('http://localhost:3000/api/owner/profile', { withCredentials: true });
      // setFormData(data.user);
      setFormData(sampleProfile);
    } catch (err) {
      setFormData(sampleProfile);
      toast.info('Loaded sample profile data.');
    }
  };

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = () => {
    toast.success('Profile updated (demo only)');
    setEditMode(false);
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Owner Profile</h1>
      <div className="space-y-4">
        <input name="name" disabled={!editMode} value={formData.name} onChange={handleChange} className="w-full p-2 border rounded" />
        <input name="companyName" disabled={!editMode} value={formData.companyName} onChange={handleChange} className="w-full p-2 border rounded" placeholder="Company Name" />
        <input name="contact" disabled={!editMode} value={formData.contact} onChange={handleChange} className="w-full p-2 border rounded" placeholder="Contact Email" />
        <input name="phone" disabled={!editMode} value={formData.phone} onChange={handleChange} className="w-full p-2 border rounded" placeholder="Phone" />
        <input name="businessAddress" disabled={!editMode} value={formData.businessAddress} onChange={handleChange} className="w-full p-2 border rounded" placeholder="Business Address" />
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

export default OwnerProfile;
