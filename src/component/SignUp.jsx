import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../CSS/SignUp.css';

const SignUp = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
    pin: '',
    sex:''
  });

  // (URL.createObjectURL(e.target.files[0]))
  const handleChange = (e) => {
    if (e.target.name === 'profilePicture') {
      setFormData({ ...formData, profilePicture: e.target.files[0] });
      // setFormData({ ...formData, profilePicture: URL.createObjectURL(e.target.files[0]) });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataWithImage = new FormData();
      formDataWithImage.append('firstName', formData.firstName);
      formDataWithImage.append('lastName', formData.lastName);
      formDataWithImage.append('email', formData.email);
      formDataWithImage.append('phoneNumber', formData.phoneNumber);
      formDataWithImage.append('password', formData.password);
      formDataWithImage.append('confirmPassword', formData.confirmPassword);
      formDataWithImage.append('pin', formData.pin);
      formDataWithImage.append('sex',formData.sex);
      

      const response = await axios.post('https://bankapp-v1.onrender.com/api/v1/user/sign-up', formDataWithImage);
      console.log(response.data);

      alert(response.data.message);
      // Optionally, you can navigate to a different page after successful sign-up
      // navigate('/login');
    } catch (error) {
      console.error(error.response.data);
      // Handle error, show an error message, etc.
    }
  };

  return (
    <div className='SignUpWrap'>
      <div className='SignUp'>
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <label>
            First Name:
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
          </label>

          <label>
            Last Name:
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
          </label>

          <label>
            Email:
            <input type="text" name="email" value={formData.email} onChange={handleChange} required />
          </label>

          <label>
            Phone Number:
            <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
          </label>

          <label>
            Password:
            <input type="password" name="password" value={formData.password} onChange={handleChange} required />
          </label>

          <label>
            Confirm Password:
            <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
          </label>

          <label>
            PIN:
            <input type="text" name="pin" value={formData.pin} onChange={handleChange} required />
          </label>

          <label>
            Sex:
            <input type="text" name="sex" onChange={handleChange} required/>
          </label>

          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
