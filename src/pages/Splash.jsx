import React from 'react';
import Logo from '../components/Logo';
import LogIn from './LogIn/LogIn';

function Splash() {
  return (
    <div className="splash">
      <div className="overlay">
        <Logo extraClasses="flex flex-col items-center aspect-square rounded-full bg-gradient-to-br from-yellow-400 to-yellow-500 text-white shadow-md text-4xl p-9" />
        <LogIn />
      </div>
    </div>
  );
}

export default Splash;
