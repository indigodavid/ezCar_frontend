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
            <PrivateRoutes>
              <AddCarForm />
            </PrivateRoutes>
          )}
        />
        <Route
          path="/reservation"
          element={(
            <PrivateRoutes>
              <Reservation />
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
      </Routes>
    </div>
  );
}

export default App;
