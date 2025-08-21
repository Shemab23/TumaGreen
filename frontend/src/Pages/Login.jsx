import React, { useState } from 'react';
import { FadePage, FadeInUp, FadeInDown, ZoomIn } from '../components/motion/animations';
import { useNavigate } from 'react-router-dom';
import LoginUser from '../components/Login/LoginUser';
import LoginRider from '../components/Login/LoginRider';

// Floating icon component
const FloatingIcon = ({ icon: Icon, size = 12, top, left, delay = 0 }) => (
  <FadeInUp delay={delay} y={20}>
    <div
      className="absolute text-green-500 opacity-30"
      style={{ top: `${top}%`, left: `${left}%`, fontSize: `${size}px` }}
    >
      {Icon && <Icon className="w-full h-full" />}
    </div>
  </FadeInUp>
);

const Login = () => {
  const navigate = useNavigate();
  const [kind, setKind] = useState('user');/// toggle to have

  const Logo = () => (
    <FadeInDown>
      <div
        className="flex items-center cursor-pointer gap-2"
        onClick={() => navigate('/')}
      >
        <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
          <img src="/logo.svg" alt="" />
        </div>
        <h3 className="font-semibold text-[var(--primary)] text-lg sm:text-xl">TumaGreen</h3>
      </div>
    </FadeInDown>
  );

const SwitchButton = ({ toKind, label }) => (
  <ZoomIn>
    <button
      onClick={() => setKind(toKind)}
      className="absolute top-3 right-3 bg-blue-600 text-white px-4 py-2 rounded-xl font-semibold shadow-lg hover:bg-blue-700 transition-colors z-30"
    >
      {label}
    </button>
  </ZoomIn>
);


  return (
    <div className='relative'>
           {/* Switch button */}
           <div className='absolute top-0 right-0'>
        {kind === 'user' ? (
          <SwitchButton toKind="rider" label="Rider" />
        ) : (
          <SwitchButton toKind="user" label="User" />
        )}
           </div>
    <FadePage>
      <div className="h-screen w-screen bg-[var(--bg2)] flex flex-col items-center justify-center relative px-4 overflow-hidden">


        {/* Central image placeholder */}

          <img
          src="loginbg.jpg"
          alt="background"
          className="fixed inset-0 w-full h-full object-cover z-[0]"
        />
        {/* Blur overlay */}
<div className="fixed inset-0 bg-gray-200/40 z-1"></div>

        {/* Top logo */}
        <div className="absolute top-3 left-3 z-5">
          <Logo />
        </div>



        {/* Login form */}
        <FadeInUp>
          <div className="w-full max-w-md mt-8 relative z-10">
            {kind === 'user' ? <LoginUser /> : <LoginRider />}
          </div>
        </FadeInUp>
      </div>
    </FadePage>
    </div>
  );
};

export default Login;
