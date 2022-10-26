import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Navigate, useLocation,
} from 'react-router-dom';

export default function PrivateRoutes({ children }) {
  const location = useLocation();
  const { user, status } = useSelector((state) => state.user);

  if (status === 'loading') {
    return <div>Checking Authentication</div>;
  }
  if ((!user) || (!user.id) || (status === 'success' && !user.id)) {
    return <Navigate to="/" state={{ from: location }} />;
  }

  return children;
}

PrivateRoutes.propTypes = {
  children: PropTypes.element.isRequired,
};
