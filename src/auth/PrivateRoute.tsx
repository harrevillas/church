import React, { ReactElement } from "react";
import { Route, Navigate } from "react-router-dom";

interface PrivateRouteProps {
  element: ReactElement; 
  isAuthenticated: boolean; 
  [key: string]: any; 
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element, isAuthenticated, ...rest }) => {
  return isAuthenticated ? (
    <Route {...rest} element={element} />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default PrivateRoute;
