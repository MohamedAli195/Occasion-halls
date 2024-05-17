import React, { useEffect } from 'react'

function ErrorAlert(props) {
  useEffect(()=>{
    console.log("render/rerender")
    console.log(props.errorMsg)

  },[props.errorMsg.length])
  return (
    <>
    {
      props.errorMsg.length != 0  &&
            <div role="alert" className='inline-block mr-2'>
                <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">
                {props.errorType}
                </div>
                <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
                    <p>{props.errorMsg}</p>
                </div>
            </div>
                }

        </>
        
  )
}

export default ErrorAlert
