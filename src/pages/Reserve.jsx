/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useState } from 'react';
import '@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css';
import { Calendar, utils } from '@hassanmojab/react-modern-calendar-datepicker';

function Reserve() {
  const current = new Date();
  const defaultFrom = {
    year: current.getFullYear(),
    month: current.getMonth() + 1,
    day: current.getDate(),
  };

  const defaultTo = {
    year: current.getFullYear(),
    month: current.getMonth() + 1,
    day: current.getDate(),
  };
  const defaultRange = {
    from: defaultFrom,
    to: defaultTo,
  };
  const [selectedDayRange, setSelectedDayRange] = useState(defaultRange);

  return (
    <div className="pb-8">
      <div className="flex flex-col items-center justify-center py-16 md:pb-32">
        <h1 className=" text-4xl font-bold text-center">Reserve Cars.</h1>
        <p className=" text-xs text-slate-400">
          Please Select a car to reserve form the provided lists.
        </p>
      </div>
      <form className=" px-8 flex flex-col">
        <h3 className="mb-5 text-lg font-medium text-gray-900 dark:text-white">
          Which Car do you want to reserve?
        </h3>
        <ul className="grid gap-6 w-full md:grid-cols-2">
          <li>
            <input
              type="radio"
              id="hosting-small"
              name="hosting"
              value="hosting-small"
              className="hidden peer"
              required
            />
            <label
              htmlFor="hosting-small"
              className="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <div className="block">
                <div className="w-full text-lg font-semibold">0-50 MB</div>
                <div className="w-full">Good for small websites</div>
              </div>
              <svg
                aria-hidden="true"
                className="ml-3 w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
          </li>
          <li>
            <input
              type="radio"
              id="hosting-big"
              name="hosting"
              value="hosting-big"
              className="hidden peer"
            />
            <label
              htmlFor="hosting-big"
              className="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <div className="block">
                <div className="w-full text-lg font-semibold">500-1000 MB</div>
                <div className="w-full">Good for large websites</div>
              </div>
              <svg
                aria-hidden="true"
                className="ml-3 w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
          </li>
        </ul>
        <div className=" self-center mt-4">
          <Calendar
            value={selectedDayRange}
            onChange={setSelectedDayRange}
            shouldHighlightWeekends
            minimumDate={utils().getToday()}
          />
        </div>
      </form>
    </div>
  );
}

export default Reserve;
