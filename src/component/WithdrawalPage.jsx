import React, { useContext, useState } from 'react'
import { Context } from './Context'

const WithdrawalPage = () => {
 const [Withdraw,setWithdraw]=useState({})
 const {theme}=useContext(Context)


  return (
    <div className={theme?'DepositPage':'DepositPageDark'}>
      Enter the Amount you wish to Withdraw:
      <input placeholder='₦ 10.00 - 5,000,000'/>
      <button>Withdraw</button>
    </div>
  )
}

export default WithdrawalPage
