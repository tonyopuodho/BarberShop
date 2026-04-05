import React from 'react'

function About() {
  return (
    <div className='bg-gray-100 w-full py-20'>
        <div className='max-w-7xl md:w-[80%] mx-auto px-2'>
            <h1 className='text-center text-gray-800 text-5xl font-extrabold'>About us</h1>
            <div className='flex md:flex-row flex-col justify-between gap-5 mt-8'>
                <div className='shadow-md rounded-lg  border-2 md:h-[80%] md:w-[50%]'>
                    <img src="src/assets/image5.jpg" className='rounded-md h-full w-full object-cover' alt="" />
                </div>
                <div className='md:w-[50%] w-full'>
                    <p className='text-gray-600 font-medium'>
                        Welcome to our barbershop where style meets precision and every cut tells a story. 
                        We are dedicated to delivering top-quality grooming services in a relaxed and welcoming environment. Whether you’re looking for a classic haircut, a modern fade, a clean shave, or a complete style transformation, 
                        our skilled barbers combine experience with attention to detail to give you the perfect look.
                    </p>
                    <p className='text-gray-600 mt-3 font-medium'>
                        At our shop, we believe grooming is more than just a service it’s an 
                        experience. From the moment you walk in, you’ll enjoy friendly service, a comfortable atmosphere, and personalized care tailored to your unique style. We use high-quality products and 
                        the latest techniques to ensure you leave looking sharp and feeling confident.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About