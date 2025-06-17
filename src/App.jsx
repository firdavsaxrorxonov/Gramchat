import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
// Pages import
import Home from './pages/Home';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';


const App = () => {
  return (
    <div className='bg-[#1E2636]'>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/" element={<MainLayout />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
