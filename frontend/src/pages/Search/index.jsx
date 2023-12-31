import axios from "axios";
import React, { useState, useEffect } from "react";
// import "./SearchPage.scss";
// import Title from "../Components/Title/Title";
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
    <div className="dark:bg-[#5f1219] h-auto px-10 py-20 w-full">
      <div className="container">
        <div className="row height flex justify-content-center items-center">
          <form>
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                onChange={handleSearch}
                className="block w-full p-4 pl-10 text-sm text-gray-900 border rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search By Year..."
                required
              />
              <button
                type="submit"
                className="absolute right-2.5 bottom-2.5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </div>
          </form>
        </div>
        <div className="container mt-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {repos.map((value) => (
              <div
                key={value.id}
                className="flex flex-col items-center justify-between rounded-lg bg-white shadow-md dark:bg-[#1c1c1c]"
              >
                <a href="#!">
                  <img
                    className="rounded-t-lg p-2 w-32 h-32 object-contain"
                    src={value.image}
                    alt={value.wine}
                  />
                </a>
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <h5 className="mb-2 text-lg font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                    {value.wine}
                  </h5>
                  <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                    {value.winery}
                  </p>
                </div>
                <div className="mt-auto border-t-2 border-neutral-100 px-6 py-3 text-center dark:border-neutral-600 dark:text-neutral-50">
                  <small>Average Rating: {value.average}</small>
                  <br />
                  <small>Reviews: {value.reviews}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    // <div className="dark:bg-gray-900 h-screen px-10 py-20 w-full">
    // <div className="container">
    //   <div className="row height flex justify-content-center items-center">
    //     <form>
    //         <label
    //           htmlFor="default-search"
    //           className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
    //         >
    //           Search
    //         </label>
    //         <div className="relative">
    //           <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
    //             <svg
    //               className="w-4 h-4 text-gray-500 dark:text-gray-400"
    //               xmlns="http://www.w3.org/2000/svg"
    //               fill="none"
    //               viewBox="0 0 20 20"
    //             >
    //               <path
    //                 stroke="currentColor"
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //                 strokeWidth="2"
    //                 d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
    //               />
    //             </svg>
    //           </div>
    //           <input
    //             type="search"
    //             id="default-search"
    //             onChange={handleSearch}
    //             className="block w-full p-4 pl-10 text-sm text-gray-900 border rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    //             placeholder="Search By Year..."
    //             required
    //           />
    //           <button
    //             type="submit"
    //             className="absolute right-2.5 bottom-2.5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    //           >
    //             Search
    //           </button>
    //         </div>
    //       </form>
    //     </div>
    //     <div className="container mt-5">
    //       <div className="card">
    //         {repos.map((value) => (
    //           <div className="card-columns flex" key={value.id}>
    //               <div className="block max-w-[18rem] rounded-lg bg-white shadow-md dark:bg-neutral-700">
    //                   <div className="relative overflow-hidden bg-cover bg-no-repeat">
    //                       <img className="max-w-sm rounded p-1" src={value.image} alt={value.wine} />
    //                   </div>
    //                   <div className="p-6">
    //                       <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
    //                           {value.wine}
    //                       </h5>
    //                       <p className="text-base text-neutral-600 dark:text-neutral-200">
    //                           {value.winery}
    //                       </p>
    //                   </div>
    //                   <ul className="w-full">
    //                       <li className="w-full border-b-2 border-neutral-100 px-6 py-3 dark:border-opacity-50">
    //                           Average Rating: {value.average}
    //                       </li>
    //                       <li className="w-full border-b-2 border-neutral-100 px-6 py-3 dark:border-opacity-50">
    //                           Reviews: {value.reviews}
    //                       </li>
    //                   </ul>
    //                   <div className="p-6">
    //                       <a href="/reviews" className="mr-5 inline-block rounded text-base font-normal leading-normal text-primary hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700">
    //                           Reviews
    //                       </a>
    //                       <a href="/contact" className="inline-block rounded text-base font-normal leading-normal text-primary hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700">
    //                           Contact
    //                       </a>
    //                   </div>
    //               </div>
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
