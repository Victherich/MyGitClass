import React, { useState } from 'react'
import '../CSS/DepositPage.css'
import { Context } from './Context'
import { useContext } from 'react'
import axios from 'axios'

const DepositPage = () => {
  const {user,token}=useContext(Context)

  console.log(token)
  console.log(user)
const [deposit,setDeposit]=useState({amount:null,
                                      })
// console.log(deposit.depositAmount)

const handleChange = (e) => {
  setDeposit({ ...deposit, [e.target.name]: e.target.value });
};


const handleDeposit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post(
      'https://bankapp-v1.onrender.com/api/v1/user/deposit',
      deposit,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log(response.data);
    alert(response.data.message);
      console.log(deposit.amount)
  } catch (error) {
    console.error(error.response.data);
  }
};


const {theme}=useContext(Context)



  return (
    <div className={theme?'DepositPage':"DepositPageDark"}>
      Enter the Amount you wish to deposit:
      <input type="number" name="amount" value={deposit.amount} onChange={handleChange} placeholder='₦ 10.00 - 5,000,000'/>
      <button onClick={handleDeposit}>Deposit</button>
    </div>
  )
}

export default DepositPage
