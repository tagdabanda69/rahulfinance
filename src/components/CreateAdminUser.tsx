import React, { useState } from 'react';
import { useAuthStore } from '../stores/authStore';

const CreateAdminUser = () => {
  const createAdminUser = useAuthStore((state) => state.createAdminUser);
  
  // State for email and password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleCreateAdmin = async () => {
    try {
      await createAdminUser(email, password);
      alert('Admin user created successfully!');
    } catch (error: unknown) {
      alert(`Error creating admin user: ${(error as Error).message}`);
    }
  };

  return (
    <div className="mt-4">
      <input
        type="email"
        placeholder="Admin Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 rounded mr-2"
      />
      <input
        type="password"
        placeholder="Admin Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 rounded mr-2"
      />
      <button onClick={handleCreateAdmin} className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
        Create Admin User
      </button>
    </div>
  );
};

export default CreateAdminUser;