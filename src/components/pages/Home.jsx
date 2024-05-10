import React, { useEffect } from 'react'


import HallsInfo from '../HallsInfo'
import AllHalls from '../AllHalls'
import Responsers from '../Responsers'
import Slider from '../Slider'


function Home() {
 
  return (
    <>
  <Slider />
   
    <div className="container mx-auto px-4">
    
<HallsInfo />

<AllHalls />
  </div>
   <Responsers />


    </>
    
  )
}

export default Home