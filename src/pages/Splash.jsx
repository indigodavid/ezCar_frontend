import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import LogIn from './LogIn/LogIn';

function Splash() {
  const user = useSelector((state) => state.user);
  let errorMessage = '';

  useEffect(() => {
    if (user.status === 'success') {
      errorMessage = user.user.error ? user.user.error : '';
      console.log(errorMessage);
    }
  }, [user.status]);

  return (
    <div>
      <h1>This is a Splash page</h1>
      <p>{errorMessage}</p>
      <LogIn />
    </div>
  );
}

export default Splash;
