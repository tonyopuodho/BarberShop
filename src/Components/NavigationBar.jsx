import React from 'react'
import { FaBars } from 'react-icons/fa'

function NavigationBar() {
  const navLinks = [
    {name:"Home",href:"#home"},
    {name:"About",href:"#about"},
    {name:"Services",href:"#services"},
    {name:"Gallery",href:"#gallary"},
    {name:"Testimonials",href:"#testimonials"},
    {name:"Barbers",href:"#barbers"},
    {name:"Contact",href:"#contact"}
  ]
  return (
    <div className='fixed top-0 w-full bg-black/40 h-[10vh] p-2 flex items-center'>
       
      <div className='flex justify-between md:w-[80%] items-center mx-auto w-full'>
        <h1 className='text-4xl md:text-4xl font-bold text-white items-center'>Barber<span className='
        text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-300
        '>Shop</span></h1>
        {/* desktop navigation */}
        <div className='hidden md:flex gap-5 items-center'>
          {
            navLinks.map((items) => (
              <a href={items.href} className='text-md text-gray-800 font-bold'>{items.name}</a>
            ))
          }
          <button className='bg-white py-2 px-4 font-bold text-red-800 cursor-pointer rounded-md text-sm'>Signup</button>
        </div>
        {/* mobile navigation*/}
        <div className='lg:hidden text-4xl font-bold text-white'>
          <FaBars/>
        </div>
      </div>
    </div>
  )
}

export default NavigationBar