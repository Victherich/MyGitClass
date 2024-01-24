import React, { useState } from 'react'
import '../CSS/BalanceInfo.css'
import Im1 from '../Asset/ic_outline-visibility.png'
import Im2 from '../Asset/material-symbols_visibility-off-outline.png'
import { useContext } from 'react'
import { Context } from './Context'


const BalanceInfo = () => {
const [visible,setVisible]=useState(false)
const {user}=useContext(Context)
console.log(user.accountNumber)



  return (
    <div className='BalanceInfo'>
      <div className='BalanceInfoUp'>
      <p>Total Balance</p>
      <div className='BalanceViewImage'>
        <img src={visible?Im1:Im2} alt="Image" onClick={()=>setVisible(!visible)}/>
        {visible?<p>{user.balance}</p>:<p>**********</p>}
    </div>
      </div>
      <div className='BalanceInfoDown'>
        <p>Account Number</p>
        <p>{user.accountNumber}</p>
      </div>
    </div>
  )
}

export default BalanceInfo
