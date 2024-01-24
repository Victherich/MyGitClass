// Login.js
import React, { useContext, useState,useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Context } from './Context';
import '../CSS/Login.css'

const Login = () => {
  const navigate = useNavigate();
  const { login,user,handleToken,token,setToken} = useContext(Context); 

  

  

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://bankapp-v1.onrender.com/api/v1/user/login', formData);

      console.log(response.data.data);
      alert(response.data.message);
      login(response.data.data);
      handleToken(response.data.token)
      console.log(token)
      navigate('/dashboard');
      console.log(user)
    } catch (error) {
      console.error(error.response.data);
      
    }
  };

  useEffect(() => {
    console.log(token); // This will reflect the updated state
  }, [token]);

  return (
    <div className='LoginWarp'>
      <div className='Login'>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <label>
          Password:
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </label>
        <button type="submit">Login</button>
      </form>

      
    </div>
    </div>
  );
};

export default Login;
