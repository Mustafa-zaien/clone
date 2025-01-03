import React from "react";
import { AiOutlineHome } from "react-icons/ai"; // Import the Home icon
import { useNavigate, useLocation } from "react-router"; // Import useNavigate and useLocation

const StaticHeader = () => {
  const navigate = useNavigate(); // Hook for navigation
  const location = useLocation(); // Hook to get the current location

  const handleHomeClick = () => {
    navigate("/"); // Navigate to the home page
  };

  // Hide the icon if the current path is "/"
  if (location.pathname === "/") {
    return null;
  }

  return (
    <div>
      {/* Static Home Icon */}
      <div
        onClick={handleHomeClick} // Add click handler
        className="fixed cursor-pointer right-4 top-1/2 transform -translate-y-1/2 bg-cyan-500 text-white p-4 rounded-full shadow-lg hover:bg-cyan-600 transition duration-300 ease-in-out"
      >
        <AiOutlineHome size={30} />
      </div>
    </div>
  );
};

export default StaticHeader;
