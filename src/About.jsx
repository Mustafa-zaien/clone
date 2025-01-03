import React from 'react'

const About = () => {
  return (
    <section className="container mx-auto px-4 py-20 text-center">
    <h2 className="text-3xl font-bold mb-6">عن تعلم اليوم</h2>
    <p className="mb-4">
      "تعلم اليوم" هو مكانك المثالي للتعلم عبر الإنترنت. نقدم مجموعة متنوعة من الدورات التفاعلية
      التي تتيح لك اكتساب المهارات التي تحتاجها للنجاح في حياتك الشخصية والمهنية.
    </p>
    <ul className="list-disc list-inside">
      <li>دروس تفاعلية مصممة بعناية</li>
      <li>محتوى مناسب لجميع المستويات</li>
      <li>إمكانية الوصول من أي مكان وفي أي وقت</li>
    </ul>
  </section>
  )
}

export default About