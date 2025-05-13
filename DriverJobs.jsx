import React, { useState } from 'react';

const jobs = [
  {
    _id: 1,
    title: 'Delivery Driver',
    description: 'Deliver packages in city',
    salary: 500
  },
  {
    _id: 2,
    title: 'Chauffeur',
    description: 'Drive clients to destinations',
    salary: 700
  }
];

const DriverJobs = () => {
  const handleApply = (jobId) => {
    alert('Applied for job ' + jobId);
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Available Jobs</h1>
      <ul>
        {jobs.map(job => (
          <li key={job._id} className="border-b py-2">
            <div className="font-semibold">{job.title}</div>
            <div>{job.description}</div>
            <div>Salary: ${job.salary}</div>
            <button onClick={() => handleApply(job._id)} className="bg-green-600 text-white px-3 py-1 rounded mt-2">Apply</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DriverJobs; 