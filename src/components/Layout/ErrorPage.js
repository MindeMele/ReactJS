import React from "react";

import Logo from "../../assets/Logo.svg";
import "./style/error.css";

const ErrorPage = () => {
    return (
        <>
            <div className="fail d-flex align-items-center justify-content-center">
                <div className="fail-block d-flex justify-content-center align-items-center">
                    <div className="info d-block text-center">
                        <div className="logo">
                            <img src={Logo} alt="logo" height="70" />
                        </div>
                        <h1>Tokio Puslapio Nėra</h1>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ErrorPage;
