import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children, requiredRole }) => {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role')?.toUpperCase(); // Ensure role is in uppercase

    if (!token) {
        return <Navigate to="/login" />;
    }

    if (requiredRole && role !== requiredRole) {
        return <Navigate to={role === 'ADMIN' ? '/admin' : '/home'} />;
    }

    return children;
};

export default PrivateRoute;
