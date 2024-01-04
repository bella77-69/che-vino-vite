import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function Reviews() {
  const [services, setServices] = useState([]);
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/wines/review/${id}`)
      .then((res) => res.json())
      .then((result) => {
        setServices(result);
        console.log(result);
      });
  }, [id]);

  useEffect(() => {
    fetch(`http://localhost:5000/wines/comments/${id}`)
      .then((res) => res.json())
      .then((result) => {
        setReviews(result);
        console.log(result);
      });
  }, [id]);

  return (
    <section className="dark:bg-[#343434] px-4 py-8 md:px-10 md:py-20 w-full">
      <div className="py-8">
        {services.map((service, index) => (
          <div
            className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
            key={`service-${service.id || index}`}
          >
            <div className="flex flex-col md:flex-row -mx-4">
              <div className="md:flex-1 px-4">
                <div className="h-auto rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                  <img
                    className="w-full h-full object-cover"
                    src={service.image}
                    alt="Product Image"
                  />
                </div>
                <div className="flex flex-col md:flex-row -mx-2 mb-4">
                  <div className="w-full md:w-1/2 px-2 mb-2 md:mb-0">
                    <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 md:px-8 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">
                      <Link
                        to={"/leave_review/" + service.id}
                        className="list-link"
                      >
                        Leave a Review
                      </Link>
                    </button>
                  </div>
                  <div className="w-full md:w-1/2 px-2">
                    <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 md:px-8 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">
                      <Link to="/reviews">Back to Wine Page</Link>
                    </button>
                  </div>
                </div>
              </div>
              <div className="md:flex-1 px-4">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                  {service.wine}
                </h2>
                {/* <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                {service.review}
                </p> */}
                <div className="flex mb-4">
                  <div className="mr-4">
                    <span className="font-bold text-gray-700 dark:text-gray-300">
                      Price:{" "}
                    </span>
                    <span className="text-gray-600 dark:text-gray-300">
                      {service.price}
                    </span>
                  </div>
                  <div>
                    <span className="font-bold text-gray-700 dark:text-gray-300">
                      Style:{" "}
                    </span>
                    <span className="text-gray-600 dark:text-gray-300">
                      {service.style}
                    </span>
                  </div>
                </div>
                <div className="mb-4">
                  <span className="font-bold text-gray-700 dark:text-gray-300">
                    Rating:{" "}
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">
                    {service.rating}
                  </span>
                </div>
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Reviews:
                </span>
                {reviews.map((review, index) => (
                  <div key={`review-${review.id || index}`}>
                    <div className="flex-1 sm:py-4 leading-relaxed mt-2 sm:mt-0">
                      <strong className="text-gray-700 dark:text-gray-300">
                        {review.comment_name}
                      </strong>
                      <span className="text-gray-600 dark:text-gray-300 text-sm ml-2 ">
                        {review.comment_date}
                      </span>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                        {review.comment_text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Reviews;
