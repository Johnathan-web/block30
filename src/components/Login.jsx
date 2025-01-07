/* TODO - add your code to create a functional React component that renders a login form */

import React, { useState } from 'react';
import {useAddLoginMutation} from './userSlice'
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  
  const [addLogin, {isLoading, error}] = useAddLoginMutation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();
    const login = await addLogin({email, password});
    localStorage.setItem('token', login.data.token);
    navigate('/account');
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        label="Email"
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSubmit}>Login</button>
    </form>
  );
};

export default LoginPage;