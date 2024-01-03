import React, { useEffect, useState } from "react";

export default function DessertWinePage() {
  const [data, setData] = useState([]);
  const [oneData, fetchOneWine] = useState("");

  useEffect(() => {
    const fetchWine = async () => {
      try {
        const getWine = await fetch("http://localhost:5000/wines/rose");
        const data = await getWine.json();

        setData(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchWine();
  }, []);

  const handleClick = (event) => {
    event.preventDefault();
    const random = data[Math.floor(Math.random() * data.length)];
    fetchOneWine(random);
  };

  return (
<section className="dark:bg-[#343434] px-4 py-8 md:px-10 md:py-20 w-full">
  <div className="dark:bg-[#151515] rounded">
    <div className="container px-5 py-24 mx-auto flex flex-wrap justify-center">
      <div className="w-full lg:h-48 rounded sm:w-72 md:w-96 p-2 flex flex-col items-center">
        <img
          src={oneData.image}
          className="w-1/4 lg:h-45 xl:p-2"
          alt="wine-img"
        />
      </div>

      <div className="lg:w-1/2 w-full lg:py-6 mt-6 lg:mt-0">
        <h2 className="text-sm title-font text-white tracking-widest">WINE NAME</h2>
        <h1 className="text-white text-3xl title-font font-medium mb-1">{oneData.wine}</h1>
        <div className="flex mb-4">
          <span className="flex items-center">
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 text-red-500"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <span className="text-gray-300 ml-3">{oneData.reviews}</span>
            <span className="text-gray-300 ml-3">{oneData.average}</span>
          </span>
        </div>

        <h2 className="text-white">{oneData.winery}</h2>
        <div className="flex flex-col items-center mt-6 pb-5 border-b-2 border-t-2 border-gray-300 mb-5">
          <span className="title-font font-medium text-2xl text-white mb-2">{oneData.location}</span>
          <button
            className="text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded"
            onClick={handleClick}
          >
            Wine Generator
          </button>
        </div>
      </div>
    </div>
  </div>
</section>
  );
}
