import React, { useEffect, useState } from 'react'
import DatePicker from '../Calendar'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function Hall() {
  const params = useParams()
  const api_url = `https://wedding-halls.flexi-code.com/public/api/wedding-halls/${params.id}`
  const [hallInfo, setHall] = useState({})
  const fetchData = async () => {
    try {
      //setHall(hall.data[0])
      await fetch(api_url).then((res) => res.json()).then((hall) => setHall(hall.data))
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData()

  }, [])
  return (
    <>
      {
        hallInfo && <>
          <div className='container mx-auto px-4 my-10'>
          
            <div className='grid grid-cols-2 gap-2"'>
              <div className='mr-6 rounded-lg'>
                <img src={hallInfo.image} className='w-full h-full rounded-lg'/>
                
                
              </div>
              <div >
              <h3 className='text-center text-lg font-bold'>{hallInfo.name}</h3>
              <h5 className='font-bold underline text-mainColor text-center mb-4'> Price :{hallInfo.price}</h5>
                <iframe className='rounded-lg shadow-md	' src={hallInfo.location} width="450" height="350" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                
              </div>
            </div>
            <div>
            <div className='h-80'>
              <h3 className=' text-lg font-bold'>Choose Date For Booking</h3>
              <div className=' w-64'>
              <DatePicker id={hallInfo.id}/>
              </div>
              
              </div>
            </div>
          </div>
        </>
      }

    </>
  )
}

export default Hall