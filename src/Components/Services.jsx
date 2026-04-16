import React from 'react'

function Services() {
  const  service = [
    {
      id:1,
      img:"src/assets/beartreaming.jpeg",
      name:"Beard and trimming",
      price:"100 to 1000"
    },{
      id:2,
      img:"src/assets/facialskincare.jpg",
      name:"Facial and skincare",
      price:"100 to 1000"
    },{
      id:3,
      img:"src/assets/hair&style.jpg",
      name:"Hair and style",
      price:"100 to 1000"
    },{
      id:4,
      img:"src/assets/haircoloring.jpg",
      name:"Hair coloring",
      price:"100 to 1000"
    },{
      id:5,
      img:"src/assets/kidshair.jpg",
      name:"Kids hair cut",
      price:"100 to 1000"
    },{
      id:6,
      img:"src/assets/lineupandedgeup.jpg",
      name:"Line up and edge up",
      price:"100 to 1000"
    },{
      id:7,
      img:"src/assets/scalptreatment.jpg",
      name:"Scalp treatment",
      price:"100 to 1000"
    },{
      id:8,
      img:"src/assets/shaving.jpg",
      name:"Shaving",
      price:"100 to 1000"
    },{
      id:9,
      img:"src/assets/washing.jpg",
      name:"Hair washing",
      price:"50 to 500"
    },{
      id:10,
      img:"src/assets/lineupandedgeup.jpg",
      name:"Head shave",
      price:"100 to 1000"
    }
  ]
  return (
    <div className='py-16 bg-white/90' id='services'>
        <div className='max-w-7xl md:w-[80%] mx-auto px-2'>
            <div className='flex justify-center flex-col items-center'>
                <h1 className='text-center font-extrabold text-5xl'>Our services</h1>
                <div className='h-0.5 w-38 mt-3 rounded-md bg-red-600 mr-3'></div>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mt-5'>
                  {
                    service.map((item) => (
                      <div className='rounded-md w-[100%] shadow-md cursor-pointer bg-gray-100'>
                        <img src={item.img} alt="" className='h-[70%] w-full object-cover'/>
                        <h1 className='text-md text-gray-600 font-medium'>{item.name}</h1>
                        <h3 className='text-xl font-bold text-gray-900'>Ksh {item.price}</h3>
                      </div>
                    ))
                  }
                </div>
            </div>            
        </div>
    </div>
  )
}

export default Services