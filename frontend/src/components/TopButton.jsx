import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const TopButton = () => {
  const [show, setShow] = useState(false);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    if (scrollTop > 300) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      onClick={scrollTop}
      className={
        show
          ? "fixed bottom-10 right-10 bg-[#FFFFFF] hover:bg-[#CD0617] text-black px-4 py-2 rounded-full transition duration-300"
          : "hidden"
      }
    >
      <FaArrowUp className="w-5 h-5" />
    </button>
  );
};

export default TopButton;
