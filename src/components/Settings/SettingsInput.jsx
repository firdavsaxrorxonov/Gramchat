import React from 'react';

const SettingsInput = ({ label, type, value, onChange }) => {
  return (
    <div className='flex border-b border-[#414141] pb-0.5 px-1 items-center justify-between'>
      <label className='text-white'>{label}</label>
      <input
        className='outline-0 text-[#3587F3] text-right bg-transparent'
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default SettingsInput;
