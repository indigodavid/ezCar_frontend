import React from 'react';
import CarCard from '../../components/CarCard';

export default function DeleteCar() {
  return (
    <div>
      <CarCard
        img="https://imgd-ct.aeplcdn.com/370x208/n/cw/ec/54399/exterior-right-front-three-quarter-10.jpeg?q=75"
        name="Hyundai Venue"
        carType="Kia Sonet"
        carBrand="Hyundai"
        carPrice="40000"
        carColor="Red"
      />
      <button
        type="submit"
        className="self-end py-2 px-2 bg-lime-500 rounded-full my-4"
      >
        Delete
      </button>
    </div>
  );
}

DeleteCar.defaultProps = {

};
