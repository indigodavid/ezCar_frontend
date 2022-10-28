import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CarDetail from '../components/CarDetail';
import getCars from '../data-api/getCars';

function Reservation() {
  const dispatch = useDispatch();
  const { cars } = useSelector((state) => state.cars);

  const [ReserveOpener, setReserveOpener] = useState(true);

  const toggleReservation = () => {
    setReserveOpener(!ReserveOpener);
  };

  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);

  const { id } = useParams();

  const car = cars.filter((car) => car.id === Number(id))[0];

  return (
    <section
      className="flex flex-col justify-between md:flex-row p-4  md:p-8 md:pt-24 "
      id="Reservation"
    >
      {car && car.id && (
        <>
          <img src={car.image} alt={car.name} className="flex-1" />
          <CarDetail
            id={Number(id)}
            name={car.name}
            carType={car.car_type}
            carBrand={car.brand}
            carPrice={car.fee_per_day}
            carColor={car.color}
            toggleReservation={toggleReservation}
            ReserveOpener={ReserveOpener}
          />
        </>
      )}
    </section>
  );
}

export default Reservation;
