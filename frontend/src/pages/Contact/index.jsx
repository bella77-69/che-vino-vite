import React, { useState } from "react";
import axios from "axios";

function index() {
  const [contact, setContact] = useState({
    id: "",
    name: "",
    email: "",
    comment: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setContact((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const data = {
      name: contact.name,
      email: contact.email,
      comment: contact.comment,
    };

    axios
      .post(`http://localhost:5000/wines/contact`, data)
      .then((response) => {
        if (response.status === 200) {
          setShowSuccessAlert(true);
          setIsSubmitting(false);
          setContact({
            id: "",
            name: "",
            email: "",
            comment: "",
          });
        }
      })
      .catch((error) => {
        console.log("Error:", error);
        setIsSubmitting(false);
      });
  };

  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          Contact Us
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-200 dark:text-gray-200 sm:text-xl">
          {" "}
          For Inquiries, Support Requests or General Questions
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
              id="name"
              onChange={handleChange}
              value={contact.name}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-200 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="name"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-200"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              onChange={handleChange}
              value={contact.email}
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-200 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="name@something.com"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="comment"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-200"
            >
              Your message
            </label>
            <textarea
              id="comment"
              rows="6"
              onChange={handleChange}
              value={contact.comment}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-200 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Leave a message..."
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-800"
          >
            {isSubmitting ? "Submitting..." : "Send message"}
          </button>
        </form>
        {showSuccessAlert && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 m-4">
              <h2 className="text-lg font-semibold mb-4">Success</h2>
              <p>Your message has been successfully sent.</p>
              <button
                onClick={() => setShowSuccessAlert(false)}
                className="mt-4 bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default index;
