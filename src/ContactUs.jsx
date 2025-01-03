import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Clear error for the field being edited
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  // Validate form data
  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "الاسم مطلوب.";
    if (!formData.email.trim()) newErrors.email = "البريد الإلكتروني مطلوب.";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "الرجاء إدخال بريد إلكتروني صحيح.";
    if (!formData.message.trim()) newErrors.message = "الرسالة مطلوبة.";
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    console.log("Form Data Submitted:", formData);
    setSubmitted(true);

    // Reset form
    setFormData({ name: "", email: "", message: "" });

    // Simulate an API call or backend handling
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section className="bg-gray-200 py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">تواصل معنا</h2>
        <p className="mb-4">لأي استفسارات أو ملاحظات، لا تتردد في التواصل معنا.</p>
        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto bg-white p-6 rounded shadow"
        >
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block mb-2 font-bold text-gray-700"
            >
              الاسم:
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 ${
                errors.name ? "border-red-500 focus:ring-red-500" : "focus:ring-cyan-500"
              }`}
              placeholder="أدخل اسمك"
              value={formData.name}
              onChange={handleChange}
              aria-label="أدخل اسمك"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block mb-2 font-bold text-gray-700"
            >
              البريد الإلكتروني:
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 ${
                errors.email ? "border-red-500 focus:ring-red-500" : "focus:ring-cyan-500"
              }`}
              placeholder="أدخل بريدك الإلكتروني"
              value={formData.email}
              onChange={handleChange}
              aria-label="أدخل بريدك الإلكتروني"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          <div className="mb-4">
            <label
              htmlFor="message"
              className="block mb-2 font-bold text-gray-700"
            >
              رسالتك:
            </label>
            <textarea
              id="message"
              name="message"
              className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 ${
                errors.message ? "border-red-500 focus:ring-red-500" : "focus:ring-cyan-500"
              }`}
              rows="4"
              placeholder="اكتب رسالتك هنا"
              value={formData.message}
              onChange={handleChange}
              aria-label="اكتب رسالتك هنا"
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition duration-300 ease-in-out"
            disabled={submitted}
          >
            {submitted ? "تم الإرسال" : "إرسال"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
