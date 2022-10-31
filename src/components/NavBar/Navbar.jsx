import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Footer from '../Footer/Footer';
import Logo from '../Logo/Logo';
import LogOut from '../Buttons/LogOut';

const Navbar = (props) => {
  const { open } = props;
  const { user } = useSelector((state) => state.user);
  return (
    <nav className={open ? '' : '-translate-x-48'}>
      <Logo />
      <ul>
        <li>
          <NavLink to="cars">Cars</NavLink>
        </li>
        <li>
          <NavLink to="reserve">Reserve</NavLink>
        </li>
        <li>
          <NavLink to="my_reservations">My Reservations</NavLink>
        </li>
        {user && user.role === 'admin' && (
          <>
            <li>
              <NavLink to="add_car">Add Car</NavLink>
            </li>
            <li>
              <NavLink to="delete_car">Delete Car</NavLink>
            </li>
          </>
        )}
        <li>
          <LogOut />
        </li>
      </ul>
      <Footer />
    </nav>
  );
};

Navbar.propTypes = {
  open: PropTypes.bool.isRequired,
};

export default Navbar;
