import React from 'react';
import {Route, Redirect} from 'react-router-dom';

const PrivateRoute = ({component: Component, auth: auth, db: db, ...rest}) => (
  <Route {...rest} render={(props) => {
    return localStorage.getItem('auth_token') ? <Component {...props} auth = {auth} db = {db} /> : <Redirect to='/signin' />;
  }} />
);

export default PrivateRoute;
