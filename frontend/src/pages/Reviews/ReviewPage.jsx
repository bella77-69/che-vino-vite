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
    // <section className="wine dark:bg-[#343434]">
    //   <div className="d-flex justify-content-center container">
    //     <div className="card p-3 text-white">
    //       <div className="about-product">
    //         {items.map((item) => (
    //           <div className="mt-0 mt-4" key={item.id}>
    //             {/* {currentItem.id === item.id && (
    //               <ReviewsList items={items} listId={item.id} />
    //             )} */}
    //             <img
    //               className="pl-3"
    //               src={item.image}
    //               width="100"
    //               alt="wine-img"
    //             />

    //             <h4 className="card-title mt-4 mx-3">{item.wine}</h4>
    //             <h5 className="card-subtitle mx-3 mt-2">{item.style}</h5>
    //             <h5 className="card-subtitle mx-3 mt-2">{item.price}</h5>
    //             <h5 className="card-subtitle mx-3 mt-2 text-muted font-italic">
    //               {item.review}
    //             </h5>
    //             <p className="card-text p-y-1 mx-3 mt-2">
    //               Rating: {item.rating}
    //             </p>
    //             <button
    //               className="btn mx-3 mt-2 border-dark"
    //               onClick={(e) => handleSubmit(item.id, e)}
    //             >
    //               <Link to={`/comments/${item.id}`} className="card-link">
    //                 More Info
    //               </Link>
    //             </button>
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section class="flex items-center bg-gray-200 min-h-screen font-poppins dark:bg-gray-900 w-full">
      <div class="justify-center max-w-6xl px-4 py-4 mx-auto lg:py-0">
        <div class="grid grid-cols-1 gap-6 lg:grid-cols-3 md:grid-cols-2">
          {items.map((item) => (
            <div
              class="relative bg-white rounded-2xl dark:bg-gray-700"
              key={item.id}
            >
              <div class="w-full h-56 px-4 pt-4">
                <img
                  src={item.image}
                  alt=""
                  class="object-cover w-full h-full rounded-lg "
                />
              </div>
              <div>
                <div class="p-4">
                  <div class="mb-3">
                    <a href="">
                      <h2 class="text-2xl font-semibold dark:text-gray-300">
                        {item.wine}
                      </h2>
                    </a>
                  </div>
                  <p class="pb-16 text-base font-base text-gray-700 dark:text-gray-400">
                    {item.review}
                  </p>
                  <h6 className="card-subtitle mx-3 mt-2">{item.style}</h6>
                  <h6 className="card-subtitle mx-3 mt-2">{item.price}</h6>
                  <p className="card-text p-y-1 mx-3 mt-2">
                    Rating: {item.rating}
                  </p>
                </div>
                <div class="flex items-center justify-end ">
                  <button
                    onClick={(e) => handleSubmit(item.id, e)}
                    class="absolute bottom-0 right-0 px-3 py-4 text-sm text-gray-100 bg-indigo-600 rounded-tl-2xl rounded-br-2xl hover:bg-indigo-700 hover:text-gray-100"
                  >
                    <Link to={`/comments/${item.id}`} className="card-link">
                      More Info
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div class="relative bg-white rounded-2xl dark:bg-gray-700">
            <div class="w-full h-56 px-4 pt-4 ">
              <img
                src="https://i.postimg.cc/s2tvtrPF/first.jpg"
                alt=""
                class="object-cover w-full h-full rounded-lg "
              />
            </div>
            <div>
              <div class="p-4">
                <div class="mb-3">
                  <a href="">
                    <h2 class="text-2xl font-semibold dark:text-gray-300">
                      Lorem ipsum dor amet ispiciousas
                    </h2>
                  </a>
                </div>
                <p class="pb-16 text-base font-base text-gray-700 dark:text-gray-400">
                  We will take you different places of nepal and will translate
                  japanese to english entertain ...
                </p>
              </div>
              <div class="flex items-center justify-end ">
                <a
                  href="#"
                  class="absolute bottom-0 right-0 px-3 py-4 text-sm text-gray-100 bg-indigo-600 rounded-tl-2xl rounded-br-2xl hover:bg-indigo-700 hover:text-gray-100"
                >
                  Find out more
                </a>
              </div>
            </div>
          </div>
          <div class="relative bg-white rounded-2xl dark:bg-gray-700">
            <div class="w-full h-56 px-4 pt-4 ">
              <img
                src="https://i.postimg.cc/Qdhgyp8g/second.jpg"
                alt=""
                class="object-cover w-full h-full rounded-lg "
              />
            </div>
            <div>
              <div class="p-4">
                <div class="mb-3">
                  <a href="">
                    <h2 class="text-2xl font-semibold dark:text-gray-300">
                      Lorem ipsum dor amet ispiciousas
                    </h2>
                  </a>
                </div>
                <p class="pb-16 text-base font-base text-gray-700 dark:text-gray-400">
                  We will take you different places of nepal and will translate
                  japanese to english entertain ...
                </p>
              </div>
              <div class="flex items-center justify-end ">
                <a
                  href="#"
                  class="absolute bottom-0 right-0 px-3 py-4 text-sm text-gray-100 bg-indigo-600 rounded-tl-2xl rounded-br-2xl hover:bg-indigo-700 hover:text-gray-100"
                >
                  Find out more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewPage;
