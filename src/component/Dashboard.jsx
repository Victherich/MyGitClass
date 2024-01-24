import React from 'react'
import Account from './Account'
import MenuSideBar from './MenuSideBar'
import TransferPage from './TransferPage'
import History from './History'
import WithdrawalPage from './WithdrawalPage'
import DepositPage from './DepositPage'
import Header from './Header'
import '../CSS/DashBoard.css'
import {useContext} from 'react'
import {Context} from './Context'
import {useState} from "react"
import Home from './Home'
import LogOutWarning from '../PopUps/LogOutWarning'
import BalanceInfo from './BalanceInfo'

const Dashboard = () => {
    const {sideBarVisible,setSideBarVisible,currentPage,theme,logOutWarning}=useContext(Context)
    
    
  return (
    <div className='DashBoard'>
        {sideBarVisible&&<div className={theme?'DashBoardLeft':"DashBoardLeftDark"}>
            <MenuSideBar/>
        </div>}    
        <div className={theme?'DashBoardRight':'DashBoardRightDark'}>
            <div className={theme?'DashBoardRightUp':'DashBoardRightUpDark'}>
                <Header/>
            </div>
            <div className='DashBoardRightMid'>
                <BalanceInfo/>
            </div>
            <div className='DashBoardRightDown'>
                {currentPage==="Home"&&<Home/>}
                {currentPage==="Account"&&<Account/>}
                {currentPage==="TransferPage"&&<TransferPage/>}
                {currentPage==="WithdrawalPage"&&<WithdrawalPage/>}
                {currentPage==="DepositPage"&&<DepositPage/>}
                {currentPage==="History"&&<History/>}
                {!sideBarVisible&&<p onClick={()=>setSideBarVisible(true)} className='ShowSideBar'>Show Side Bar</p>}
            </div>
        </div>
        {logOutWarning&&<LogOutWarning/>}
    </div>
  )
}

export default Dashboard
