import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

function NavigationBar() {
  const [isOpen,setIsOpen] = useState(false)
  const navLinks = [
    {name:"Home",href:"#home"},
    {name:"About",href:"#about"},
    {name:"Services",href:"#services"},
    {name:"Gallery",href:"#gallary"},
    {name:"Testimonials",href:"#testimonials"},
    {name:"Barbers",href:"#barbers"},
    {name:"Contact",href:"#contact"}
  ]  
  const openMenu = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
    <div className='fixed top-0 w-full h-[10vh] p-2 flex items-center z-70'>
       
      <div className='flex justify-between md:w-[80%] items-center mx-auto w-full'>
        <h1 className='text-4xl md:text-4xl font-bold text-white items-center'>Barber<span className='
        text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-300
        '>Shop</span></h1>
        {/* desktop navigation */}
        <div className='hidden md:flex gap-5 items-center'>
          {
            navLinks.map((items) => (
              <a href={items.href} className='text-md text-white font-bold'>{items.name}</a>
            ))
          }
          <button className='bg-white py-2 px-4 font-bold text-red-800 cursor-pointer rounded-md text-sm'>Signup</button>
        </div>
        {/* mobile button*/}
        <div className='lg:hidden text-4xl font-bold text-white transition-all duration-300 ease-in z-5'>
          <div onClick={openMenu}>
            {
               isOpen ? <FaTimes/> : <FaBars/>
            }
          </div>
        </div>
      </div>
    </div>
    {/* mobile navigation */}
    <div className={`top-23 z-70 md:hidden  w-full h-[60vh] bg-white flex flex-col transition-all duration-300 ease-in absolute  ${isOpen ? 'left-0' : 'left-[-100%]'}`}>
      <div className='flex flex-col gap-4 mt-20 ml-2 text-xl text-gray-800 font-bold'>
        {
          navLinks.map((item) => (
            <a href={item.href}>{item.name}</a>
          ))
        }
      </div>
      <button className='bg-red-400 text-white mt-5 py-2 w-[80%] rounded-md ml-2 text-xl'>signup</button>
    </div>
  </>
  )
}

export default NavigationBar