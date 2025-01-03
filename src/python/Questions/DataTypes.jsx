import React, { useState } from 'react';
import Header from '../Header';
import { FaSmile } from 'react-icons/fa';

const questions = [
  {
    question: "Write a program to check if a given number is even or odd. What operator is used?",
    options: ["%", "/", "//"],
    name: "q1",
  },
  {
    question: "Calculate the total price after a 5% sales tax for an item with price 100. What is the output?",
    options: ["105", "95", "100.5"],
    name: "q2",
  },
  {
    question: "Given a complex number `3 + 4j`, what is the imaginary part?",
    options: ["3", "4", "7"],
    name: "q3",
  },
  {
    question: "Count the number of vowels in the string 'Python'. How many are there?",
    options: ["1", "2", "3"],
    name: "q4",
  },
  {
    question: "Reverse the string 'Python'. What is the result?",
    options: ["Python", "nohtyP", "thonPy"],
    name: "q5",
  },
  {
    question: "Is the word 'radar' the same when read backward?",
    options: ["Yes", "No", "I don't know"],
    name: "q6",
  },

  {
    question: "What is the data type of `True` in Python?",
    options: ["int", "bool", "str"],
    name: "q7",
  },
  {
    question: "What is the result of adding '10' + '15' in Python?",
    options: ["25", "1015", "20"],
    name: "q8",
},

  {
    question: "How many days does February have in a leap year?",
    options: ["28", "29", "30"],
    name: "q9",
  },

  {
    question: "What is the sum of numbers in the list [1, 2, 3, 4, 5]?",
    options: ["10", "14", "15"],
    name: "q10",
  },
  {
    question: "Find the largest number in the list [10, 20, 30].",
    options: ["10", "20", "30"],
    name: "q11",
  },
  {
    question: "Remove duplicates from the list [1, 2, 2, 3, 4]. What is the result?",
    options: ["[1, 2, 2, 3, 4]", "[1, 2, 3, 4]", "[1, 3, 4]"],
    name: "q12",
  },
  {
    question: "What function gets the number of items in a tuple?",
    options: ["size()", "len()", "count()"],
    name: "q13",
  },
  {
    question: "What is the output of `len((1, 2, 3))`?",
    options: ["2", "3", "4"],
    name: "q14",
  },
  {
    question: "How do you create a dictionary in Python?",
    options: ["{}", "[]", "()"],
    name: "q15",
  },
  {
    question: "What is the default value of a variable in Python if not initialized?",
    options: ["0", "None", "Undefined"],
    name: "q16",
  },
  {
    question: "How do you convert a number to a string in Python?",
    options: ["str()", "int()", "float()"],
    name: "q17",
  },
  {
    question: "Which method removes an item from a list?",
    options: ["delete()", "remove()", "discard()"],
    name: "q18",
  },
  {
    question: "What does the `set()` function do?",
    options: [
      "Creates a tuple",
      "Creates a dictionary",
      "Creates a set",
    ],
    name: "q19",
  },
  {
    question: "What is the output of `type(3.14)`?",
    options: ["<class 'int'>", "<class 'float'>", "<class 'complex'>"],
    name: "q20",
  }
];

const correctAnswers = {
  q1: "%",
  q2: "105",
  q3: "4",
  q4: "1",
  q5: "nohtyP",
  q6: "Yes",
  q7: "bool",
  q8: "1015",
  q9: "29",
  q10: "15",
  q11: "30",
  q12: "[1, 2, 3, 4]",
  q13: "len()",
  q14: "3",
  q15: "{}",
  q16: "None",
  q17: "str()",
  q18: "remove()",
  q19: "Creates a set",
  q20: "<class 'float'>",
};


const DataTypes = () => {
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAnswers({ ...answers, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let score = 0;

    for (let question in correctAnswers) {
      if (answers[question] === correctAnswers[question]) {
        score++;
      }
    }

    setResult(`You scored ${score} out of ${Object.keys(correctAnswers).length}`);
  };

  const handleReset = () => {
    setAnswers({});
    setResult(null);
  };
  const user_name = (
    <span>
      Welcome, <span className="text-white font-bold">{localStorage.getItem('userName') || 'Guest'}</span>
      <FaSmile className="inline ml-2 text-yellow-500" />
    </span>
  );
  return (
    <>
      <Header title={user_name} desc="Take A Breath And Start You Can Do It." />
      <div className="container mx-auto p-4 sm:p-8">
        <div className="bg-white shadow-lg rounded-lg p-6 sm:p-10 border-t-4 border-blue-500">
          <h1 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 text-center mb-6">
            2. DATA TYPES IN PYTHON
          </h1>
          <hr className="border-blue-300 mb-8" />
          <form className="space-y-6" onSubmit={handleSubmit}>
            {questions.map(({ question, options, name }, index) => (
              <div key={index}>
                <p className="font-medium text-lg text-gray-800 mb-3">
                  {index + 1}. {question}
                </p>
                <div className="space-y-2">
                  {options.map((option, idx) => (
                    <label key={idx} className="block">
                      <input
                        type="radio"
                        name={name}
                        value={option}
                        checked={answers[name] === option}
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      {option}
                    </label>
                  ))}
                </div>
              </div>
            ))}

            {result && <p className="text-center text-green-600 font-semibold">{result}</p>}

            <div className="flex justify-center space-x-4">
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold py-2 px-6 rounded-lg shadow hover:from-blue-600 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              >
                Submit
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="bg-gray-500 text-white font-bold py-2 px-6 rounded-lg shadow hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 transition duration-300"
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default DataTypes;
