import { useState } from 'react';
import { loginFields } from "../constants/Formfields";
import FormAction from "./FormAction";
import FormExtra from "./FormExtra";
import Input from "./Input";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ErrorAlert from './ErrorAlert';


const fields=loginFields;
let fieldsState = {};
fields.forEach(field=>fieldsState[field.id]='');

export default function Login(){
    const [errAlert,setErrAlert] = useState("");
    let navigate = useNavigate();
    const [loginState,setLoginState]=useState(fieldsState);

    const handleChange=(e)=>{
        setLoginState({...loginState,[e.target.id]:e.target.value})
        
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        authenticateUser();
    }

    //Handle Login API Integration here
    const authenticateUser = () =>{

        const endpoint = "https://wedding-halls.flexi-code.com/public/api/user/login";
        console.log(loginState);
        axios.post(endpoint, loginState,{"Content-Type": "application/json"}).then((data) => {
            console.log(data.data.message)
            if (data.data.message == "user logged") {
                localStorage.setItem("userToken", data.data.token)
                navigate("/")
            }
            
        }).catch((err) => {
            console.log(err)
             if (err.response.data.message == "email or password not correct") {
                setErrAlert(err.response.data.message)
            }
        })    
    }
    return(
        <>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="-space-y-px">
            {
                fields.map(field=>
                        <Input
                            key={field.id}
                            handleChange={handleChange}
                            value={loginState[field.id]}
                            labelText={field.labelText}
                            labelFor={field.labelFor}
                            id={field.id}
                            name={field.name}
                            type={field.type}
                            isRequired={field.isRequired}
                            placeholder={field.placeholder}
                            
                    />
                
                )
            }
        </div>
        <FormExtra/>
        <FormAction handleSubmit={handleSubmit} text="Login"/>
      </form>
            {
                errAlert && <ErrorAlert errorMsg={errAlert}/>
            }
      </>
    )
}