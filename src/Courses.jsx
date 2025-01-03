import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Courses = () => {
  const coursesData = [
    {
      title: "أساسيات البرمجة",
      desc: "تعلم مفاهيم البرمجة الأساسية باستخدام لغات حديثة.",
      href: "/basics",
    },
    {
      title: "بايثون",
      desc: "ابدأ من الصفر برمجة.",
      href: "/python",
    },
    {
      title: "تحليل البيانات",
      desc: "اكتسب مهارات تحليل البيانات واستخدامها لاتخاذ قرارات مستنيرة.",
      href: "/data-analysis",
    },
  ];

  return (
    <section className="bg-gray-200 py-20" id="courses">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-10">دوراتنا</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {coursesData.map((course, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold mb-2 text-teal-700">
                {course.title}
              </h3>
              <p className="mb-4 text-gray-700">{course.desc}</p>
              <Link to={course.href}>
                <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300 ease-in-out">
                  عرض المزيد
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
