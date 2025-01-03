import React from "react";

const Testimonials = () => {
  const testimonialsData = [
    {
      name: "منة",
      text: '"تعلم اليوم غير حياتي تماماً. كانت الدورات ممتعة ومفيدة للغاية."',
    },
    {
      name: "فاطمة",
      text: '"الدورات التفاعلية جعلت التعلم أسهل بكثير مما توقعت."',
    },
  ];

  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-4 text-center">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-cyan-600 mb-12">
          ماذا يقول طلابنا؟
        </h2>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
              {/* Testimonial Text */}
              <p className="text-gray-600 italic mb-6">"{testimonial.text}"</p>
              {/* Testimonial Name */}
              <p className="text-cyan-600 font-bold text-lg">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
