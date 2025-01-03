import React from 'react'

const Header = ({title,desc}) => {
  return (
    <header className="bg-gradient-to-r from-cyan-500 to-cyan-800 py-10 text-center shadow-md relative">
      <h1 className="py-2 text-4xl sm:text-5xl font-bold text-white" style={{ fontFamily: "Cursive" }}>
        {title}
      </h1>
      <p className="text-white py-2 text-lg mt-2 font-light" style={{ fontFamily: "Cursive" }}>
        {desc}
      </p>
    <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-cyan-600 to-teal-900 shadow-lg"></div>
  </header>
  )
}

export default Header