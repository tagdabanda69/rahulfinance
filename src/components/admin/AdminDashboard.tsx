import React from 'react';
import { useAuthStore } from '../../stores/authStore';
import TestimonialManager from './TestimonialManager';
import BlogManager from './BlogManager';

const AdminDashboard = () => {
  const isAdmin = useAuthStore((state) => state.isAdmin);

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Access Denied</h2>
          <p className="mt-2 text-gray-600">You need admin privileges to access this page.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
        
        <div className="space-y-8">
          <TestimonialManager />
          <BlogManager />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;