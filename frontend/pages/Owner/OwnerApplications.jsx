import React from 'react';

const applications = [
  {
    jobId: "job1",
    jobTitle: "Delivery Driver",
    driverName: "Sarah Kim",
    experience: "3 years",
    applicationDate: "2024-06-05"
  },
  {
    jobId: "job2",
    jobTitle: "Chauffeur",
    driverName: "David Brown",
    experience: "5 years",
    applicationDate: "2024-06-06"
  }
];

const OwnerApplications = () => (
  <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded shadow">
    <h1 className="text-2xl font-bold mb-4">Job Applications</h1>
    <ul>
      {applications.map(app => (
        <li key={app.jobId + app.driverName} className="border-b py-2 mb-2">
          <div className="font-semibold">{app.jobTitle}</div>
          <div>Applicant: {app.driverName}</div>
          <div>Experience: {app.experience}</div>
          <div>Applied: {app.applicationDate}</div>
        </li>
      ))}
    </ul>
  </div>
);

export default OwnerApplications; 