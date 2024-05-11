import axios from "axios";
import React, { useEffect, useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

const DatePicker = (props) => {
    const [successAlert,setSuccessAlert] = useState()
    const [dangerAlert,setDangerAlert] = useState()
    const [value, setValue] = useState({
        startDate: null
    });

    const handleValueChange = (newValue) => {
        // console.log("newValue:", newValue); 
        setValue(newValue);
        console.log(`Bearer ${localStorage.getItem("userToken")}`)
        // axios.post("https://wedding-halls.flexi-code.com/public/api/user/wedding-hall-booking",
        //     {
        //         wedding_hall_id: props.id,
        //         day_of_booking: newValue.startDate
        //     },
        //     {
        //         "Content-Type": "application/json",
        //         'Authorization': `Bearer ${localStorage.getItem("userToken")}`
        //     })
        //     .then((data) => {
        //         console.log(data)

        //     }).catch((err) => {
        //         console.log(err)

        //     })
        async function postData(url = "", data = {}) {
            // Default options are marked with *
            const response = await fetch(url, {
              method: "POST", // *GET, POST, PUT, DELETE, etc.
              mode: "cors", // no-cors, *cors, same-origin
              cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
              credentials: "same-origin", // include, *same-origin, omit
              headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${localStorage.getItem("userToken")}`
              },
              
              body: JSON.stringify(data), // body data type must match "Content-Type" header
            });
            return response.json(); // parses JSON response into native JavaScript objects
          }
          postData("https://wedding-halls.flexi-code.com/public/api/user/wedding-hall-booking", {wedding_hall_id: props.id, day_of_booking: newValue.startDate }).then((data) => {
         console.log(data); 
         if(data.message=="Wedding Hall Not Active"){
            setDangerAlert(data.message)
            setSuccessAlert("")
         }else {
            setSuccessAlert(data.message)
            setDangerAlert("")
         }
});
        
}
useEffect(()=>{

},[])

    return (
        <>
        <Datepicker
            useRange={false}
            asSingle={true}
            value={value}
            onChange={handleValueChange}
        />
        {
            successAlert && <>
                <div className="bg-teal-100 border-t-4 my-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
                <div className="flex">
                    <div className="py-1"><svg className="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
                    <div>
                    <p className="font-bold">{successAlert}</p>
                    </div>
                </div>
                </div>
            
            </>
}{ dangerAlert &&
            <>
                <div role="alert">
                <div className="bg-red-500 my-4 text-white font-bold rounded-t px-4 py-2">
                    Danger
                </div>
                <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
                    <p>{dangerAlert}</p>
                </div>
                </div>
            </>
        }
        </>
        
       
    );
};
export default DatePicker;