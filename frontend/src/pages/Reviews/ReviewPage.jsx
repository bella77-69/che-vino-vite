import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ReviewPage = () => {
  const [currentItemsId, setCurrentItemsId] = useState("");
  const [currentItem, setCurrentItem] = useState({});
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/wines/review")
      .then((res) => {
        console.log("Res", res);
        setItems(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    const id = items[0]?.id || "";
    if (id !== currentItemsId) {
      axios
        .get(`http://localhost:5000/wines/review/${id}`)
        .then((res) => {
          setCurrentItemsId(res.data[0]);
          setCurrentItem(res.data);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [items, currentItemsId]);

  const handleSubmit = (id, e) => {
    e.preventDefault();
    axios
      .get(`http://localhost:5000/wines/review/${id}`)
      .then((res) => {
        console.log("Handle Submit", res);
        setCurrentItemsId(res.data[0]);
        window.location.href = `/reviews/${id}`;
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <section className="bg-gray-800 text-white px-4 py-8 md:px-10 md:py-20 w-full">
      <div className="container px-5 mx-auto flex flex-wrap justify-center">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex flex-col overflow-hidden rounded sm:flex-row text-slate-500 shadow-slate-200 mt-4 p-8"
          >
            <div className="flex-1 p-2 sm:mx-6 sm:px-0">
              <header className="flex flex-col md:flex-row gap-4 mb-4">
                <a
                  href="#"
                  className="inline-flex justify-center w-20 h-30 rounded-full"
                >
                  <img
                    src={item.image}
                    alt={item.wine}
                    width="70"
                    height="50"
                    className="max-w-full rounded-full"
                  />
                </a>
                <div>
                  <h3 className="text-xl font-medium text-white">
                    {" "}
                    {item.wine}
                  </h3>
                  <p className="text-sm text-[#f9f9f9]"> {item.price}</p>
                  <p className="text-sm text-[#f9f9f9]">{item.style}</p>
                  <p className="pt-2 text-sm text-[#f9f9f9]">
                    Rating: {item.rating}
                  </p>
                </div>
              </header>
              <p className="text-white">{item.review}</p>

              <button
                className="mt-2 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-800"
                onClick={(e) => handleSubmit(item.id, e)}
              >
                <Link to={`/reviews/${item.id}`} className="card-link">
                  More Info
                </Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReviewPage;
