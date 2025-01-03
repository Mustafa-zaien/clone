import React, { useState } from 'react';
import Header from '../Header';

const Questions = () => {
  const [formData, setFormData] = useState({ name: '', subject: '' });
  const [error, setError] = useState('');

  const subjects = [
    { value: 'introduction', label: 'Introduction to Python', href: '/python/questions/introduction' },
    { value: 'data-types', label: 'Data Types and Variables', href: '/python/questions/data-types',disabled:true },
    { value: 'control-flow', label: 'Control Flow: Loops and Conditional Statements', href: '/python/questions/control-flow',disabled:true },
    { value: 'functions-modules', label: 'Functions and Modules', href: '/python/questions/functions-modules',disabled:true },
    { value: 'data-structures', label: 'Working with Data: Lists, Dictionaries, and Tuples', href: '/python/questions/data-structures',disabled:true },
    { value: 'oop', label: 'Object-Oriented Programming', href: '/python/questions/oop' ,disabled:true},
    { value: 'advanced-topics', label: 'Advanced Topics: File Handling, Error Handling', href: '/python/questions/advanced-topics' ,disabled:true},
    { value: 'final-project', label: 'Final Project: Build a Python Application', href: '/python/questions/final-project' ,disabled:true},
  ];

  const handleInputChange = ({ target: { id, value } }) => {
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, subject } = formData;

    if (!name.trim() || !subject) {
      setError('Please fill out all fields.');
      return;
    }

    const selectedSubject = subjects.find((item) => item.value === subject);
    if (selectedSubject) {
      window.location.href = selectedSubject.href;
    }
  };

  const renderInputField = (id, label, type = 'text', placeholder = '') => (
    <div className="mb-8">
      <label htmlFor={id} className="block text-blue-800 font-semibold mb-3 text-xl">
        {label}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        value={formData[id]}
        onChange={handleInputChange}
        className="w-full px-4 py-3 border border-blue-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition duration-300"
      />
    </div>
  );

  const renderSelectField = (id, label, options) => (
    <div className="mb-8">
      <label htmlFor={id} className="block text-blue-800 font-semibold mb-3 text-xl">
        {label}
      </label>
      <select
        id={id}
        value={formData[id]}
        onChange={handleInputChange}
        className="w-full px-4 py-3 border border-blue-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition duration-300"
      >
        <option value="">-- Choose a subject --</option>
        {options.map((option) => (
          <option disabled={option.disabled} key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );

  return (
    <>
      <Header title="Questions" desc="Ready for questions? Go ahead, Dragon!" />
      <div className="container h-screen p-2">
        <div className="max-w-md h-auto flex items-center justify-center mx-auto mt-28 bg-gradient-to-br from-white to-blue-50 p-10 rounded-lg shadow-2xl border border-blue-300 sm:max-w-lg md:max-w-xl lg:max-w-2xl">
          <form className="w-full" onSubmit={handleSubmit}>
            {renderInputField('name', 'Your Name:', 'text', 'Enter your name')}
            {renderSelectField('subject', 'Select a Subject:', subjects)}
            {error && <p className="text-red-500 text-center mb-4">{error}</p>}
            <div className="text-center">
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:from-blue-600 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Questions;
