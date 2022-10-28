/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css';
import { Calendar, utils } from '@hassanmojab/react-modern-calendar-datepicker';
import RadioInput from '../components/RadioInput';
import getCars from '../data-api/getCars';
import 

function Reserve() {
  const dispatch = useDispatch();
  const { cars } = useSelector((state) => state.cars);
  const formRef = useRef();

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

  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData);

    const reservationDate = `${selectedDayRange.from.year}-${selectedDayRange.from.month}-${selectedDayRange.from.day}`;
    const dueDate = `${selectedDayRange.to.year}-${selectedDayRange.to.month}-${selectedDayRange.to.day}`;
    const reservationInfo = {
      reservation_date: reservationDate,
      due_date: dueDate,
      car_id: data.carRental
    }
    
  };
  return (
    <div className="pb-8">
      <div className="flex flex-col items-center justify-center py-16 ">
        <h1 className=" text-4xl font-bold text-center">Reserve Cars.</h1>
        <p className=" text-xs text-slate-400">
          Please Select a car to reserve form the provided lists.
        </p>
      </div>
      <form
        className=" px-8 flex flex-col gap-4"
        onSubmit={handleSubmit}
        ref={formRef}
      >
        <h3 className="mb-5 text-lg font-medium text-gray-900 dark:text-white">
          Which Car do you want to reserve?
        </h3>
        <ul className="grid gap-6 w-full md:grid-cols-2">
          {cars.map((car) => (
            <RadioInput
              key={car.id}
              id={car.id}
              name={car.name}
              carType={car.car_type}
              carPrice={car.fee_per_day}
            />
          ))}
        </ul>
        <div className=" self-center mt-4">
          <Calendar
            value={selectedDayRange}
            onChange={setSelectedDayRange}
            shouldHighlightWeekends
            minimumDate={utils().getToday()}
          />
        </div>
        <button type="submit" className="submit-button self-center">
          Reserve Car
        </button>
      </form>
    </div>
  );
}

export default Reserve;
