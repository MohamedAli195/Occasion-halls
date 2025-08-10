import  { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Datepicker from "react-tailwindcss-datepicker";

const DatePicker = (props) => {
    // eslint-disable-next-line react/prop-types
    const {setSuccessAlert,setDangerAlert,value,setValue } = props
  
    let navigate = useNavigate();
    const handleValueChange = (newValue) => {
   
        setValue(newValue);
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

          if(localStorage.getItem("userToken")){

            if ( newValue.startDate  != null){
              // eslint-disable-next-line react/prop-types
              postData("https://wedding-halls.flexi-code.com/public/api/user/wedding-hall-booking", {wedding_hall_id: props.id, day_of_booking: newValue.startDate }).then((data) => {
             if(data.message=="Wedding Hall Not Active"){
                setDangerAlert(data.message)
                setSuccessAlert("")
             }else {
                setSuccessAlert(data.message)
                setDangerAlert("")
             }
    });
    }

          }else {
            navigate("/login")
          }
          
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
        
        </>
        
       
    );
};
export default DatePicker;