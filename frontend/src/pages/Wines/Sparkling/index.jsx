import React, { useEffect, useState } from "react";

export default function DessertWinePage() {
  const [data, setData] = useState([]);
  const [initialWine, setInitialWine] = useState({
    image: "path-to-default-wine-image.jpg",
    wine: "Initial Wine",
    reviews: "0",
    average: "0",
    winery: "Initial Winery",
    location: "Initial Location",
  });

  useEffect(() => {
    const fetchWineData = async () => {
      try {
        const response = await fetch("http://localhost:5000/wines/sparkling");
        const fetchedData = await response.json();
        setData(fetchedData);

        const randomIndex = Math.floor(Math.random() * fetchedData.length);
        setInitialWine(fetchedData[randomIndex]);
      } catch (err) {
        console.log(err);
      }
    };

    fetchWineData();
  }, []);

  const handleWineGeneratorClick = () => {
    const randomIndex = Math.floor(Math.random() * data.length);
    setInitialWine(data[randomIndex]);
  };

  return (
    <section className="bg-gray-900 text-white px-4 py-8 md:px-10 md:py-20 w-full">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <div className="w-full md:w-4/6 flex flex-col md:flex-row items-center justify-center">
          <div className="md:p-2 lg:p-8 mb-4 relative">
            <img
              src={initialWine.image}
              className="w-full h-50 object-cover"
              alt="wine-img"
            />
          </div>
          <div className="flex flex-col items-center md:items-start md:pl-8 md:w-3/6 lg:w-5/12 ">
            <h1 className="text-2xl text-center lg:text-3xl md:text-left font-medium mb-2 md:break-normal">
              {initialWine.wine}
            </h1>
            <div className="flex mb-4 items-center md:items-start md:justify-center">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 text-red-500 mr-2"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
              </svg>
              <span className="mr-3">{initialWine.reviews}</span>
              {/* <span>{initialWine.average}</span> */}
            </div>
            <h2 className="mb-2">{initialWine.winery}</h2>
            <p className="mb-4">{initialWine.location}</p>
            <button
               className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              onClick={handleWineGeneratorClick}
            >
              Wine Generator
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
