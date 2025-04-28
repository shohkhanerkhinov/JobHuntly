"use client";
import { useEffect, useState } from "react";

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  employment_type: string;
  category: string;
}

export default function FindJobs() {
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    async function fetchJobs() {
      try {
        const res = await fetch('https://mustafocoder.pythonanywhere.com/api/jobs/');
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchJobs();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Find your <span className="text-blue-500 underline">dream job</span></h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {jobs.map((job) => (
          <div key={job.id} className="border p-4 rounded shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold">{job.title}</h2>
            <p className="text-gray-600">{job.company} - {job.location}</p>
            <div className="mt-2">
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded mr-2">{job.employment_type}</span>
              <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded">{job.category}</span>
            </div>
            <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded">Apply</button>
          </div>
        ))}
      </div>
    </div>
  );
}
