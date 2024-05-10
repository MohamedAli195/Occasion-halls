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
              <div>
                <img src={hallInfo.image} />
                
                
              </div>
              <div >
              <h3 className='text-center text-lg font-bold'>{hallInfo.name}</h3>
              <h5 className='font-bold underline text-mainColor text-center mb-4'> Price :{hallInfo.price}</h5>
                <iframe className='rounded-lg shadow-md	' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56316.90538528699!2d30.813217163085955!3d28.09144200102748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145b24fdb18ed73f%3A0x933180e9c12b6f22!2sMinya%20Hotels%20of%20the%20Armed%20Forces!5e0!3m2!1sar!2seg!4v1715382044449!5m2!1sar!2seg" width="450" height="350" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                
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