/* eslint-disable jsx-a11y/label-has-associated-control */

import React from 'react';
import { useDispatch } from 'react-redux';
import userSlice from '../../redux/UserSlice';

export default function LogIn() {
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData(formRef.current);
		const data = Object.fromEntries(formData);
		const userInfo = {
			user: { email: data.email, password: data.password },
		};
		dispatch(userSlice.logInUser(userInfo));
	};

	return (
		<form ref={formRef} className="add-form" onSubmit={handleSubmit}>
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
			<button
				type="submit"
				className="focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-fit sm:w-auto px-5 py-2.5 text-center submit-button"
			>
				Submit
			</button>
		</form>
	);
}
