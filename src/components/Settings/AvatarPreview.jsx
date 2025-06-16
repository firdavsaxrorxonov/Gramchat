import React from 'react';
import { TbPhotoEdit } from "react-icons/tb";

const AvatarPreview = ({ name, image, randomBg, onImageChange, imageError, setImageError }) => {
  return (
    <div className='flex flex-col items-center gap-4'>
      <div className='relative w-20 h-20'>
        {image && !imageError ? (
          <img
            src={image}
            alt="Profile"
            onError={() => {
              setImageError(true);
            }}
            className='w-full h-full object-cover rounded-full border-2 border-white'
          />
        ) : (
          <div
            className='w-full h-full rounded-full flex items-center justify-center text-white text-2xl font-semibold border-2 border-white'
            style={{ backgroundColor: randomBg }}
          >
            {name.charAt(0).toUpperCase()}
          </div>
        )}

        <label
          htmlFor="photo-upload"
          className='absolute z-20 cursor-pointer -bottom-2 -right-1 text-xl rounded-full bg-[#0E1621] p-1.5 text-white'
        >
          <TbPhotoEdit />
        </label>
        <input
          type="file"
          id="photo-upload"
          accept="image/*"
          className="hidden"
          onChange={onImageChange}
        />
      </div>
      <h2 className='text-2xl text-center text-white'>{name}</h2>
    </div>
  );
};

export default AvatarPreview;
