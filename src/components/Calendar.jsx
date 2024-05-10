import axios from "axios";
import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

const DatePicker = (props) => {
    const [value, setValue] = useState({
        startDate: null
    });

    const handleValueChange = (newValue) => {
        // console.log("newValue:", newValue); 
        setValue(newValue);
        console.log(`Bearer ${localStorage.getItem("userToken")}`)
        axios.post("https://wedding-halls.flexi-code.com/public/api/user/wedding-hall-booking",
            {
                wedding_hall_id: props.id,
                day_of_booking: newValue.startDate
            },
            {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${localStorage.getItem("userToken")}`
            })
            .then((data) => {
                console.log(data)

            }).catch((err) => {
                console.log(err)

            })
    }


    return (
        <Datepicker
            useRange={false}
            asSingle={true}
            value={value}
            onChange={handleValueChange}
        />
    );
};
export default DatePicker;