import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ isLoggedIn, Child }) => {
    return isLoggedIn ? Child : <Navigate to="/login" />;
};

export default ProtectedRoute;
