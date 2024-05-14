import React, { useState } from 'react';
// BEGIN Import Axios instance
import api from '../api';
// END Import Axios instance

function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  // BEGIN Update handleSubmit function
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await api.post('/api/signup', { username, password });
      console.log('Signup successful:', response.data);
      // Handle successful signup here
    } catch (error) {
      console.error('Signup failed:', error.response.data);
      // Handle errors here
    }
  };
  // END Update handleSubmit function

  return (
    <div className='container mx-auto p-4'>
      <form onSubmit={handleSubmit} className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
        <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='username'>
          Username
        </label>
        <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='username' type='text' placeholder='Username' onChange={(e) => setUsername(e.target.value)} />
        <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>
          Email
        </label>
        <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='email' type='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
        <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='password'>
          Password
        </label>
        <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline' id='password' type='password' placeholder='******************' onChange={(e) => setPassword(e.target.value)} />
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' type='submit'>
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Signup;