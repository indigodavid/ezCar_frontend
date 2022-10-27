/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import InputColor from 'react-input-color';

function AddCarForm() {
  const [color, setColor] = React.useState({});

  return (
    <div className="add-car-wrapper">
      <div className="overlay">
        <form className="add-form">
          <div className="field group">
            <input
              type="text"
              name="floating_name"
              id="floating_name"
              className="text-field peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_name"
              className="peer-focus:font-medium label-field peer-focus:left-0 peer-focus:text-lime-600 peer-focus:dark:text-lime-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
            >
              Name
            </label>
          </div>
          <div className="field group">
            <input
              type="text"
              name="floating_password"
              id="floating_password"
              className="text-field peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_password"
              className="peer-focus:font-medium label-field peer-focus:left-0 peer-focus:text-lime-600 peer-focus:dark:text-lime-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
            >
              Type
            </label>
          </div>
          <div className="field group">
            <input
              type="text"
              name="repeat_password"
              id="floating_repeat_password"
              className="text-field peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_repeat_password"
              className="peer-focus:font-medium label-field peer-focus:left-0 peer-focus:text-lime-600 peer-focus:dark:text-lime-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
            >
              Brand
            </label>
          </div>
          <div className="grid md:grid-cols-1 w-full">
            <div className="field group">
              <input
                type="text"
                name="floating_url"
                id="floating_url"
                className="text-field peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_url"
                className="peer-focus:font-medium label-field peer-focus:left-0 peer-focus:text-lime-600 peer-focus:dark:text-lime-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
              >
                Add the url of an Image
              </label>
            </div>
            <div className="flex z-0 mb-6 w-full group">
              <input
                type="text"
                name="floating_last_name"
                value={color.hex}
                id="floating_last_name"
                className="text-field"
                placeholder=" "
                required
              />
              <InputColor initialValue="#5e72e4" onChange={setColor} placement="right" />

              <label>
                Color
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="submit-button"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddCarForm;
