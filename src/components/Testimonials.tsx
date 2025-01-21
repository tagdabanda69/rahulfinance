import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      textPart1: "I am incredibly grateful for the guidance and expertise provided by Wealthvate in helping me navigate my mutual fund and investment journey. From the very beginning, they have demonstrated exceptional knowledge and a genuine commitment to understanding my financial goals.",
      textPart2: "Rahul took the time to explain complex investment strategies in a way that was easy to understand, empowering me to make informed decisions. What truly sets Wealthvate apart is professionalism, transparency, and unwavering dedication to clients. I always felt confident knowing my investments were in capable hands.",
      author: "CA Nupur Gupta",
      position: "AVP- Macquarie",
      image: "https://varshney3-my.sharepoint.com/personal/abhilash_varshney3_onmicrosoft_com/_layouts/15/embed.aspx?UniqueId=d00c3e82-7f4c-4112-bef4-5ccf51a50d47"
    },
    {
      textPart1: "Rahul has been extremely helpful in managing my portfolio. He has in depth knowledge about financial planning and wealth management. He is approachable and provides personalized services including evaluation of one's requirements and financial goals, thereby customizing the solutions he provides.",
      textPart2: "Over a period of time, he has become a trusted partner in my journey towards financial freedom. I would highly recommend his services.",
      author: "CA Soulave Jajodia",
      position: "Senior Manager- RSM US",
      image: "https://varshney3-my.sharepoint.com/personal/abhilash_varshney3_onmicrosoft_com/_layouts/15/embed.aspx?UniqueId=8ad54a09-4b3a-4629-955f-b3021a8953b2"
    },
    {
      textPart1: "As a first-time investor, my experience with Wealthvate has been nothing short of exceptional and trustworthy. The timely and insightful advice provided by their team has been invaluable in building my confidence and understanding of the investment process. Their professional guidance has not only safeguarded my initial investments but has also helped shape my portfolio to align with my financial goals.",
      textPart2: " I am deeply grateful for their dedication and personalized support, which has made my journey as a new investor smooth and rewarding. I thank the Wealthvate team for their unwavering commitment to excellence and wish them continued success in empowering more investors like me.",
      author: "Ruchika Goel",
      position: "Manager-EY",
      image: "https://varshney3-my.sharepoint.com/personal/abhilash_varshney3_onmicrosoft_com/_layouts/15/embed.aspx?UniqueId=4792d9d0-cd5a-48c4-b477-eb5fc27a2c99"
    },
    {
      textPart1: "I want to express my sincere gratitude for the outstanding support and guidance Wealthvate team has given me me in my long-term financial planning journey. Rahul ‘s financial expertise, professionalism, and personalized approach has made a significant difference in helping me achieve my financial goals. ",
      textPart2: "The clarity and confidence I now have in my financial future is largely due to his dedication and strategic advice.",
      author: "Suraj Gola",
      position: "Sr. Corporate Manager- Maruti Nexa",
      image: "https://varshney3-my.sharepoint.com/personal/abhilash_varshney3_onmicrosoft_com/_layouts/15/embed.aspx?UniqueId=0f502671-4747-43b9-97c2-65aad1de3efc"
    },
    {
      textPart1: "I had a very nice experience Woking with rahul. His recommendations has always been a big win.  ",
      textPart2: " I would recommend you to please consult him before taking any financial decisions.",
      author: "Avantika Rahotgi",
      position: "Advocate- High Court",
      image: "https://varshney3-my.sharepoint.com/personal/abhilash_varshney3_onmicrosoft_com/_layouts/15/embed.aspx?UniqueId=7938d08f-a2a0-4438-9f79-afa57e8b97be"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="testimonials" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Client Testimonials</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear what our clients have to say.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto px-12">
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow-lg hover:bg-gray-100"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <div className="bg-white rounded-xl shadow-xl p-8 md:p-12">
            <Quote className="w-12 h-12 text-blue-600 mb-6" />
            <p className="text-xl text-gray-600 mb-4">
              {testimonials[currentIndex].textPart1}
            </p>
            <p className="text-xl text-gray-600 mb-8">
              {testimonials[currentIndex].textPart2}
            </p>
            <div className="flex items-center">
              <iframe 
                src={testimonials[currentIndex].image} 
                width="50" 
                height="50" 
                style={{ borderRadius: '50%', pointerEvents: 'none' }} 
                sandbox="allow-same-origin allow-scripts"
              ></iframe>
              <div>
                <h4 className="font-semibold">{testimonials[currentIndex].author}</h4>
                <p className="text-gray-500">{testimonials[currentIndex].position}</p>
              </div>
            </div>
          </div>

          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow-lg hover:bg-gray-100"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;