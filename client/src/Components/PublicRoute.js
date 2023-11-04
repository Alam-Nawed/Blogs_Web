// PublicRoute.js
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import  UserContext from '../context/UserContext'; // Adjust the path as necessary

 const PublicRoute = ({ children }) => {
  const { authToken } = useContext(UserContext);

  if (authToken) {
    // Redirect them to the home page if authenticated
    return <Navigate to="/" replace />;
  }

  return children;
};
export default PublicRoute;