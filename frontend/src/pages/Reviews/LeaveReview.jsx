import axios from "axios";
import React, { useState } from "react";

export default function ContactPage() {
  const [contact, setContact] = useState({
    comment_text: "",
    review_id: "",
    comment_name: "",
    comment_date: new Date().toISOString(),
    successMessage: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setContact((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = (e, id) => {
    e.preventDefault();
    const data = {
      comment_text: contact.comment_text,
      review_id: id,
      comment_name: contact.comment_name,
      comment_date: contact.comment_date,
    };

    axios
      .put(`http://localhost:5000/wines/comments/{id}`, data)
      .then((response) => {
        if (response.status === 200) {
          setContact((prevState) => ({
            ...prevState,
            successMessage: "Submitted.",
          }));
          console.log(response);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          Leave a Review
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-200 dark:text-gray-200 sm:text-xl">
          {" "}
          We appreciate your feedback!
        </p>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-200 dark:text-gray-200"
            >
              Your name
            </label>
            <input
              type="text"
              id="comment_name"
              onChange={handleChange}
              value={contact.comment_name}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-200 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="name"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="comment"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-200"
            >
              Your review
            </label>
            <textarea
              id="comment_text"
              rows="6"
              onChange={handleChange}
              value={contact.comment_text}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-200 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Leave a review..."
            ></textarea>
          </div>
          <div>
          <label
            htmlFor="date"
            className="block mb-2 text-sm font-medium text-gray-200 dark:text-gray-200"
          >
            Date
          </label>
          <input
            type="text"
            id="date"
            value={new Date(contact.comment_date).toLocaleDateString()}
            readOnly
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-200 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
          />
        </div>
          <button
            type="submit"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-800"
          ></button>
        </form>
      </div>
    </section>
  );
}
