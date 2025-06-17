import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Home from '../pages/Home';

const MainLayout = () => {
  const [showSettings, setShowSettings] = useState(false);

  return (
    <div className="flex min-h-screen relative">
      <Sidebar onToggleSettings={() => setShowSettings(!showSettings)} />
      <div className="w-full">
        <Home
          showSettings={showSettings}
          onCloseSettings={() => setShowSettings(false)}
        />
      </div>
    </div>
  );
};

export default MainLayout;
