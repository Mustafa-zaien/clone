import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa"; // Import the up arrow icon

const StaticUpArrow = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Handle scroll event
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling
    });
  };

  // Add event listener for scroll on mount
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <div
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-cyan-500 text-white p-4 rounded-full shadow-lg cursor-pointer hover:bg-cyan-600 transition duration-300 ease-in-out"
        >
          <FaArrowUp size={20} />
        </div>
      )}
    </>
  );
};

export default StaticUpArrow;
