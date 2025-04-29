"use client";
import { useEffect, useState, FormEvent } from "react";

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
  const [title, setTitle] = useState<string>('');
  const [location, setLocation] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const fetchJobs = async (searchTitle = '', searchLocation = '') => {
    try {
      setLoading(true);

      let url = 'https://mustafocoder.pythonanywhere.com/api/jobs/';
      const params = new URLSearchParams();
      if (searchTitle.trim()) params.append('title', searchTitle.trim());
      if (searchLocation.trim()) params.append('location', searchLocation.trim());

      if (params.toString()) {
        url += `?${params.toString()}`;
      }

      const res = await fetch(url);
      if (!res.ok) {
        throw new Error('Failed to fetch jobs');
      }
      const data = await res.json();
      setJobs(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!title.trim() && !location.trim()) {
      setError('Please enter a job title or location!');
      return;
    }

    setError('');
    await fetchJobs(title, location);
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Find your <span className="text-blue-500 underline">dream job</span></h1>

      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 mb-8">
        <input
          type="text"
          placeholder="Job title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-3 rounded w-full md:w-1/3"
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border p-3 rounded w-full md:w-1/3"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white font-bold py-3 px-6 rounded hover:bg-blue-600 transition"
        >
          Search
        </button>
      </form>

      {error && <div className="text-red-500 mb-4">{error}</div>}

      {loading && <div className="text-blue-500">Loading jobs...</div>}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {!loading && jobs.length > 0 ? (
          jobs.map((job) => (
            <div key={job.id} className="border p-4 rounded shadow hover:shadow-lg transition">
              <h2 className="text-xl font-semibold">{job.title}</h2>
              <p className="text-gray-600">{job.company} - {job.location}</p>
              <div className="mt-2">
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded mr-2">{job.employment_type}</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded">{job.category}</span>
              </div>
              <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded">Apply</button>
            </div>
          ))
        ) : (
          !loading && <p className="text-gray-500">No jobs found.</p>
        )}
      </div>
    </div>
  );
}
