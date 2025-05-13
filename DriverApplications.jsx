import React from 'react';

const applications = [
  {
    _id: 1,
    job: { title: 'Delivery Driver' },
    status: 'Pending'
  },
  {
    _id: 2,
    job: { title: 'Chauffeur' },
    status: 'Accepted'
  }
];

const DriverApplications = () => (
  <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded shadow">
    <h1 className="text-2xl font-bold mb-4">My Applications</h1>
    <ul>
      {applications.map(app => (
        <li key={app._id} className="border-b py-2">
          <div className="font-semibold">{app.job.title}</div>
          <div>Status: <span className="font-bold">{app.status}</span></div>
        </li>
      ))}
    </ul>
  </div>
);

export default DriverApplications; 