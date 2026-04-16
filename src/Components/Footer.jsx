import React from 'react'
import { FaCopyright, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

function Footer() {
  return (
     <div className='py-20 bg-gray-900 text-white'>
        <div className='max-w-7xl px-4 md:px-6 lg:px-8 mx-auto lg:w-[80%] w-full'>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-2'>
                <div className='flex flex-col gap-2'>
                    <h1 className='text-red-600 text-lg font-bold'>BARBERSHOP</h1>
                    <p className='text-gray-600 mt-2'>
                        professional care for your hair
                    </p>
                    <div className='flex gap-2 items-center text-gray-600'>
                        <FaFacebook/>
                        <FaTwitter/>
                        <FaInstagram/>
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <h1 className='text-white text-lg font-bold'>Quick Links</h1>
                   <ul className='text-gray-600 gap-2'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                   </ul>                    
                </div>
                <div className='flex flex-col gap-2'>
                    <h1 className='text-white text-lg font-bold'>Working Hours</h1>
                   <ul className='text-gray-600 gap-2'>
                    <li>Monday - Friday: 5:00AM - 11:00PM</li>
                    <li>Saturday: 6:00AM - 10:00PM</li>
                    <li>Sunday: 7:00AM - 9:00PM</li>
                    <li>Holidays: 8:00AM - 8:00PM</li>                   
                   </ul> 
                   <button className='py-2 px-4 bg-red-600 text-white font-bold rounded'>Book a session</button>                   
                </div>
                <div className='flex flex-col gap-2'>
                    <h1 className='text-white text-lg font-bold'>Newsletter</h1>
                   <p className='text-sm text-gray-600'>Subscribe to our newsletter for fitness tips, special offers, and updates.</p>
                   <input type="text" placeholder='Your email' className='border-2 p-1 border-gray-500 rounded'/>                   
                   <button className='py-2 px-4 bg-red-600 rounded'>Subscribe</button>
                </div>
            </div>
            <div className='mt-6 border-t border-gray-800 text-center'>
                
              <span className='flex items-center justify-center gap-2 text-gray-500 pt-10'>
                <FaCopyright/>
                  <p className='text-gray-600 text-sm items-center'>
                    {new Date().getFullYear()} FITELITE fitness center. All right reserved
                </p>
              </span>
            </div>
        </div>
    </div>
  )
}

export default Footer