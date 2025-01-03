import React, { useState } from 'react';
import Header from '../Header';

const questions = [
  {
    question: "What is Python?",
    options: [
      "A programming language",
      "A type of snake",
      "A database",
    ],
    name: "q1",
  },
  {
    question: "Which programming paradigm does Python support?",
    options: [
      "Object-Oriented",
      "Functional",
      "Both Object-Oriented and Functional",
    ],
    name: "q2",
  },
  {
    question: "What type of language is Python?",
    options: ["Interpreted", "Compiled", "Assembly"],
    name: "q3",
  },
  {
    question: "What is Python mainly used for?",
    options: ["Web Development", "Data Analysis", "All of the above"],
    name: "q4",
  },
  {
    question: "When was Python first released?",
    options: ["1991", "2000", "1989"],
    name: "q5",
  },
  {
    question: "Which of the following is a key feature of Python?",
    options: [
      "Interpreted and Interactive",
      "Low-level programming",
      "Static typing",
    ],
    name: "q6",
  },
  {
    question: "What is the correct extension for a Python file?",
    options: [".python", ".py", ".p"],
    name: "q7",
  },
  {
    question: "Which of the following is true about Python?",
    options: [
      "It is case-sensitive",
      "It is not case-sensitive",
      "It is partially case-sensitive",
    ],
    name: "q8",
  },
  {
    question: "How do you print \"Hello, World!\" in Python?",
    options: [
      "echo(\"Hello, World!\")",
      "printf(\"Hello, World!\")",
      "print(\"Hello, World!\")",
    ],
    name: "q9",
  },
  {
    question: "Which of the following is not a valid Python keyword?",
    options: ["def", "class", "define"],
    name: "q10",
  },
  {
    question: "What does the `print()` function do in Python?",
    options: [
      "Outputs text to the console",
      "Saves text to a file",
      "Terminates the program",
    ],
    name: "q11",
  },
  {
    question: "Which of these is the correct way to create a variable in Python?",
    options: ["var x = 10", "x = 10", "int x = 10"],
    name: "q12",
  },
  {
    question: "What is the output of `print(2 + 3 * 4)` in Python?",
    options: ["14", "20", "24"],
    name: "q13",
  },
  {
    question: "Which function is used to take input from the user in Python?",
    options: ["scan()", "input()", "read()"],
    name: "q14",
  },
  {
    question: "Which of the following is the correct way to start a Python comment?",
    options: [
      "# This is a comment",
      "// This is a comment",
      "/* This is a comment */",
    ],
    name: "q15",
  },
  {
    question: "What is the result of `10 // 3` in Python?",
    options: ["3", "3.33", "4"],
    name: "q16",
  },
  {
    question: "Which of these is not a valid Python data type?",
    options: ["list", "set", "array"],
    name: "q17",
  },
  {
    question: "Which of these keywords is used to define a function in Python?",
    options: ["function", "func", "def"],
    name: "q18",
  },
  {
    question: "What will be the output of `len(\"Python\")`?",
    options: ["5", "6", "7"],
    name: "q19",
  },
  {
    question: "Which of the following is not a valid variable name in Python?",
    options: ["_myvar", "my_var", "2myvar"],
    name: "q20",
  },
];

const correctAnswers = {
  q1: "A programming language",
  q2: "Both Object-Oriented and Functional",
  q3: "Interpreted",
  q4: "All of the above",
  q5: "1991",
  q6: "Interpreted and Interactive",
  q7: ".py",
  q8: "It is case-sensitive",
  q9: "print(\"Hello, World!\")",
  q10: "define",
  q11: "Outputs text to the console",
  q12: "x = 10",
  q13: "14",
  q14: "input()",
  q15: "# This is a comment",
  q16: "3",
  q17: "array",
  q18: "def",
  q19: "6",
  q20: "2myvar",
};

const Introduction = () => {
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

  return (
    <>
      <Header title="Welcome, Dragon!" desc="Take A Breath And Start You Can Do It." />
      <div className="container mx-auto p-4 sm:p-8">
        <div className="bg-white shadow-lg rounded-lg p-6 sm:p-10 border-t-4 border-blue-500">
          <h1 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 text-center mb-6">
            1. INTRODUCTION TO PYTHON
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

export default Introduction;
