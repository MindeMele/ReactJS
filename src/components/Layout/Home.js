import React from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";

import "./style/home.css";

const Home = () => {
    return (
        <>
            <div className="home-layout d-flex">
                <div className="left-side">
                    <Sidebar />
                </div>
                <div className="right-side">
                    <main>
                        <Outlet />
                    </main>
                </div>
            </div>
        </>
    );
};

export default Home;
