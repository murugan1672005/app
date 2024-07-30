import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children, login }) => {
    return login ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
