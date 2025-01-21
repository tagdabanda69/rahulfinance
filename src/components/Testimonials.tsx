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
      textPart1: "I am incredibly grateful for the guidance and expertise provided by Wealthvate in helping me navigate my mutual fund and investment journey.",
      textPart2: "Rahul took the time to explain complex investment strategies in a way that was easy to understand.",
      author: "CA Nupur Gupta",
      position: "AVP- Macquarie",
      image: client1,
      fullContent: "I am incredibly grateful for the guidance and expertise provided by Wealthvate in helping me navigate my mutual fund and investment journey."
    },
    // ... other testimonials
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
              {testimonials[currentIndex].textPart1.split(' ').slice(0, 18).join(' ')}
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
