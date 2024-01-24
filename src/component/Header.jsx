import React from 'react'
import { useContext } from 'react'
import { Context } from './Context'
import '../CSS/Header.css'
import Im3 from '../Asset/gg_profile.png'

const Header = () => {
const {theme,currentPage,setCurrentPage,user}=useContext(Context)
console.log(theme)
  return (
    <div className='Header'>

      <div className='HeaderLeft1'>
        <div className='ProfileImage'>
          <img src={Im3} alt="Image"/>
        </div>
      <div className='Headerleft2'>
        <h4>Welcome to Eflex Bank</h4>
        <p>Hello {user.firstName}</p>
      </div>
      </div>
      <div className='HeaderRight'>
         <div className='HeaderRightLeft'>
         <p onClick={()=>{setCurrentPage('History')}}>History 🕤</p>
          <p></p>
         </div>
      </div>
    </div>
  )
}

export default Header
