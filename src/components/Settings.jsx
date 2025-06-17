import React, { useState, useEffect } from 'react';
import AvatarPreview from './Settings/AvatarPreview';
import SettingsInput from './Settings/SettingsInput';
import SettingsButtons from './Settings/SettingsButtons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IoClose } from "react-icons/io5";
function Settings({ onClose }) {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [image, setImage] = useState(null);
  const [originalName, setOriginalName] = useState('');
  const [originalPassword, setOriginalPassword] = useState('');
  const [originalImage, setOriginalImage] = useState(null);
  const [randomBg, setRandomBg] = useState('#FF5100');
  const [imageError, setImageError] = useState(false);
  useEffect(() => {
    const savedName = localStorage.getItem('settings_name') || 'Firdavs Axrorxonov';
    const savedPassword = localStorage.getItem('settings_password') || 'firdavsxon50';
    const savedImage = localStorage.getItem('settings_image');
    const savedBg = localStorage.getItem('settings_bg');
    setName(savedName);
    setPassword(savedPassword);
    setImage(savedImage);
    setOriginalName(savedName);
    setOriginalPassword(savedPassword);
    setOriginalImage(savedImage);
    if (savedBg) {
      setRandomBg(savedBg);
    } else {
      const colors = ['#FF5100', '#3B82F6', '#10B981', '#8B5CF6', '#F59E0B', '#EF4444'];
      const color = colors[Math.floor(Math.random() * colors.length)];
      setRandomBg(color);
      localStorage.setItem('settings_bg', color);
    }
  }, []);
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImage(url);
      setImageError(false);
    }
  };
  const handleSave = () => {
    const hasChanges = name !== originalName || password !== originalPassword || image !== originalImage;
    if (!hasChanges) return;
    localStorage.setItem('settings_name', name);
    localStorage.setItem('settings_password', password);
    localStorage.setItem('settings_image', image);
    setOriginalName(name);
    setOriginalPassword(password);
    setOriginalImage(image);
    toast.success('Maʼlumotlar saqlandi!', { position: "bottom-center", autoClose: 1500 });
  };
  const handleCancel = () => {
    const hasChanges = name !== originalName || password !== originalPassword || image !== originalImage;
    if (!hasChanges) return;
    setName(originalName);
    setPassword(originalPassword);
    setImage(originalImage);
    setImageError(false);
    toast.info('Oʻzgarishlar bekor qilindi!', { position: "bottom-center", autoClose: 1500 });
  };
  return (
    <div className='shadow-2xl w-[500px] h-[500px] bg-[#1E2636] rounded-2xl relative'>
      <IoClose
        className='text-2xl absolute top-3 right-3 cursor-pointer z-10 text-white hover:text-red-400'
        onClick={onClose}
      />
      <div className='p-4 py-10 h-full flex gap-10 items-center flex-col'>
        <AvatarPreview
          name={name}
          image={image}
          randomBg={randomBg}
          onImageChange={handleImageChange}
          imageError={imageError}
          setImageError={setImageError}
        />
        <div className='w-full flex flex-col gap-5'>
          <SettingsInput label="Ism" type="text" value={name} onChange={setName} />
          <SettingsInput label="Parol" type="password" value={password} onChange={setPassword} />
        </div>
        <SettingsButtons onSave={handleSave} onCancel={handleCancel} />
      </div>
      <ToastContainer />
    </div>
  );
}

export default Settings;
