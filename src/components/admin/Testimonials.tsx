import React, { useState } from 'react';

interface Testimonial {
  name: string;
  message: string;
  picture: File | null;
}

const Testimonials: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([{ name: '', message: '', picture: null }]);

  const handleAddTestimonial = () => {
    setTestimonials([...testimonials, { name: '', message: '', picture: null }]);
  };

  const handleChange = (index: number, field: keyof Testimonial, value: string | File | null) => {
    const newTestimonials = [...testimonials];
    if (field === 'picture') {
      newTestimonials[index][field] = value as File; // Ensure value is treated as File
    } else {
      newTestimonials[index][field] = value as string; // Ensure value is treated as string
    }
    setTestimonials(newTestimonials);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic to handle submission (e.g., save testimonials)
  };

  return (
    <div>
      <h2>Client Testimonials</h2>
      <form onSubmit={handleSubmit}>
        {testimonials.map((testimonial, index) => (
          <div key={index}>
            <input
              type="text"
              placeholder="Name"
              value={testimonial.name}
              onChange={(e) => handleChange(index, 'name', e.target.value)}
              required
            />
            <textarea
              placeholder="Message"
              value={testimonial.message}
              onChange={(e) => handleChange(index, 'message', e.target.value)}
              required
            />
            <input
              type="file"
              onChange={(e) => handleChange(index, 'picture', e.target.files?.[0] || null)}
              required
            />
          </div>
        ))}
        <button type="button" onClick={handleAddTestimonial}>Add Testimonial</button>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default Testimonials;
