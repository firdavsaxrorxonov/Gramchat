import React from 'react';
import Settings from '../components/Settings';
import { motion, AnimatePresence } from 'framer-motion';
import { useOutletContext } from 'react-router-dom'; // 👈 kerakli hook

function Home() {
  // 🔽 showSettings va onCloseSettings'ni Outlet context'dan olamiz
  const { showSettings, onCloseSettings } = useOutletContext();

  return (
    <div className='bg-[#0E1621] flex items-center justify-center w-full min-h-screen relative overflow-hidden'>
      <AnimatePresence>
        {showSettings && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="z-[999]"
            >
              <Settings onClose={onCloseSettings} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <span className='text-white text-sm py-1.5 px-7 bg-[#1A222C] rounded-[50px]'>
        Kimga yozmoqchi ekanligingizni tanlang
      </span>
    </div>
  );
}

export default Home;
