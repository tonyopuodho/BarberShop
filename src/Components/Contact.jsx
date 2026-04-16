import React from 'react'
import { FaCheck, FaEnvelope, FaFacebook, FaPhone, FaTwitch, FaTwitter, FaYoutube } from 'react-icons/fa'
import { FaLocationPinLock } from 'react-icons/fa6'

function Contact() {
  return (
     <div id='contact' className='py-24 bg-white'>
        <div className='max-w-7xl px-4 md:px-6 lg:px-8 lg:w-[80%] mx-auto w-full'>
            <div className='text-center mb-6'>
                <h1 className='text-3xl md:text-4xl text-gray-900 font-bold'>Contact Us</h1>
                <p className='text-gray-600 text-sm mt-2'>Have a question or want to learn more? Reach out our team</p>
            </div>
            <div className='grid grid-col-1 md:grid-cols-2 gap-6'>
                <div className='p-8 bg-gray-100 rounded-md shadow-sm  w-full'>
                    <div className='flex flex-col space-y-4'>
                        <h1 className='text-gray-900 font-bold mb-2'>Get in Touch</h1>
                        <div className='flex gap-2 items-center'>
                            
                            <div className='flex justify-center items-center h-10 w-10 rounded-full bg-red-400'>
                            <FaLocationPinLock/> 
                            </div>
                            <p>Address</p>
                        </div>
                         <div className='flex gap-2 items-center'>
                           
                            <div className='flex justify-center items-center h-10 w-10 rounded-full bg-red-400'>
                                <FaPhone/> 
                            </div>
                            <p>Phone</p>
                        </div>
                         <div className='flex gap-2 items-center'>
                            
                             <div className='flex justify-center items-center h-10 w-10 rounded-full bg-red-400'>
                              <FaEnvelope/>   
                            </div>
                             
                            <p>Email</p>
                        </div>
                        <h1 className='text-gray-900 font-bold mb-2 mt-2'>Follow Us</h1>
                        <div className='flex gap-2'>
                            <FaYoutube/>
                            <FaFacebook/>
                            <FaTwitter/>
                        </div>
                    </div>
                </div>
                 <div className='p-8 bg-gray-200 shadow-md rounded-md w-full'>
                    <div className='w-full p-2 border-2 border-green-400 bg-green-200'>
                        <div className='flex items-center gap-2'>
                            <FaCheck className='text-green-500'/>
                            <p className='text-xs text-green-500'>Thankyou for your message we'll get back to you soon</p>
                        </div>                      
                    </div>
                      <form action="">
                            <div className='flex gap-3'>
                                <div className='flex flex-col mt-1 w-full'>
                                    <label htmlFor="" className='text-sm text-gray-600 mb-1'>Your name</label>
                                    <input type="text" className='w-full p-1 outline-none border-2 rounded-sm'/>
                                </div>
                                <div className='flex flex-col mt-1 w-full'>
                                    <label htmlFor="" className='text-sm text-gray-600 mb-1'>Your Email</label>
                                    <input type="text" className='w-full p-1 outline-none border-2 rounded-sm'/>
                                </div>
                            </div>
                           <div className='flex gap-3'>
                                <div className='flex flex-col mt-1 w-full'>
                                    <label htmlFor="" className='text-sm text-gray-600 mb-1'>Phone number</label>
                                    <input type="text" className='w-full p-1 outline-none border-2 rounded-sm'/>
                                </div>
                                <div className='flex flex-col mt-1 w-full'>
                                    <label htmlFor="" className='text-sm text-gray-600 mb-1'>Subject</label>
                                    <input type="text" className='w-full p-1 outline-none border-2 rounded-sm'/>
                                </div>
                            </div>  
                            <div className='flex flex-col mt-1 w-full'>
                                    <label htmlFor="" className='text-sm text-gray-600 mb-1'>Message</label>
                                    <textarea type="text" className='w-full p-1 outline-none border-2 rounded-sm'/>
                            </div>
                            <button className='w-full py-2 px-4 text-white bg-red-600 text-center mt-2 border-red-600 border-2 rounded-md
                             hover:bg-red-600 hover:text-white transition duration-300 cursor-pointer'>Send feedback</button>
                    </form>
                 </div>
            </div>
        </div>
    </div>
  )
}

export default Contact