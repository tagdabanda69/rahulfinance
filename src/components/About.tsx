import React from 'react';
import { Award, BookOpen } from 'lucide-react';

const About = () => {
  const achievements = [
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: "SEBI Registered",
      description: "Licensed Investment Advisor"
    },
    {
      icon: <BookOpen className="w-8 h-8 text-blue-600" />,
      title: "10+ Years Experience",
      description: "In Financial Markets"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-w-4 aspect-h-5 rounded-lg overflow-hidden">
              <div className="flex justify-center">
                <iframe 
                  src="https://varshney3-my.sharepoint.com/personal/abhilash_varshney3_onmicrosoft_com/_layouts/15/embed.aspx?UniqueId=f32db1de-6f24-4629-9c33-0a13f861e82b"
                  width="480" // Set a specific width
                  height="510" // Set a specific height
                  style={{ pointerEvents: 'none' }} // Disable interaction
                  sandbox="allow-same-origin allow-scripts" // Restrict actions
                ></iframe>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <p className="text-gray-600 mb-8">
              Meet CA Rahul Agarwal, the driving force behind Wealthvate success in the realm of wealth management. Rahul is a Chartered Accountant (CA) and Company Secretary (CS) by profession. He has also completed his graduation and post graduation in Commerce. Rahul has more than 10 years of experience in the field of Audit, Corporate Finance, Risk Management, Financial Analysis and Consulting. He has worked with MNC’s such as KPMG, EY, American Express and Reliance Jio at a Senior Manager level. Rahul is an active stock market investor and AMFI Registered Mutual Fund Advisor. He is currently working on bringing unbiased financial literacy to maximum people through Wealthvate.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    {achievement.icon}
                  </div>
                  <h3 className="font-semibold mb-2">{achievement.title}</h3>
                  <p className="text-sm text-gray-500">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
