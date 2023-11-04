// ProtectedRoute.js
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import UserContext from '../context/UserContext';


const ProtectedRoute = ({ children }) => {
  const { authToken } = useContext(UserContext);

  if (!authToken) {
    // Redirect them to the /login page if not authenticated
    return <Navigate to="/login" replace />;
  }

  return children;
};
export default ProtectedRoute;
