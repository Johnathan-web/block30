/* TODO - add your code to create a functional React component that renders a registration form */

import React, { useState } from 'react';
import { useAddRegisterMutation } from './userSlice';




const RegisterPage = () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [addRegister, {isLoading, error}] = useAddRegisterMutation();
  
  const handleSubmit = async(e) => {
    console.log(email);
    e.preventDefault();
    const register = await addRegister({email, password});
    console.log(register);


    
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
     <button onClick={handleSubmit}>Register</button>
    </form>
  );
};

export default RegisterPage;