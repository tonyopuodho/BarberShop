import React from 'react'

function Barbers() {
  const barbers = [
    {
      id:1,
      name:"John Andrea",
      profession:"Certified Barber",
      img:"src/assets/barber.jpg"
    },
     {
      id:2,
      name:"Meshark Edger",
      profession:"Certified Barber",
      img:"src/assets/barber1.jpg"
    }, {
      id:3,
      name:"Mark Mathew",
      profession:"Certified Barber",
      img:"src/assets/barber2.jpg"
    },
  ]
  return (
    <div className='py-20 bg-gray-100'>
      <div className='max-w-7xl md:w-[80%] mx-auto px-2'>
        <h1 className='text-gray-900 font-extrabold text-4xl text-center'>Meet our professional Barbers</h1>
        <div className='mt-8 grid grid-cols-1 md:grid-cols-3 gap-5'>
          {
            barbers.map((item) => (
              <div className='rounded-md shadow-md bg-white'>
                <img src={item.img} alt=""  className='w-full h-[300px]'/>
                <h3 className='text-md font-medium text-gray-600 text-center'>{item.name}</h3>
                <p className='text-sm text-red-500 mb-2  font-semibold text-center'>{item.profession}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Barbers