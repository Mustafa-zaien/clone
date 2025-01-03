import React from "react";
import { AiOutlineTool } from "react-icons/ai"; // Import a maintenance icon from React Icons

const DataAnalysis = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center bg-white p-8 rounded-lg shadow-md">
        {/* Icon */}
        <AiOutlineTool className="text-cyan-500 mx-auto mb-4" size={60} />
        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          الصفحة تحت الصيانة
        </h1>
        {/* Message */}
        <p className="text-gray-600">
          نعمل على تحسين هذه الصفحة. يرجى العودة لاحقًا!
        </p>
        {/* Back to Home Button */}
        <a href="/" className="inline-block mt-6 bg-cyan-500 text-white px-6 py-2 rounded-full shadow-lg hover:bg-cyan-600 transition duration-300">
          العودة إلى الصفحة الرئيسية
        </a>
      </div>
    </div>
  );
};

export default DataAnalysis;
