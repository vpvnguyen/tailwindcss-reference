import React from "react";
import { Route, Redirect } from "react-router";

interface RouteProps {
  children: React.ReactNode;
  path: string;
  exact?: boolean;
}

export const AuthRoute = ({ children, path, exact }: RouteProps) => {
  // TODO: check for access token
  const placeholderAuth = true;

  if (!placeholderAuth) {
    return <Redirect to='/login' />;
  }

  return (
    <Route exact={exact} path={path}>
      {children}
    </Route>
  );
};
