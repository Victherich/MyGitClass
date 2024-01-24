import React from 'react'
import '../CSS/Home.css'
import { Context } from './Context'
import { useContext } from 'react'

const Home = () => {
  const {theme} = useContext(Context)
  return (
    <div className={theme?'Home':'HomeDark'}>
      <div className='HomeUp'>
          <p>Recent Transactions</p>
          <p>Last 7 Transactions</p>
      </div>
      <div className='HomeDown'>
        
      </div>
      
    </div>
  )
}

export default Home
