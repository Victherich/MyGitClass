import React, { useContext } from 'react'
import '../CSS/TransferPage.css'
import { Context } from './Context'

const TransferPage = () => {
  const {theme}=useContext(Context)

  return (
    <div className={theme?'TransferPage':'TransferPageDark'}>
      Enter Recipient Account Number:
      <input placeholder='0123456789'/>
      Enter Amount:
      <input placeholder='₦ 10.00 - 5,000,000'/>
      <button>Transfer</button>
    </div>
  )
}

export default TransferPage
