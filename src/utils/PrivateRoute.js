import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render={() =>
        (auth === true ? <Component {...rest} /> : <Redirect to="/signin" />)}
  />
);

PrivateRoute.propTypes = {
  auth: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};

export default PrivateRoute;
