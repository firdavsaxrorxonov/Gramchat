import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  const [showSettings, setShowSettings] = useState(false);

  return (
    <div className="flex min-h-screen relative">
      <Sidebar onToggleSettings={() => setShowSettings(!showSettings)} />
      <div className="w-full">
        <Outlet context={{ showSettings, onCloseSettings: () => setShowSettings(false) }} />
      </div>
    </div>
  );
};

export default MainLayout;
