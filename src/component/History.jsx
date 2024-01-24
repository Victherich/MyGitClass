import React, { useContext } from 'react'
import { Context } from '../component/Context'

const History = () => {
  const {theme}=useContext(Context)
  return (

    <div className={theme?'Home':'HomeDark'}>
      <div style={{justifyContent:'center'}} className='HomeUp'>
          <p>Transaction History</p>
      </div>
      <div className='HomeDown'>

      </div>
      
    </div>
  )
}

export default History
