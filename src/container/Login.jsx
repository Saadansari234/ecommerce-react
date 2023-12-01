import React, { useState } from 'react'

const Login = ({ changeIsLoggedIn }) => {
 
    const [State, setState]= useState({
        step:1,  
        isLoggedIn: 0,

        form: {
            mobile: 0,
            otp: 0,
          },
    })

    const {step} = State
    
    const handlestep= () =>{
        const {step} = State
            
        if (step === 2) {
            console.log(State)
            changeIsLoggedIn(1)
        }

        setState((prevState) => ({ ...prevState, step: 2 }));
    }


    const handleform=(event)=>{
    const {step, form}= State

    
      if (step === 1) {
        setState((prevState) => ({
            ...prevState,
            form: { ...prevState.form, mobile: event.target.value },
        }));
      
        } else {
            setState((prevState) => ({
                ...prevState,
                form: { ...prevState.form, otp: event.target.value },
            }));
         
        }
  
    
    }

    console.log(State)
  return (
    <div>
      <input placeholder={step===1 ? "enter mobile number" : "enter otp"}
       onChange={(event)=> handleform(event)} />
      <button onClick={handlestep}>{step === 1 ? "Next" : "Submit"}</button>
    </div>
  )
}

export default Login
