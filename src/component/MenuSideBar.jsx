import React from 'react'
import '../CSS/MenuSideBar.css'
import { useContext } from 'react'
import { Context } from './Context'

const MenuSideBar = () => {
  const {setTheme,
          theme,
          sideBarVisible,
          setSideBarVisible,
          setCurrentPage,
          currentPage,
          setLogOutWarning}=useContext(Context)



  return (
    <div className='MenuSideBar'>
      <div className='MenuSideBarUp'>
        {/* <img src='' alt="profile"/> */}
        <h2>Eflex Bank</h2>
        
      </div>
      <div className='MenuSideBarMiddle'>
        <h4 onClick={()=>{setCurrentPage('Home')}} className={currentPage==="Home"?"ActiveMenu":""} >Dashboard</h4>
        <h4 onClick={()=>{setCurrentPage('DepositPage')}} className={currentPage==="DepositPage"?"ActiveMenu":""} >Deposit</h4>
        <h4 onClick={()=>{setCurrentPage('WithdrawalPage')}} className={currentPage==="WithdrawalPage"?"ActiveMenu":""} >Withdraw</h4>
        <h4 onClick={()=>{setCurrentPage('TransferPage')}} className={currentPage==="TransferPage"?"ActiveMenu":""} >Transfer</h4>
        {/* <h4 onClick={()=>{setCurrentPage('History')}} className={currentPage==="History"?"ActiveMenu":""} >History</h4> */}
        <h4 onClick={()=>{setCurrentPage('Account')}} className={currentPage==="Account"?"ActiveMenu":""} >Account</h4>
        
        
        
        
      </div>
      <div className='MenuSideBarDown'>
        <p onClick={()=>setTheme(!theme)}>Theme</p>
        <p onClick={()=>setSideBarVisible(false)}>Hide Side Bar</p>
        <p onClick={()=>setLogOutWarning(true)}>Logout</p>
      </div>
    </div>
  )
}

export default MenuSideBar
