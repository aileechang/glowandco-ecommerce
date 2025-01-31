import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {
  const [currentState, setCurrentState] = useState('Login');
  const { token,  setToken, navigate, backendUrl } = useContext(ShopContext);

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      if (currentState === 'Sign Up') {
        const response = await axios.post(`${backendUrl}/api/user/register`, {name, email, password});
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem('token', response.data.token);
        } else {
          toast.error(response.data.message);
        }

      } else {
        const response = await axios.post(`${backendUrl}/api/user/login`, {email, password});
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem('token', response.data.token);
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }

  useEffect(()=>{
    if (token) {
      navigate('/')
    }
  }, [token])

  return (
    <div className='flex justify-center border-t border-[#6D4C3D] h-[55vh]'>
    <form onSubmit={onSubmit} className='flex flex-col items-center w-[90%] sm:max-w-96 pt-10 gap-4 text-slate-800 '>
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='text-slate-800 text-3xl'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800'/>
      </div>
      {currentState === 'Login' ? '' : <input onChange={(e)=>setName(e.target.value)} value={name} type="text" className='w-full px-3 py-2 border border-[#727D71]' placeholder='Name' required />}
      <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" className='w-full px-3 py-2 border border-[#727D71]' placeholder='Email' required />
      <input onChange={(e)=>setPassword(e.target.value)} value={password} type="password" className='w-full px-3 py-2 border border-[#727D71]' placeholder='Password' required />
      <div className='w-full text-sm mt-[-8px]'>
        {
          currentState === 'Login'
          ? (
            <div className='text-right'>
              <p 
                onClick={() => setCurrentState('Sign Up')} 
                className='cursor-pointer'
              >
                Create account
              </p>
            </div>
          )
          : (
            <div className='flex justify-between'>
              <p className='cursor-pointer'>Forgot your password?</p>
              <p 
                onClick={() => setCurrentState('Login')} 
                className='cursor-pointer'
              >
                Login here
              </p>
            </div>
          )
        }
      </div>
      <button className='bg-[#727D71] hover:bg-slate-800 text-white font-light rounded px-8 py-2 mt-4'>{currentState === 'Login' ? 'Sign In' : 'Sign Up'}</button>
    </form>
    </div>
  )
}

export default Login
