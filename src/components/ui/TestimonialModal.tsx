import React from 'react';
import Modal from './Modal'; // Import the existing Modal component

interface TestimonialModalProps {
  isOpen: boolean;
  onClose: () => void;
  testimonial: {
    image: string;
    author: string;
    position: string;
    textPart1: string;
    textPart2: string;
  };
}

const TestimonialModal: React.FC<TestimonialModalProps> = ({ isOpen, onClose, testimonial }) => {
  if (!isOpen) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={testimonial.author}>
      <div className="flex items-center mb-6">
        <img 
          src={testimonial.image} 
          alt={testimonial.author} 
          className="w-24 h-24 rounded-full" // Larger image for modal
        />
        <h3 className="text-2xl font-semibold ml-4">{testimonial.author}</h3>
      </div>
      <p className="text-gray-600">{testimonial.textPart1}</p>
      <p className="text-gray-600">{testimonial.textPart2}</p>
    </Modal>
  );
};

export default TestimonialModal;
