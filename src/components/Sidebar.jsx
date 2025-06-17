import React, { useEffect, useState } from 'react';
import { HiMenu } from "react-icons/hi";
import { LiaSearchSolid } from "react-icons/lia";
import { IoSettingsSharp } from "react-icons/io5";
import { FaBookmark } from "react-icons/fa6";
import { CgDarkMode } from "react-icons/cg";
import { IoLogOutOutline } from "react-icons/io5";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { Link } from 'react-router-dom';
import User from './User';
import ToggleSwitch from './ToggleSwitch';

function Sidebar({ onToggleSettings }) {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedMode = localStorage.getItem('darkMode');
    if (storedMode) {
      setDarkMode(storedMode === 'true');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box
      sx={{
        width: 350,
        background: '#1E2636',
        minHeight: '100dvh',
        padding: '17px',
        position: 'relative',
      }}
      role="presentation"
    >
      <div className='flex flex-col gap-4'>
        <div className='flex items-center justify-center w-16 h-16 bg-[#FF5100] rounded-full text-4xl text-white'>
          <span>F</span>
        </div>
        <h2 className='text-xl text-white'>Firdavs Axrorxonov</h2>
      </div>

      <div className='absolute left-0 h-[0.1px] w-full bg-[#414141] mt-2.5'></div>

      <div className='mt-5 flex flex-col gap-4'>
        <Link
          className='text-white text-lg flex items-center gap-2.5'
          to=""
          onClick={() => {
            onToggleSettings();
            setOpen(false);
          }}
        >
          <IoSettingsSharp /> Sozlamalar
        </Link>

        <Link
          className='text-white text-lg flex items-center gap-2.5'
          to=""
          onClick={toggleDrawer(false)}
        >
          <FaBookmark /> Saqlangan habarlar
        </Link>

        <div className='flex items-center justify-between cursor-pointer'>
          <div
            onClick={() => setDarkMode(!darkMode)}
            className='text-white text-lg flex items-center gap-2.5'
          >
            <CgDarkMode /> Tun/Kun
          </div>
          <ToggleSwitch enabled={darkMode} setEnabled={setDarkMode} />
        </div>

        <Link
          className='text-red-500 text-lg flex items-center gap-2.5'
          to=""
          onClick={toggleDrawer(false)}
        >
          <IoLogOutOutline className='text-2xl' /> Chiqish
        </Link>
      </div>
    </Box>
  );

  return (
    <div className='max-w-[480px] w-full min-h-screen'>
      <div className='flex items-center gap-8 p-4'>
        <HiMenu
          className='text-2xl text-white cursor-pointer'
          onClick={toggleDrawer(true)}
        />

        <div className='w-full relative flex items-center'>
          <input
            type="text"
            placeholder='Izlash...'
            className='text-white outline-0 border-[#999CA4] bg-[#2B3342] px-3 py-2 w-full rounded-3xl'
          />
          <LiaSearchSolid className='absolute right-3.5 text-white' />
        </div>
      </div>

      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>

      <User />
      <User />
      <User />
    </div>
  );
}

export default Sidebar;
