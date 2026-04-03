import React, { useEffect, useState } from 'react'

function Hero() {
  const backgroundImages = ["src/assets/image1.jpg",
   "src/assets/image2.jpg","src/assets/image3.jpg","src/assets/image4.jpg",
   "src/assets/image5.jpg"
  ]
  const [imageIndex,setImageIndex] = useState(0)
  useEffect(() => {
        const interval = setInterval(() => {
            setImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length)
        },7000)
        return () => {
            clearInterval(interval)
        }
    },[backgroundImages.length])
  return (
    <div className='relative h-screen overflow-hidden md:h-[100vh]' id='home'>
      {/* background image slider with overly */}
      <div className='absolute inset-0 z-0'>
        {/* background opacity */}
        <div className='absolute inset-0 bg-gradient-to-br from-black/80 via-black-70 to-black/40 z-3'></div>
        {/* background image slider */}
        {
          backgroundImages.map((item,index) => (
            <div key={index} className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-2000 ${index === imageIndex ? 'opacity-100 scale-105' : 'opacity-0 scale-100'}`}
                    style={{backgroundImage:`url(${item})`}}
            ></div>
          ))
        }
      </div>
    </div>
  )
}

export default Hero