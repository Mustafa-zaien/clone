import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Basics from "./basics/Basics";
import DataAnalysis from "./dataAnalysis/DataAnalysis";
import Python from "./python/Python";
import StaticHeader from "./StaticHeader";
import StaticUpArrow from "./StaticUpArrow";
import Questions from "./python/Questions/Questions";
import StaticFooter from "./StaticFooter";
import Introduction from "./python/Questions/Introduction";
import DataTypes from "./python/Questions/DataTypes";

function App() {
  return (
    <>
      {/* Static Header for Navigation */}
      <StaticHeader />

      {/* Route Configuration */}
      <Routes>
        {/* Main Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/basics" element={<Basics />} />
        <Route path="/python" element={<Python />}/>
        <Route path="/python/questions" element={<Questions />} />
        <Route path="/python/questions/introduction" element={<Introduction />} />
        <Route path="/python/questions/data-types" element={<DataTypes />} />
        <Route path="/data-analysis" element={<DataAnalysis />} />
      </Routes>

      {/* Static Up Arrow for Scroll-to-Top */}
      <StaticUpArrow />
      <StaticFooter/>
    </>
  );
}

export default App;
