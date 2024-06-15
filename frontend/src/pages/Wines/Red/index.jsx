import React, { useEffect, useState } from "react";

export default function RedWinePage() {
  const [data, setData] = useState([]);
  const [initialWine, setInitialWine] = useState({
    image: "path-to-default-wine-image.jpg",
    wine: "Initial Wine",
    reviews: "0",
    average: "0",
    winery: "Initial Winery",
    location: "Initial Location",
    type: "Initial Type",
  });

  useEffect(() => {
    const fetchWineData = async () => {
      try {
        const response = await fetch("http://localhost:5000/wines/all");
        const fetchedData = await response.json();
        const redWines = fetchedData.filter((wine) => wine.type === "red");
        setData(redWines);

        if (redWines.length > 0) {
          const randomIndex = Math.floor(Math.random() * redWines.length);
          setInitialWine(redWines[randomIndex]);
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchWineData();
  }, []);

  const handleWineGeneratorClick = () => {
    if (data.length > 0) {
      const randomIndex = Math.floor(Math.random() * data.length);
      setInitialWine(data[randomIndex]);
    }
  };

  return (
    <section className="bg-gradient-to-b from-gray-700 to-gray-900 text-white px-4 py-8 md:px-10 md:py-20 w-full">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">
            Savor the Richness of Red Wines
          </h1>
          <p className="text-lg">
            Explore our diverse selection of red wines, perfect for any
            occasion.
          </p>
        </header>
        <div className="w-full md:w-4/6 flex flex-col md:flex-row items-center justify-center bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <div className="md:p-2 lg:p-8 mb-4 relative">
            <img
              src={initialWine.image}
              className="w-full h-50 object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
              alt="wine-img"
            />
          </div>
          <div className="flex flex-col items-center md:items-start md:pl-8 md:w-3/6 lg:w-5/12 p-6">
            <h1 className="text-2xl text-center lg:text-3xl md:text-left font-medium mb-2 md:break-normal text-white">
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
              <span className="mr-3 text-gray-300">
                {initialWine.reviews} reviews
              </span>
              <span className="text-gray-300">
                Rating: {initialWine.average}/5
              </span>
            </div>
            <h2 className="mb-2 text-gray-300">{initialWine.winery}</h2>
            <p className="mb-4 text-gray-300">{initialWine.location}</p>

            <button
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-purple-600 border border-purple-600 rounded-lg hover:bg-purple-700 focus:ring-4 focus:ring-purple-300 transition duration-300"
              onClick={handleWineGeneratorClick}
            >
              Generate Random Wine
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
