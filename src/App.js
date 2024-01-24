import React, { Profiler } from 'react';
import './App.css';
import Dashboard from './component/Dashboard';
import SignUp from './component/SignUp';
import Login from './component/Login';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Private from './component/Private';



const App = () => {
  return (
   
     <BrowserRouter>
        <Routes>
              <Route path='/' element={<Login/>}/>
              <Route path='/signup' element={<SignUp/>}/>

              <Route element={<Private/>}>
            <Route path="/dashboard" element={<Dashboard/>} />
          </Route>
              
          </Routes>     
     </BrowserRouter>
   
  )
}

export default App
