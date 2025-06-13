import React from 'react';
import Sidebar from '../components/Sidebar';


const MainLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      {children}
    </div>
  );
};

export default MainLayout;
