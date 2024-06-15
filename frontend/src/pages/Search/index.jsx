import axios from "axios";
import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";

export default function SearchPage() {
  const [data, setData] = useState([]);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const respWines = await axios("http://localhost:5000/wines/all");
      setData(respWines.data);
      console.log("All Wines", respWines);
    };

    fetchData();
  }, []);

  const handleSearch = (event) => {
    let value = event.target.value;
    let result = data.filter((item) =>
      item.wine.toLowerCase().includes(value.toLowerCase())
    );
    setRepos([...result]);
  };

  return (
    <section className="bg-gray-900 text-white min-h-screen px-8 py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-10">Search Wines</h2>

        <form
          className="mb-12"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <label htmlFor="search" className="sr-only">
            Search by Year
          </label>
          <div className="relative">
            <input
              type="search"
              id="search"
              onChange={handleSearch}
              className="block w-full px-4 py-3 text-sm text-gray-900 placeholder-gray-500 bg-white rounded-lg focus:ring-2 focus:ring-blue-500 border border-gray-300 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:border-gray-600"
              placeholder="Search By Year..."
              required
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:ring-blue-300 rounded-lg px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <FaSearch className="w-5 h-5" />
            </button>
          </div>
        </form>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {repos.map((value) => (
            <div
              key={value.id}
              className="flex flex-col items-center justify-between bg-white rounded-lg shadow-md dark:bg-gray-800"
            >
              <a href="#" className="pt-2">
                <img
                  className="rounded-t-lg w-32 h-32 object-contain"
                  src={value.image}
                  alt={value.wine}
                />
              </a>
              <div className="p-6 flex flex-col justify-between flex-grow">
                <h5 className="mb-2 text-xl font-semibold leading-tight text-neutral-800 dark:text-neutral-50">
                  {value.wine}
                </h5>
                <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                  {value.winery}
                </p>
                <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                  {value.type}
                </p>
              </div>
              <div className="w-full flex flex-col lg:flex-row lg:justify-between border-t border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50">
                <small>Average Rating: {value.average}</small>
                <br />
                <small>Reviews: {value.reviews}</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
