import { Carousel } from 'flowbite-react'
import slider from './../../public/Images/slider2.jpg'
import slider2 from './../../public/Images/slider3.jpg'

import slider4 from './../../public/Images/slider4.jpg'
function Slider() {
   
    return (
        <>
    <div className="h-56 sm:h-80 xl:h-80 2xl:h-96">
      <Carousel>
        <div className='grid grid-cols-3'>
        <div className="flex h-full w-full bg-gray-400 dark:bg-gray-700 dark:text-white">
          <img src={slider2} className='h-full w-100' />
        </div>
        <div className="flex h-full w-full bg-gray-400 dark:bg-gray-700 dark:text-white">
          <img src={slider} className='h-full w-full' />
        </div>
        <div className="flex h-full w-full bg-gray-400 dark:bg-gray-700 dark:text-white">
          <img src={slider4} className='h-full w-full' />
        </div>
        </div>
        
      </Carousel>
    </div>
        </>
    )
}

export default Slider