import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";
import Recover from "../components/Auth/Recover";
import ErrorPage from "../components/Layout/ErrorPage";

import sideroutes from "./SideRoutes";
import Home from "../components/Layout/Home";
import Profile from "../components/Layout/Profile";

import ProtectedRoute from "../ProtectedRoute";

const Router = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("auth_token");
        if (token) {
            setIsLoggedIn(true);
        }
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    name="Home"
                    element={<ProtectedRoute isLoggedIn={isLoggedIn} Child={<Home />} />}>
                    {sideroutes.map((route, idx) => {
                        return (
                            <Route
                                key={idx}
                                path={route.path}
                                exact={route.exact}
                                name={route.name}
                                element={route.element}
                                index={route.index}
                            />
                        );
                    })}
                </Route>
                <Route
                    path="/login"
                    element={
                        isLoggedIn ? <Navigate to="/" /> : <Login setIsLoggedIn={setIsLoggedIn} />
                    }
                />
                <Route path="/register" element={<Register />} />
                <Route path="/recover" element={<Recover />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
