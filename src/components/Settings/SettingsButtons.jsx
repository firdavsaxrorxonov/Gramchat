import React from 'react';

const SettingsButtons = ({ onSave, onCancel }) => {
  return (
    <div className='flex bottom-16 items-center absolute gap-6 mt-4'>
      <button
        onClick={onSave}
        className='bg-[#293140] cursor-pointer px-9 py-1.5 w-[200px] rounded-md text-[#3587F3]'
      >
        Saqlash
      </button>
      <button
        onClick={onCancel}
        className='bg-[#293140] cursor-pointer px-9 py-1.5 w-[200px] rounded-md text-red-500'
      >
        Bekor qilish
      </button>
    </div>
  );
};

export default SettingsButtons;
