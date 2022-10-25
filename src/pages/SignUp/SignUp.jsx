/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useRef, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import DatePicker from '@hassanmojab/react-modern-calendar-datepicker';
import '@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css';
import signUpUser from '../../data-api/signUpUser';

export default function SignUp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formRef = useRef();
  const user = useSelector((state) => state.user);
  const [errorMessage, setErrorMessage] = useState('');
  const [selectedDay, setSelectedDay] = useState(null);
  console.log(selectedDay);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData);
    const userInfo = {
      user: {
        name: data.name,
        email: data.email,
        date_of_birth: `${`${selectedDay.year}-${selectedDay.month}-${selectedDay.day}`}`,
        password: data.password,
        password_confirmation: data.password_confirmation,
        photo: data.photo,
      },
    };
    dispatch(signUpUser(userInfo));
  };
  console.log(user);
  useEffect(() => {
    if (user.status === 'success') {
      if (user.user.error) {
        setErrorMessage(user.user.error);
      } else {
        navigate('/add_car');
      }
    }
  }, [user.status]);

  return (
    <form ref={formRef} className="add-form" onSubmit={handleSubmit}>
      {errorMessage && (
        <div className="alert">{errorMessage}</div>
      )}
      <div className="relative z-0 mb-6 w-fit group">
        <input
          type="name"
          name="name"
          id="name"
          className="block py-2.5 px-0 w-fit text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-dark dark:border-gray-600 dark:focus:border-lime-500 focus:outline-none focus:ring-0 focus:border-lime-600 peer"
          placeholder=" "
          required
        />
        <label
          htmlFor="name"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-lime-600 peer-focus:dark:text-lime-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Name
        </label>
      </div>
      <div className="relative z-0 mb-6 w-fit group">
        <input
          type="text"
          name="photo"
          id="photo"
          className="block py-2.5 px-0 w-fit text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-dark dark:border-gray-600 dark:focus:border-lime-500 focus:outline-none focus:ring-0 focus:border-lime-600 peer"
          placeholder=" "
          required
        />
        <label
          htmlFor="photo"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-lime-600 peer-focus:dark:text-lime-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Photo
        </label>
      </div>
      <div className="relative z-0 mb-6 w-fit group">
        <input
          type="email"
          name="email"
          id="email"
          className="block py-2.5 px-0 w-fit text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-dark dark:border-gray-600 dark:focus:border-lime-500 focus:outline-none focus:ring-0 focus:border-lime-600 peer"
          placeholder=" "
          required
        />
        <label
          htmlFor="email"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-lime-600 peer-focus:dark:text-lime-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Email
        </label>
      </div>
      <div className="relative z-0 mb-6 w-fit group">
        <input
          type="password"
          name="password"
          id="password"
          className="block py-2.5 px-0 w-fit text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-dark dark:border-gray-600 dark:focus:border-lime-500 focus:outline-none focus:ring-0 focus:border-lime-600 peer"
          placeholder=" "
          required
        />
        <label
          htmlFor="password"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-lime-600 peer-focus:dark:text-lime-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Password
        </label>
      </div>
      <div className="relative z-0 mb-6 w-fit group">
        <input
          type="password"
          name="password_confirmation"
          id="password_confirmation"
          className="block py-2.5 px-0 w-fit text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-dark dark:border-gray-600 dark:focus:border-lime-500 focus:outline-none focus:ring-0 focus:border-lime-600 peer"
          placeholder=" "
          required
        />
        <label
          htmlFor="password_confirmation"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-lime-600 peer-focus:dark:text-lime-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Password Confirmation
        </label>
      </div>
      <div className="relative z-0 mb-6 w-fit group">
        <label
          htmlFor="date-of-birth"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-lime-600 peer-focus:dark:text-lime-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Date of Birth
        </label>
        <DatePicker
          name="date-of-birth"
          id="date-of-birth"
          value={selectedDay}
          onChange={setSelectedDay}
          inputPlaceholder="Select a day"
          shouldHighlightWeekends
        />
      </div>

      <button
        type="submit"
        className="focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-fit sm:w-auto px-5 py-2.5 text-center submit-button"
      >
        Submit
      </button>
    </form>
  );
}
