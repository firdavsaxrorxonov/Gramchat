import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layout/MainLayout';

const App = () => {
  return (
    <div className='bg-[#1E2636]'>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
