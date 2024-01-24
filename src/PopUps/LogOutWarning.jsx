import React from 'react'
import { Context } from '../component/Context'
import { useContext } from 'react'
import '../CSS/LogOutWarning.css'
import axios from 'axios'

const LogOutWarning = () => {
    const {theme,setLogOutWarning}=useContext(Context)
    const url =""

    const logOut = async ()=>{
      try{
        const response = axios.post(url)
        console.log(response.data.message)
      }
      catch(error){
        console.error(error.response.message)
      }
    }

  return (
    <div className={theme?'LogOutWarning':"LogOutWarningDark"}>
      <p>Are you sure you want to Log Out ?</p>
      <div className='LogOutWarningButtons'>
        <button onClick={logOut}>Yes</button>
        <button onClick={()=>setLogOutWarning(false)}>No</button>
      </div>
    </div>
  )
}

export default LogOutWarning
