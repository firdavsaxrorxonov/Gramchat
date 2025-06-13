import React from 'react'

function User() {
  return (
    <div className='mt-3 px-4 py-1 cursor-pointer hover:bg-[#343B4A] transition-all duration-150'>
      <div className='flex justify-between'>
        <div className='flex items-center gap-3.5'>
          <div className='w-14 h-14 flex items-center justify-center rounded-full bg-[#2B3342]'><span className='text-white text-2xl '>M</span></div>
          <h3 className='text-white text-2xl'>Muhammadali</h3>
        </div>
        <small className='mt-2 text-gray-400'>23:00</small>
      </div>
    </div>
  )
}

export default User