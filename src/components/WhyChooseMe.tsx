import React from 'react';
import { CheckCircle, Shield, Target, Award } from 'lucide-react';

const WhyChooseMe = () => {
  const reasons = [
    {
      icon: <Shield className="w-12 h-12 text-blue-600" />,
      title: "Trusted SEBI Registration",
      description: "Operating under strict regulatory compliance for your peace of mind.",
    },
    {
      icon: <Target className="w-12 h-12 text-blue-600" />,
      title: "Tailored Financial Solutions",
      description: "Customized strategies that align perfectly with your financial goals.",
    },
    {
      icon: <CheckCircle className="w-12 h-12 text-blue-600" />,
      title: "Transparent and Ethical",
      description: "Clear communication and honest advice with no hidden charges.",
    },
    {
      icon: <Award className="w-12 h-12 text-blue-600" />,
      title: "Proven Track Record",
      description: "Consistent performance and satisfied clients across years.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Why Choose Me</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience the difference of working with a dedicated financial professional.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg text-center hover:transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex justify-center mb-6">{reason.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMe;