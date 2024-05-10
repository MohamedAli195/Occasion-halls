import React from 'react'
import hayah from './../../public/Images/hayah.png'
import jewel from './../../public/Images/jewel.png'
import ramsis from './../../public/Images/ramsis.jpg'
import horus from './../../public/Images/horus.jpg'
import etab from './../../public/Images/etab.png'
import nefeertiti from './../../public/Images/nefeertiti.jpg'
function Responsers() {
  return (
    <>
        <h2 className='text-4xl font-extrabold dark:text-white text-center bg-gray-50 p-4 rounded-md my-5'>Sponsers</h2>

      <div class="grid grid-cols-6 m-5 mt-10 p-2 gap-2">
        <div ><img src={hayah} alt="" className='-52	'/></div>
        <div><img src={jewel} alt="" className='h-52	'/></div>
        <div><img src={ramsis} alt=""className='h-52	' /></div>
        <div><img src={horus} alt="" className='h-52	'/></div>
        <div><img src={etab} alt="" className='h-52	'/></div>
        <div><img src={nefeertiti} alt="" className='h-52	' /></div>
      </div>
    </>
  )
}

export default Responsers