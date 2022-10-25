import React from 'react';
import { useDispatch } from 'react-redux';
import logOutUser from '../data-api/logOutUser';

export default function LogOut() {
  const dispatch = useDispatch();

  const handleLogOut = (e) => {
    e.preventDefault();
    dispatch(logOutUser());
  };
  return (
    <button type="button" onClick={handleLogOut}>
      LOG OUT
    </button>
  );
}
