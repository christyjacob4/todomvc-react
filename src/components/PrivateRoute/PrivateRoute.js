import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, auth : auth, ...rest }) => (
  <Route {...rest} render={props => {
    //   auth.isAuthenticated = true
      return localStorage.getItem("auth_token") ?  <Component {...props} auth = {auth} /> : <Redirect to='/signin' />;
  }} />
);

export default PrivateRoute;
