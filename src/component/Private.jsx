
import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { Context } from './Context';
import { useContext } from 'react';

const Private = () => {
  const {user,token}=useContext(Context)



  return user ? (
    <Outlet />
  ) : (
    <Navigate to="/" replace />
  );
};

export default Private;
