import { useEffect, useState } from 'react';
import { signupFields } from "../constants/Formfields"
import FormAction from "./FormAction";
import Input from "./Input";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ErrorAlert from './ErrorAlert';

const fields=signupFields;
let fieldsState={};

fields.forEach(field => fieldsState[field.id]='');

export default function Signup(){
  const [nameErr,setNameErro] = useState([])
  const [emailErr,setEmailErro] = useState([])
  const [nationalIDErr,setNationalIDErro] = useState([])
  const [passwordErr,setpasswordErro] = useState([])
  // const [errAlert,setErrAlert] = useState(errObj);
  let navigate = useNavigate();
  const [signupState,setSignupState]=useState(fieldsState);

  const handleChange=(e)=>setSignupState({...signupState,[e.target.id]:e.target.value});

  const handleSubmit=(e)=>{
    e.preventDefault();
   
    createAccount()
  }

  //handle Signup API Integration here
  const createAccount=()=>{
   
    const endpoint = "https://wedding-halls.flexi-code.com/public/api/user/register";
    axios.post(endpoint, signupState,{"Content-Type": "application/json"}).then((data) => {
      
        if (data.data.message == "success message") {
            localStorage.setItem("userToken", data.data.token)
            navigate("/")
        }
    }).catch((err) => {
  
    if(err.response.data.errors.email){
      setEmailErro(err.response.data.errors.email)
    }else{
      setEmailErro([])
    }
    if(err.response.data.errors.name){
      setNameErro(err.response.data.errors.name)
    }else {
      setNameErro([])
    }
    if(err.response.data.errors.national_id){
      setNationalIDErro(err.response.data.errors.national_id)
    }else{
      setNationalIDErro([])
    }
    if(err.response.data.errors.password){
      setpasswordErro(err.response.data.errors.password)
    }else{
      setpasswordErro([])
    }
    
    })

  }

  
    return(
      <>
         <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="">
        {
                fields.map(field=>
                        <Input
                            key={field.id}
                            handleChange={handleChange}
                            value={signupState[field.id]}
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
          <FormAction handleSubmit={handleSubmit} text="Signup" />
        </div>

         

      </form>
      <div className='flex'>

      </div>
      {
        
         <ErrorAlert errorType={"Name error"} errorMsg={nameErr}/>
      }
      {
         <ErrorAlert errorType={"Email error"} errorMsg={emailErr}/>
      }
        
        {
           <ErrorAlert errorType={"National ID error"} errorMsg={nationalIDErr}/>
        }
        {
           <ErrorAlert errorType={"password error"} errorMsg={passwordErr}/>
        }
        
      
      </>
     
      
    )
}