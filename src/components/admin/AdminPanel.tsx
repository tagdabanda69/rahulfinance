import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutMe from './AboutMe';
import Services from './Services';
import Testimonials from './Testimonials';
import Resources from './Resources';
import GetInTouch from './GetInTouch';
import PasswordReset from '../auth/PasswordReset'; // Import the PasswordReset component

const AdminPanel: React.FC = () => {
  return (
    <Router>
      <div>
        <h1>Admin Panel</h1>
        <Routes>
          <Route path="/about" element={<AboutMe />} />
          <Route path="/services" element={<Services />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/get-in-touch" element={<GetInTouch />} />
          <Route path="/reset-password" element={<PasswordReset />} /> {/* New route for password reset */}
        </Routes>
      </div>
    </Router>
  );
};

export default AdminPanel;
