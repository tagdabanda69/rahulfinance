import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import client1 from '../assets/client1.jpg'; // Import client images
import client2 from '../assets/client2.jpg';
import client3 from '../assets/client3.jpg';
import client4 from '../assets/client4.jpg';
import client5 from '../assets/client5.jpg';
import TestimonialModal from './ui/TestimonialModal'; // Import the new modal component

const Testimonials = () => {
  const testimonials = [
    {
      textPart1: "I am incredibly grateful for the guidance and expertise provided by Wealthvate in helping me navigate my mutual fund and investment journey. From the very beginning, they have demonstrated exceptional knowledge and a genuine commitment to understanding my financial goals.",
      textPart2: "Rahul took the time to explain complex investment strategies in a way that was easy to understand, empowering me to make informed decisions. What truly sets Wealthvate apart is professionalism, transparency, and unwavering dedication to clients. I always felt confident knowing my investments were in capable hands.",
      author: "CA Nupur Gupta",
      position: "AVP- Macquarie",
      image: client1,
      fullContent: "I am incredibly grateful for the guidance and expertise provided by Wealthvate in helping me navigate my mutual fund and investment journey. From the very beginning, they have demonstrated exceptional knowledge and a genuine commitment to understanding my financial goals."
    },
    {
      textPart1: "Rahul has been extremely helpful in managing my portfolio. He has in depth knowledge about financial planning and wealth management. He is approachable and provides personalized services including evaluation of one's requirements and financial goals, thereby customizing the solutions he provides.",
      textPart2: "Over a period of time, he has become a trusted partner in my journey towards financial freedom. I would highly recommend his services.",
      author: "CA Soulave Jajodia",
      position: "Senior Manager- RSM US",
      image: client2,
      fullContent: "Rahul has been extremely helpful in managing my portfolio. He has in depth knowledge about financial planning and wealth management. He is approachable and provides personalized services including evaluation of one's requirements and financial goals, thereby customizing the solutions he provides. Over a period of time, he has become a trusted partner in my journey towards financial freedom. I would highly recommend his services."
    },
    {
      textPart1: "As a first-time investor, my experience with Wealthvate has been nothing short of exceptional and trustworthy. The timely and insightful advice provided by their team has been invaluable in building my confidence and understanding of the investment process. Their professional guidance has not only safeguarded my initial investments but has also helped shape my portfolio to align with my financial goals.",
      textPart2: "I am deeply grateful for their dedication and personalized support, which has made my journey as a new investor smooth and rewarding. I thank the Wealthvate team for their unwavering commitment to excellence and wish them continued success in empowering more investors like me.",
      author: "Ruchika Goel",
      position: "Manager-EY",
      image: client3,
      fullContent: "As a first-time investor, my experience with Wealthvate has been nothing short of exceptional and trustworthy. The timely and insightful advice provided by their team has been invaluable in building my confidence and understanding of the investment process. Their professional guidance has not only safeguarded my initial investments but has also helped shape my portfolio to align with my financial goals. I am deeply grateful for their dedication and personalized support, which has made my journey as a new investor smooth and rewarding. I thank the Wealthvate team for their unwavering commitment to excellence and wish them continued success in empowering more investors like me."
    },
    {
      textPart1: "I want to express my sincere gratitude for the outstanding support and guidance Wealthvate team has given me in my long-term financial planning journey. Rahul’s financial expertise, professionalism, and personalized approach has made a significant difference in helping me achieve my financial goals.",
      textPart2: "The clarity and confidence I now have in my financial future is largely due to his dedication and strategic advice.",
      author: "Suraj Gola",
      position: "Sr. Corporate Manager- Maruti Nexa",
      image: client4,
      fullContent: "I want to express my sincere gratitude for the outstanding support and guidance Wealthvate team has given me in my long-term financial planning journey. Rahul’s financial expertise, professionalism, and personalized approach has made a significant difference in helping me achieve my financial goals. The clarity and confidence I now have in my financial future is largely due to his dedication and strategic advice."
    },
    {
      textPart1: "I had a very nice experience working with Rahul. His recommendations have always been a big win.",
      textPart2: "I would recommend you to please consult him before taking any financial decisions.",
      author: "Avantika Rahotgi",
      position: "Advocate- High Court",
      image: client5,
      fullContent: "I had a very nice experience working with Rahul. His recommendations have always been a big win."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedTestimonial, setSelectedTestimonial] = useState<any>(null);

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

  const openModal = (testimonial: any) => {
    setSelectedTestimonial(testimonial);
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
              {window.innerWidth < 768 ? testimonials[currentIndex].fullContent.split('.')[0] : testimonials[currentIndex].textPart1}
            </p>
            <p className="text-xl text-gray-600 mb-8">
              {window.innerWidth < 768 ? testimonials[currentIndex].fullContent.split('.')[1] : testimonials[currentIndex].textPart2}
            </p>
            <div className="flex items-center">
              <img 
                src={testimonials[currentIndex].image} 
                alt={testimonials[currentIndex].author} 
                className="w-12 h-12 rounded-full" // Use appropriate classes for responsiveness
              />
              <div>
                <h4 className="font-semibold">{testimonials[currentIndex].author}</h4>
                <p className="text-gray-500">{testimonials[currentIndex].position}</p>
              </div>
            </div>
            {window.innerWidth < 768 && (
              <button 
                onClick={() => openModal(testimonials[currentIndex])}
                className="text-blue-600 hover:text-blue-700 mt-4"
              >
                Show More
              </button>
            )}
          </div>

          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow-lg hover:bg-gray-100"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>

      {selectedTestimonial && (
        <TestimonialModal
          isOpen={true}
          onClose={() => setSelectedTestimonial(null)}
          testimonial={selectedTestimonial}
        />
      )}
    </section>
  );
};

export default Testimonials;
