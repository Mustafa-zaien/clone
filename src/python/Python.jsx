import React from "react";
import { Link } from "react-router"; // Import Outlet
import Header from "./Header";

const Python = () => {
  const data = [
    {
      title: "Introduction to Python: Understanding Basics",
      desc: "Learn about Python's history, features, and how to set up your development environment.",
    },
    {
      title: "Data Types and Variables",
      desc: "Understand Python's core data types and how to use variables to store and manipulate data.",
    },
    {
      title: "Control Flow: Loops and Conditional Statements",
      desc: "Master decision-making and iteration using if-else conditions, while loops, and for loops.",
    },
    {
      title: "Functions and Modules",
      desc: "Learn how to write reusable code using functions and organize code into modules for better structure.",
    },
    {
      title: "Working with Data: Lists, Dictionaries, and Tuples",
      desc: "Explore Python's data structures to store, access, and manipulate collections of data.",
    },
    {
      title: "Object-Oriented Programming",
      desc: "Understand classes, objects, inheritance, and other OOP concepts to write modular and scalable code.",
    },
    {
      title: "Advanced Topics: File Handling, Error Handling",
      desc: "Learn to work with files and handle errors gracefully using try-except blocks.",
    },
    {
      title: "Final Project: Build a Python Application",
      desc: "Apply everything you've learned to create a real-world Python application.",
    },
  ];

  return (
    <>
      {/* Header Section */}
      {<Header title={"Welcome to the Python Course"}/>}

      {/* Road Map Section */}
      <section className="bg-cyan-50 py-10 px-4">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl sm:text-4xl font-bold text-cyan-600 text-center mb-4 font-serif">
            Road Map
          </h2>
          <hr className="border-t-2 border-dashed border-cyan-400 mb-6" />
          <p className="text-emerald-700 italic font-medium text-center mb-8">
            Follow the steps below to master Python:
          </p>
          <ul className="space-y-6">
            {data.map((step, index) => (
              <li
                key={index}
                className="bg-cyan-100 p-6 rounded-md border-l-4 cursor-default border-cyan-500 hover:bg-cyan-200 hover:border-cyan-700 transition-transform duration-300 ease-in-out transform hover:scale-105"
              >
                <h3 className="text-xl sm:text-2xl font-semibold text-cyan-700 mb-2 font-serif">
                  {step.title}
                </h3>
                <p className="text-gray-700 text-sm sm:text-base">{step.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Questions Section */}
      <section className="bg-cyan-50 pt-4 pb-16">
        <div className="max-w-lg mx-auto bg-cyan-50 p-8 rounded-lg shadow-md border border-blue-300">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-700 text-center font-serif">
            Questions
          </h2>
          <hr className="border-t-2 border-dashed border-blue-400 my-4" />
          <p className="text-center text-gray-700 mb-6 text-sm sm:text-base">
            Practice to see if you've understood:
          </p>
          <div className="text-center">
            <Link
              to={"questions"}
              className="bg-gradient-to-r from-cyan-500 to-green-500 text-white px-6 py-3 font-bold rounded-full shadow-lg hover:from-cyan-600 hover:to-green-600 transition duration-300"
            >
              To Questions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Python;
