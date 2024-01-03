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
    <section className="wine dark:bg-[#343434]">
      <div className="d-flex justify-content-center container">
        <div className="card p-3 text-white">
          <div className="about-product">
            {items.map((item) => (
              <div className="mt-0 mt-4" key={item.id}>
                {/* {currentItem.id === item.id && (
                  <ReviewsList items={items} listId={item.id} />
                )} */}
                <img
                  className="pl-3"
                  src={item.image}
                  width="100"
                  alt="wine-img"
                />

                <h4 className="card-title mt-4 mx-3">{item.wine}</h4>
                <h5 className="card-subtitle mx-3 mt-2">{item.style}</h5>
                <h5 className="card-subtitle mx-3 mt-2">{item.price}</h5>
                <h5 className="card-subtitle mx-3 mt-2 text-muted font-italic">
                  {item.review}
                </h5>
                <p className="card-text p-y-1 mx-3 mt-2">
                  Rating: {item.rating}
                </p>
                <button
                  className="btn mx-3 mt-2 border-dark"
                  onClick={(e) => handleSubmit(item.id, e)}
                >
                  <Link to={`/comments/${item.id}`} className="card-link">
                    More Info
                  </Link>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewPage;
