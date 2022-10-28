/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useState } from 'react';
import '@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css';
import { Calendar, utils } from '@hassanmojab/react-modern-calendar-datepicker';
import RadioInput from '../components/RadioInput';

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
      <form className=" px-8 flex flex-col gap-4">
        <h3 className="mb-5 text-lg font-medium text-gray-900 dark:text-white">
          Which Car do you want to reserve?
        </h3>
        <ul className="grid gap-6 w-full md:grid-cols-2">
          <RadioInput
            id={1}
            name="Hyundai Venue"
            carType="Kia Sonet"
            carPrice="40"
          />
          <RadioInput
            id={2}
            name="Hyundai 2"
            carType="Kia Sonet"
            carPrice="40"
          />
        </ul>
        <div className=" self-center mt-4">
          <Calendar
            value={selectedDayRange}
            onChange={setSelectedDayRange}
            shouldHighlightWeekends
            minimumDate={utils().getToday()}
          />
        </div>
        <button type="button" className="submit-button self-center">
          Reserve Car
        </button>
      </form>
    </div>
  );
}

export default Reserve;
