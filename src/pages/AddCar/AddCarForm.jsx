/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import InputColor from 'react-input-color';
import createCars from '../../data-api/createCars';

function AddCarForm() {
  const [color, setColor] = React.useState({});
  const cars = useSelector((state) => state.cars);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData);
    const carInfo = {
      car: {
        name: data.name,
        car_type: data.car_type,
        brand: data.brand,
        fee_per_day: data.fee_per_day,
        color: data.color,
        image: data.image,
        rented: false,
      },
    };
    dispatch(createCars(carInfo));
    navigate('/cars');
  };

  useEffect(() => {
    if (cars.status === 'success') {
      try {
        if (cars.cars.error) {
          setErrorMessage(cars.cars.error);
        }
      } catch (e) {
        setErrorMessage(e.error);
      }
    }
  }, [cars]);

  return (
    <div className="add-car-wrapper">
      <div className="overlay">
        <form ref={formRef} className="add-form" onSubmit={handleSubmit}>
          {errorMessage && <div className="alert">{errorMessage}</div>}
          <div className="field group">
            <input
              type="text"
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
              name="car_type"
              id="car_type"
              className="text-field peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="car_type"
              className="peer-focus:font-medium label-field peer-focus:left-0 peer-focus:text-lime-600 peer-focus:dark:text-lime-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
            >
              Car Type
            </label>
          </div>
          <div className="field group">
            <input
              type="text"
              name="brand"
              id="brand"
              className="text-field peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="brand"
              className="peer-focus:font-medium label-field peer-focus:left-0 peer-focus:text-lime-600 peer-focus:dark:text-lime-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
            >
              Brand
            </label>
          </div>
          <div className="grid md:grid-cols-1 w-full">
            <div className="field group">
              <input
                type="text"
                name="image"
                id="image"
                className="text-field peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="image"
                className="peer-focus:font-medium label-field peer-focus:left-0 peer-focus:text-lime-600 peer-focus:dark:text-lime-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
              >
                Add the url of an Image
              </label>
            </div>
            <div className="field group">
              <input
                type="number"
                step=".01"
                name="fee_per_day"
                min={0}
                id="fee_per_day"
                className="text-field peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="fee_per_day"
                className="peer-focus:font-medium label-field peer-focus:left-0 peer-focus:text-lime-600 peer-focus:dark:text-lime-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
              >
                Fee per day
              </label>
            </div>
            <div className="flex z-0 mb-6 w-full gap-2 items-center group">
              <InputColor initialValue="#5e72e4" onChange={setColor} placement="right" />
              <input
                type="text"
                name="color"
                value={color.hex}
                id="color"
                className="text-field"
                placeholder=" "
                required
              />

              <label className="hidden">
                Color
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="submit-button"
          >
            Create Car
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddCarForm;
