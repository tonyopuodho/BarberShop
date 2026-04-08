import React from 'react'
function Testimonials() {
    const testimonial = [
        {
            id:1,
            name:"John Doe",
            description:"I’ve never had a better haircut experience! The barbers are skilled, friendly, and really listen to what you want. Highly recommended"
        },{
            id:2,
            name:"Amanda",
            description:"Top-notch service every time. The atmosphere is clean and relaxing, and I always leave looking sharp and confident"
        },{
            id:3,
            name:"kelvin Meshark",
            description:"This is my go-to barber shop. Great attention to detail and excellent customer service. Worth every visit!"
        },
    ]
 
  return (
    <div className='py-20 bg-white/90'>
        <div className='max-w-7xl md:w-[80%] mx-auto px-2'>
            <h1 className='text-center text-4xl text-gray-800 font-extrabold mb-2'>What our satisfied clients say</h1>
            <p className='text-center text-md text-gray-600'>Don't just take our word for it-hear from our satisfied members</p>
            <div className='mt-5 grid grid-cols-1 md:grid-cols-3 gap-2'>
                    {
                        testimonial.map((item) => (
                            <div className='bg-gray-100 rounded-sm shadow-md p-4'>
                                <h1 className='text-lg text-gray-900 font-semibold'>{item.name}</h1>
                                <p className='text-gray-600 text-md'>{item.description}</p>
                            </div>
                        ))
                    }             
            </div>
        </div>
    </div>
  )
}

export default Testimonials