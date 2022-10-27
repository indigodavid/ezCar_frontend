/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useRef, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
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
  useEffect(() => {
    if (user.status === 'success') {
      try {
        if (user.user.error) {
          setErrorMessage(user.user.error);
        } else {
          navigate('/add_car');
        }
      } catch (e) {
        setErrorMessage(e.error);
      }
    }
  }, [navigate, user]);

  return (
    <div className="splash">
      <div className="overlay">
        <form ref={formRef} className="add-form" onSubmit={handleSubmit}>
          {errorMessage && <div className="alert">{errorMessage}</div>}
          <div className="field group">
            <input
              type="name"
              name="name"
              id="name"
              className="text-field peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="name"
              className="peer-focus:font-medium label-field peer-focus:left-0 peer-focus:text-lime-600 peer-focus:dark:text-lime-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
            >
              Name
            </label>
          </div>
          <div className="field group">
            <input
              type="text"
              name="photo"
              id="photo"
              className="text-field peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="photo"
              className="peer-focus:font-medium label-field peer-focus:left-0 peer-focus:text-lime-600 peer-focus:dark:text-lime-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
            >
              Photo
            </label>
          </div>
          <div className="field group">
            <input
              type="email"
              name="email"
              id="email"
              className="text-field peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="email"
              className="peer-focus:font-medium label-field peer-focus:left-0 peer-focus:text-lime-600 peer-focus:dark:text-lime-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
            >
              Email
            </label>
          </div>
          <div className="field group">
            <input
              type="password"
              name="password"
              id="password"
              className="text-field peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="password"
              className="peer-focus:font-medium label-field peer-focus:left-0 peer-focus:text-lime-600 peer-focus:dark:text-lime-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
            >
              Password
            </label>
          </div>
          <div className="field group">
            <input
              type="password"
              name="password_confirmation"
              id="password_confirmation"
              className="text-field peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="password_confirmation"
              className="peer-focus:font-medium label-field peer-focus:left-0 peer-focus:text-lime-600 peer-focus:dark:text-lime-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
            >
              Password Confirmation
            </label>
          </div>
          <div className="field flex flex-col items-center mt-9 group">
            <label
              htmlFor="date-of-birth"
              className="peer-focus:font-medium label-field peer-focus:left-0 peer-focus:text-lime-600 peer-focus:dark:text-lime-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
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
            className="submit-button"
          >
            Submit
          </button>
          <Link to="/" className="mt-3 underline">Back to Home</Link>
        </form>
      </div>
    </div>
  );
}
