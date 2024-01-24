import React, { useState } from 'react'
import { useContext } from 'react'
import { createContext } from 'react'



export const Context = createContext();

const ContextProvider = ({children}) => {

  const [theme,setTheme]=useState(false)
  const [sideBarVisible,setSideBarVisible]=useState(true)
  const [currentPage,setCurrentPage]=useState('Home')
  const [logOutWarning,setLogOutWarning]=useState(false)
  const [user,setUser]=useState(null)
  const [token,setToken]=useState(null)
console.log(token)


  const login = (userData) => {
    setUser(userData);
  };

  const handleToken=(userToken)=>{
    setToken(userToken)
  }

  return (
    <Context.Provider value={{theme,
                              setTheme,
                              sideBarVisible,
                              setSideBarVisible,
                              currentPage,
                              setCurrentPage,
                              logOutWarning,
                              setLogOutWarning,
                              login,
                              user,setUser,token,setToken,handleToken}}>
        {children}
    </Context.Provider>
  )
}

export default ContextProvider
