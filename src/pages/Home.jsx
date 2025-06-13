
import React, { useState } from 'react'

function Home() {
  const [choiseText, setChoiseText] = useState(true)



  return (
    <div className='bg-[#0E1621] flex items-center justify-center w-full min-h-screen'>
      {choiseText &&
        <span className='text-white text-sm py-1.5 px-7 bg-[#1A222C] rounded-[50px]'>Kimga yozmoqchi ekanligingizni tanlang</span>
      }


    </div>
  )
}

export default Home