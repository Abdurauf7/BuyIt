import React from "react";
import auth from "../../routes/UserInformation/auth";
import { Redirect, Route } from "react-router-dom";
export const PrivateUserRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (auth.isAuthenticated()) {
          return <Component {...props} {...rest} />;
        } else {
          return <Redirect to="/" />;
        }
      }}
    />
  );
};
