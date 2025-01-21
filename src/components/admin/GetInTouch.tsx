import React, { useState } from 'react';

const GetInTouch: React.FC = () => {
  const [contactInfo, setContactInfo] = useState({
    address: '',
    phone: '',
    email: '',
  });

  const [messages, setMessages] = useState<{ name: string; message: string }[]>([]);
  const [newMessage, setNewMessage] = useState({ name: '', message: '' });

  const handleChange = (field: keyof typeof contactInfo, value: string) => {
    setContactInfo({ ...contactInfo, [field]: value });
  };

  const handleMessageChange = (field: keyof typeof newMessage, value: string) => {
    setNewMessage({ ...newMessage, [field]: value });
  };

  const handleSubmitContactInfo = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic to handle submission (e.g., save contact info)
  };

  const handleSubmitMessage = (e: React.FormEvent) => {
    e.preventDefault();
    setMessages([...messages, newMessage]);
    setNewMessage({ name: '', message: '' }); // Reset the message input
  };

  return (
    <div>
      <h2>Get In Touch Section</h2>
      <form onSubmit={handleSubmitContactInfo}>
        <div>
          <label>Address:</label>
          <input
            type="text"
            value={contactInfo.address}
            onChange={(e) => handleChange('address', e.target.value)}
            required
          />
        </div>
        <div>
          <label>Phone:</label>
          <input
            type="text"
            value={contactInfo.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={contactInfo.email}
            onChange={(e) => handleChange('email', e.target.value)}
            required
          />
        </div>
        <button type="submit">Save Contact Info</button>
      </form>

      <h3>Messages</h3>
      <form onSubmit={handleSubmitMessage}>
        <input
          type="text"
          placeholder="Your Name"
          value={newMessage.name}
          onChange={(e) => handleMessageChange('name', e.target.value)}
          required
        />
        <textarea
          placeholder="Your Message"
          value={newMessage.message}
          onChange={(e) => handleMessageChange('message', e.target.value)}
          required
        />
        <button type="submit">Send Message</button>
      </form>

      <ul>
        {messages.map((msg, index) => (
          <li key={index}>
            <strong>{msg.name}</strong>: {msg.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GetInTouch;
