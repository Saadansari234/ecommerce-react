import React from 'react'
import { useState } from 'react'
const Login = () => {

    const [Username, setUsername]= useState('')
    const [Password, setPassword]= useState('')
    
    const OldData= {
        Username: "saad",
        Password: "1234"
    }

  const handleClick= () =>{
     const oldUsername = OldData.Username
     const oldPassword = OldData.Password

     if (oldUsername== Username && oldPassword== Password) {
        localStorage.setItem("loggedin", 1)
     }
  }
  
  return (
    <div>
      <input type="text" value={Username} onChange={(e)=> setUsername(e.target.value)} />
      <input type="text" value={Password} onChange={(e)=> setPassword(e.target.value)}/>
      <button onClick={handleClick} >Login</button>
    </div>
  )
}

export default Login
