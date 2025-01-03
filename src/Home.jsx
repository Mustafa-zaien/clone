import React, { Suspense } from "react";
import baGround from "./assets/bgCover.jpg"; // Optimized .webp image format

// Lazy-loaded components
const About = React.lazy(() => import("./About"));
const Courses = React.lazy(() => import("./Courses"));
const Testimonials = React.lazy(() => import("./Testimonials"));
const ContactUs = React.lazy(() => import("./ContactUs"));

const Home = () => {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section
        className="relative text-white bg-cover bg-center"
        style={{ backgroundImage: `url(${baGround})` }}
      >
        {/* Shadow Effect */}
        <div className="absolute inset-0 bg-black bg-opacity-50 shadow-lg"></div>

        {/* Content */}
        <div className="relative container mx-auto px-4 py-20 text-center max-w-screen-lg">
          <h1
            className="text-4xl font-bold mb-4"
            style={{ fontFamily: "Comic Sans MS, cursive, sans-serif" }}
          >
            مرحباً بك في تعلم اليوم
          </h1>
          <p className="text-lg mb-8">
            منصة التعليم التي تناسب جميع الأعمار والمستويات، اكتشف شغفك وتعلم
            شيئاً جديداً كل يوم
          </p>
          <a href="#courses" aria-label="Explore courses">
            <button className="bg-gradient-to-r from-cyan-500 to-cyan-700 px-6 py-3 text-white font-bold rounded shadow-lg hover:from-cyan-600 hover:to-cyan-800 transition duration-300 ease-in-out transform hover:scale-105">
              استكشف الدورات
            </button>
          </a>
        </div>
      </section>

      {/* Lazy-loaded Sections */}
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-cyan-500 border-dashed rounded-full animate-spin mx-auto"></div>
            <p className="mt-4 text-cyan-500 font-bold text-lg">
              جاري التحميل...
            </p>
          </div>
        </div>
      }
    >
      <About />
      <Courses />
      <Testimonials />
      <ContactUs />
    </Suspense>
    </div>
  );
};

export default Home;
