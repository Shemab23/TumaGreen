import React, { useState } from 'react';
import LoginUser from '../components/Login/LoginUser'
import LoginRider from '../components/Login/LoginRider';
import {motion as Motion} from 'framer-motion'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [kind, setKind] = useState('user');

  return (
    <div className='h-screen w-screen bg-[var(--bg2)] flex-center relative'>
      {kind === 'user' ? (
        <div>
          <div className='px-2 absolute top-3 leeft-3'>
                <Motion.div
            className='flex flex-row cursor-pointer'
            initial={{ x: -50, scale: 0.4 }}
            animate={{ x: 0, scale: 1 }}
            transition={{ duration: 0.6 }}
            whileHover={{scale: 1.1 }}
            whileTap={{scale: 0.9 }}
            onClick={()=>navigate('/')}
          >
            <img src="/logo2.png" alt="Logo" />
            <h3 className='font-semibold text-[var(--primary)]'>TumaGreen</h3>
          </Motion.div>
          </div>
          <button onClick={() => setKind('rider')}
          className='absolute top-3 right-3 bg-blue-600 text-white p-3 rounded-xl font-semibold cursor-pointer'
          >Switch to rider
          </button>
          <LoginUser/>
        </div>
      ) : (
        <div>
          <div className='px-2 absolute top-3 leeft-3'>
                <Motion.div
            className='flex flex-row cursor-pointer'
            initial={{ x: -50, scale: 0.4 }}
            animate={{ x: 0, scale: 1 }}
            transition={{ duration: 0.6 }}
            whileHover={{scale: 1.1 }}
            whileTap={{scale: 0.9 }}
             onClick={()=>navigate('/')}
          >
            <img src="/logo2.png" alt="Logo" />
            <h3 className='font-semibold text-[var(--primary)]'>TumaGreen</h3>
          </Motion.div>
          </div>
          <button onClick={() => setKind('user')}
          className='absolute top-3 right-3 bg-blue-600 text-white p-3 rounded-xl font-semibold cursor-pointer'
          >Switch to user
          </button>
          <LoginRider/>
        </div>
      )}
    </div>
  );
};

export default Login;
