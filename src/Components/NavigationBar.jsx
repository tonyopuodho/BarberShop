import React, { useEffect, useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-scroll'

function NavigationBar({activeBar, setActiveBar}) {
  const [isOpen,setIsOpen] = useState(false)
  const [active,setActive] = useState(false)
  const navLinks = [
    {name:"Home",href:"#home", id:"home"},
    {name:"About",href:"#about", id:"about"},
    {name:"Services",href:"#services", id:"services"},
    {name:"Gallery",href:"#gallery", id:"gallery"},
    {name:"Testimonials",href:"#testimonials", id:"testimonials"},
    {name:"Barbers",href:"#barbers",id:"barbers"},
    {name:"Contact",href:"#contact",id:"contact"}
  ]  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setActive(true)
      } else{
        setActive(false)
      }
    }
    window.addEventListener('scroll',handleScroll)
    return () => {
      window.removeEventListener('scroll',handleScroll)
    }
  })
  const openMenu = () => {
    setIsOpen(!isOpen)
  }
  return (
    <nav className={`fixed w-full h-[10vh] z-70 transition-all duration-300 ${active ? 'bg-white shadow-md' : 'bg-transparent'} `}>
    <div className={`fixed top-0 w-full h-[10vh] p-2 flex items-center z-70`}>       
      <div className='flex justify-between md:w-[80%] items-center  mx-auto w-full'>
        <h1 className={`text-4xl md:text-4xl font-bold ${active ? 'text-black' : 'text-white'} items-center`}>Barber<span className='
        text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-300
        '>Shop</span></h1>
        {/* desktop navigation */}
        <div className='hidden md:flex gap-5 items-center'>
          {
            navLinks.map((items) => (
              <a href={items.href} className={`relative group transition-all duration-300 text-md ${activeBar == items.id ? active ? "text-red-600" : "text-white" : active 
                            ? "text-gray-700 hover:text-red-600" : "text-gray-200 hover:text-white"
                        } font-bold`}>
                <Link to={items.id} spy={true} smooth={true} offset={50} duration={500} onClick={() => setActiveBar(items.id)}>{items.name}</Link>
               <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-red-600
                transition-all duration-300 transform origin-left scale-x-0 group-hover:scale-x-100
                ${activeBar === items.id ? "scale-x-100" : ""}`}>                            
              </span>
              </a>
              
            ))
          }
          <button className={`py-2 px-4 font-bold ${active ? 'text-white bg-red-600' : 'text-red-800 bg-white'} cursor-pointer rounded-md text-sm`}>Signup</button>
        </div>
        {/* mobile button*/}
        <div className={`lg:hidden text-4xl font-bold ${active ? 'text-black' : 'text-white'} transition-all duration-300 ease-in z-5`}>
          <div onClick={openMenu}>
            {
               isOpen ? <FaTimes/> : <FaBars/>
            }
          </div>
        </div>
      </div>
    </div>
    {/* mobile navigation */}
    <div className={`top-23 z-70 md:hidden  w-full h-[60vh] bg-white/95 shadow-md flex flex-col transition-all duration-300 ease-in absolute  ${isOpen ? 'left-0' : 'left-[-100%]'}`}>
      <div className='flex flex-col gap-4 mt-20 ml-2 text-xl text-gray-800 font-bold'>
        {
          navLinks.map((item) => (
            <a href={item.href}>{item.name}</a>
          ))
        }
      </div>
      <button className='bg-red-400 text-white mt-5 py-2 w-[80%] rounded-md ml-2 text-xl'>signup</button>
    </div>
  </nav>
  )
}

export default NavigationBar