import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import logOutUser from '../data-api/logOutUser';

export default function LogOut() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <a>
      Log Out
    </a>
  );
}
