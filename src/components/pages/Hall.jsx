import React, { useEffect, useState } from 'react'
import DatePicker from '../Calendar'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function Hall() {
  const [successAlert,setSuccessAlert] = useState()
  const [dangerAlert,setDangerAlert] = useState()
  const [value, setValue] = useState({
    startDate: null
});
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
            <div className=''>
              <h3 className=' text-lg font-bold'>Choose Date For Booking</h3>
              <div className=' w-64'>
              <DatePicker id={hallInfo.id} successAlert={successAlert} setSuccessAlert={setSuccessAlert}
                dangerAlert={dangerAlert} setDangerAlert={setDangerAlert} value={value}
                setValue={setValue}
              />
              </div>
              
              </div>
            </div>
            <div>
          {
            successAlert && <>
                <div className="bg-teal-100 w-full border-t-4 my-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
                <div className="flex">
                    <div className="py-1"><svg className="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
                    <div>
                    <p className="font-bold">{successAlert} at {value.startDate}</p>
                    <p>
                        Please Contact us for conformation the reservation 
                    </p>
                    <p>
                    01120145650 | 01017855552 | 0155398762
                    </p>
                    <p> 
                        you should call us in 72 hours 
                        if you not confirmed the reservation will be canceled 
                        </p>
                        <p>Yhank You </p>
                    </div>
                </div>
                </div>
            
            </>
}{ dangerAlert &&
            <>
                <div role="alert w-full">
                <div className="bg-red-500 w-full text-white font-bold rounded-t px-4 py-2">
                {dangerAlert} at {value.startDate}
                </div>
                <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
                    
                    <p>The Hall is not active in this data please choose another Date</p>
                </div>
                </div>
            </>
        }
          </div>
          </div>
          
        </>
      }

    </>
  )
}

export default Hall