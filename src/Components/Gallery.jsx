import React from 'react'

function Gallery() {
  const imgs = [
    {
      id:1,
      img:"src/assets/galler3.jpg"
    },
     {
      id:2,
      img:"src/assets/gallery1.jpg"
    },
    {
      id:3,
      img:"src/assets/gallery2.jpg"
    },
     {
      id:4,
      img:"src/assets/gallery4.jpg"
    },
     {
      id:5,
      img:"src/assets/image1.jpg"
    },
     {
      id:6,
      img:"src/assets/image3.jpg"
    },
    {
      id:7,
      img:"src/assets/image4.jpg"
    },
     {
      id:8,
      img:"src/assets/image5.jpg"
    },
  ]
  return (
    <div className='py-20 bg-gray-50'>
        <div className='max-w-7xl md:w-[80%] mx-auto px-2'>
            <h1 className='text-4xl text-gray-800 font-extrabold text-center'>Gallery</h1>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-2 mt-5'>
              {
                imgs.map((item) => (
                  <img src={item.img} className='h-[200px] w-full' alt="" srcset="" />  
                ))
              }
            </div>
        </div>
    </div>
  )
}

export default Gallery