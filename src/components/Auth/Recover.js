import React from "react";

import Logo from "../../assets/Logo.svg";
import "./css/recover.css";

const Recover = () => {
    return (
        <>
            <div className="recover d-flex align-items-center justify-content-center">
                <div className="recover-block d-flex justify-content-center align-items-center">
                    <div className="info d-block text-center">
                        <div className="logo">
                            <img src={Logo} alt="logo" height="70" />
                        </div>
                        <h1>Slaptažodžio susigrąžinimas</h1>
                        <form>
                            <div className="form-group">
                                <label>El. Paštas</label>
                                <input
                                    type="email"
                                    name="email"
                                    className="form-control"
                                    placeholder="pavyzdys@gmail.com"
                                />
                            </div>
                            <div className="form-group">
                                <button type="submit">Atkurti Paskyrą</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Recover;
