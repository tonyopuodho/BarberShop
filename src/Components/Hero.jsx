import React, { useEffect, useState } from 'react'
import { FaShieldAlt } from 'react-icons/fa'
import { FaPenRuler } from 'react-icons/fa6'

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
      {/* text content */}
      <div className='relative z-20 flex items-center justify-center h-full'>
        <div className='max-w-7xl md:w-[80%] flex justify-between gap-5 px-2'>
          <div className='top-30 md:w-[50%] flex flex-col gap-5'>
            <h1 className='text-6xl md:text-7xl text-white font-extrabold'>We are professional care for your hair</h1>
            <p className='text-2xl text-white'>Good look guaranteed</p>
              <div className={`flex flex-col sm:flex-row gap-5`}>
                  <a href="#classes" className='group relative overflow-hidden rounded-full bg-red-600 px-8 py-4 text-white font-medium
                  text-lg inline-flex items-center justify-center transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg
                  '>
                      <span className='relative z-10'>Book session</span>
                      <div className='absolute inset-0 bg-gradient-to-r from-red-700 to-red-500
                      transform scale-x-0 group-hover:scale-100 transition-all duration-300 origin-left
                      '></div>
                  </a>
                  <a href="#classes" className='group relative overflow-hidden rounded-full border-2 px-8 py-4 text-white font-medium
                  text-lg inline-flex items-center justify-center transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg
                  '>
                      <span className='relative z-10'>Contact us</span>
                      <div className='absolute inset-0 bg-gradient-to-r from-red-700 to-red-500
                      transform scale-x-0 group-hover:scale-100 transition-all duration-300 origin-left
                      '></div>
                  </a>
                </div>
                 <div className='text-white font-bold text-md'> 1,000+ satisfied customers</div>
          </div>
          <div className='bg-black/40 backdrop-blur-md p-8 rounded-3xl border
          border-white/10 shadow-xl relative overflow-hidden hidden lg:block w-[45%]'>
            <h1 className='text-bold text-white text-2xl mb-2'>Why choose us?</h1>
            <div className='flex flex-col gap-6'>
              <div className='flex gap-2'>
                 
                <div className='flex flex-col'>
                  <h3 className='font-bold text-xl text-white'>Expert Barbers</h3>
                  <p className='text-white text-sm'>Our skilled professionals deliver precision cuts, modern styles, and personalized grooming tailored to your look.</p>
                </div>
              </div>
              <div className='flex gap-2'>
                <div className='flex flex-col'>
                  <h3 className='font-bold text-xl text-white'>Clean & Comfortable Environment</h3>
                  <p className='text-white text-sm'>We maintain top hygiene standards and provide a relaxing, welcoming atmosphere for every client.</p>
                </div>
              </div>
              <div className='flex gap-2'>
                <div className='flex flex-col'>
                  <h3 className='font-bold text-xl text-white'>Affordable & Reliable Service</h3>
                  <p className='text-white text-sm'>Enjoy high-quality haircuts at fair prices with consistent, dependable results every visit</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero