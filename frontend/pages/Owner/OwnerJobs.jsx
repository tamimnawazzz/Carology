import React from 'react';

const jobs = [
  {
    jobId: "job1",
    title: "Delivery Driver",
    description: "Deliver packages within city limits.",
    requirements: "Valid license, 2+ years experience.",
    pay: "$18/hr",
    location: "Springfield, IL",
    duration: "Full-time"
  },
  {
    jobId: "job2",
    title: "Chauffeur",
    description: "Drive executive clients to meetings.",
    requirements: "Clean record, professional demeanor.",
    pay: "$25/hr",
    location: "Springfield, IL",
    duration: "Part-time"
  }
];

const OwnerJobs = () => (
  <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded shadow">
    <h1 className="text-2xl font-bold mb-4">My Job Posts</h1>
    <ul>
      {jobs.map(job => (
        <li key={job.jobId} className="border-b py-2 mb-2">
          <div className="font-semibold">{job.title}</div>
          <div>{job.description}</div>
          <div>Requirements: {job.requirements}</div>
          <div>Pay: {job.pay}</div>
          <div>Location: {job.location}</div>
          <div>Duration: {job.duration}</div>
        </li>
      ))}
    </ul>
  </div>
);

export default OwnerJobs; 