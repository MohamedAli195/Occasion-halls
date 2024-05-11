import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

 
function AllHalls() {
    const api_url="https://wedding-halls.flexi-code.com/public/api/wedding-halls"
    const[halls,setHalls]=useState([])
    const fetchData =async () => {
      try {
       await fetch(api_url).then((res)=>res.json()).then((hall)=>setHalls(hall.data))
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    useEffect(()=>{
      fetchData()
      
    },[])
    
    return (
        <>
         <h2 className='text-4xl font-extrabold dark:text-white text-center bg-gray-50 p-4 rounded-md my-5'>Halls</h2>
        <div className="grid grid-cols-3 gap-3" >
            { halls &&
                halls.map((hall)=>{
                    return (<div className="max-w-sm rounded overflow-hidden shadow-lg" key={hall.id} >
                    <div className="px-6 py-4" >
                        <div className="font-bold text-xl mb-2">{hall.name}</div>

                    </div>
                    <img className="w-full h-64" src={hall.image} alt="Sunset in the mountains" />
                    <div className="px-6 py-4">

                        <p className="text-gray-700 text-base">
                            address : 10 main street
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Price :{hall.price}$</span>
                        <Link to={`hall/${hall.id}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                            Details
                        </Link>
                    </div>
                </div>)
                    
                
                })
            }
        </div>
        </>
    )
}

export default AllHalls