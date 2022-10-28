import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Reservation from './pages/Reservation';
import MenuOpener from './components/MenuOpener';
import Navbar from './components/Navbar';
import SignUp from './pages/SignUp/SignUp';
import Splash from './pages/Splash';
import PrivateRoutes from './components/PrivateRoutes';
import AddCarForm from './pages/AddCar/AddCarForm';
import Cars from './pages/Cars';
import DeleteCar from './pages/DeleteCar/DeleteCar';
import MyReservations from './pages/MyReservations';
import Reserve from './pages/Reserve';

function App() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div>
      { (location.pathname !== '/' && location.pathname !== '/sign_up')
        && (
        <>
          <MenuOpener open={open} toggleMenu={toggleMenu} />
          <Navbar open={open} />
        </>
        )}
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/sign_up" element={<SignUp />} />
        <Route
          path="/add_car"
          element={(
            <PrivateRoutes requiresAdmin>
              <AddCarForm />
            </PrivateRoutes>
          )}
        />
        <Route
          path="/delete_car"
          element={(
            <PrivateRoutes requiresAdmin>
              <DeleteCar />
            </PrivateRoutes>
          )}
        />
        <Route
          path="/cars"
          element={(
            <PrivateRoutes>
              <Cars />
            </PrivateRoutes>
          )}
        />
        <Route
          path="/cars/reservation/:id"
          element={(
            <PrivateRoutes>
              <Reservation />
            </PrivateRoutes>
          )}
        />
        <Route
          path="/reserve"
          element={(
            <PrivateRoutes>
              <Reserve />
            </PrivateRoutes>
          )}
        />
        <Route
          path="/my_reservations"
          element={(
            <PrivateRoutes>
              <MyReservations />
            </PrivateRoutes>
          )}
        />
        <Route
          path="/my_reservations/reservation/:id"
          element={(
            <PrivateRoutes>
              <Reservation />
            </PrivateRoutes>
          )}
        />
      </Routes>
    </div>
  );
}

export default App;
