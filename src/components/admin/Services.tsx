import React, { useState } from 'react';

interface Service {
  heading: string;
  content: string;
}

const Services: React.FC = () => {
  const [services, setServices] = useState<Service[]>([{ heading: '', content: '' }]);

  const handleAddService = () => {
    setServices([...services, { heading: '', content: '' }]);
  };

  const handleChange = (index: number, field: keyof Service, value: string) => {
    const newServices = [...services];
    newServices[index][field] = value;
    setServices(newServices);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic to handle submission (e.g., save services)
  };

  return (
    <div>
      <h2>Services Section</h2>
      <form onSubmit={handleSubmit}>
        {services.map((service, index) => (
          <div key={index}>
            <input
              type="text"
              placeholder="Heading"
              value={service.heading}
              onChange={(e) => handleChange(index, 'heading', e.target.value)}
              required
            />
            <textarea
              placeholder="Content"
              value={service.content}
              onChange={(e) => handleChange(index, 'content', e.target.value)}
              required
            />
          </div>
        ))}
        <button type="button" onClick={handleAddService}>Add Service</button>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default Services;
