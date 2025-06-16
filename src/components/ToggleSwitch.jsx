import React from 'react';

const ToggleSwitch = ({ enabled, setEnabled }) => {
  return (
    <div
      onClick={() => setEnabled(!enabled)}
      className={`w-[60px] h-[24px] rounded-full p-1 cursor-pointer flex items-center transition-colors duration-300 ${enabled ? 'bg-[#0f1623]' : 'bg-[#1a1f2c]'
        }`}
    >
      <div
        className={`w-[22px] h-[22px] bg-[#d4d4d4] rounded-full transition-transform duration-300 ${enabled ? 'translate-x-[33px]' : '-translate-x-[3px]'
          }`}
      />
    </div>
  );
};

export default ToggleSwitch;
