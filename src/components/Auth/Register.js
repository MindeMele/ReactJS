import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Logo from "../../assets/Logo.svg";
import Illustration from "../../assets/Register-Ill.svg";

import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";

import "./css/form.css";
import axios from "axios";

function Register() {
    const navigate = useNavigate();

    const [registerInput, setRegister] = useState({
        fullname: "",
        email: "",
        password: "",
        error_list: [],
    });

    const handleInput = (e) => {
        e.persist();
        setRegister({ ...registerInput, [e.target.name]: e.target.value });
    };

    const registerSubmit = (e) => {
        e.preventDefault();

        const data = {
            fullname: registerInput.fullname,
            email: registerInput.email,
            password: registerInput.password,
        };

        axios.get("/sanctum/csrf-cookie").then((response) => {
            axios.post(`/api/register`, data).then((res) => {
                if (res.data.status === 200) {
                    localStorage.setItem("auth_token", res.data.token);
                    localStorage.setItem("auth_name", res.data.fullname);
                    navigate("/login");
                } else {
                    setRegister({ ...registerInput, error_list: res.data.validation_errors });
                }
            });
        });
    };

    return (
        <>
            <div className="register-page">
                <div className="register-form">
                    <div className="register-design">
                        <div className="logo d-flex justify-content-center">
                            <img src={Logo} alt="logo" height="100" />
                        </div>
                        <div className="title text-center">
                            <h1>Registracija</h1>
                        </div>
                        <div className="social-media d-flex">
                            <button className="google social-btn">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <FcGoogle />
                                <p>Google</p>
                            </button>
                            <button className="facebook social-btn">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <FaFacebookF color="385C8E" />
                                <p>Facebook</p>
                            </button>
                        </div>
                        <div className="line-design">
                            <p>
                                <span>Arba</span>
                            </p>
                        </div>
                        <form method="" onSubmit={registerSubmit}>
                            <div className="form-group">
                                <label>Pilnas Vardas</label>
                                <input
                                    type="text"
                                    name="fullname"
                                    onChange={handleInput}
                                    value={registerInput.fullname}
                                    className="form-control"
                                    placeholder="Mindaugas Melėšis"
                                />
                                <span>{registerInput?.error_list?.fullname}</span>
                            </div>
                            <div className="form-group">
                                <label>El. Paštas</label>
                                <input
                                    type="email"
                                    name="email"
                                    onChange={handleInput}
                                    value={registerInput.email}
                                    className="form-control"
                                    placeholder="pavyzdys@gmail.com"
                                />
                                <span>{registerInput?.error_list?.email}</span>
                            </div>
                            <div className="form-group">
                                <label>Slaptažodis</label>
                                <input
                                    type="password"
                                    name="password"
                                    onChange={handleInput}
                                    value={registerInput.password}
                                    className="form-control"
                                    placeholder="•••••••"
                                />
                                <span>{registerInput?.error_list?.password}</span>
                            </div>
                            {/* <div className="form-group">
                                <label>Pakartokite Slaptažodį</label>
                                <input
                                    type="password"
                                    name="repeat-password"
                                    className="form-control"
                                    placeholder="•••••••"
                                />
                            </div> */}
                            <div className="form-group">
                                <button type="submit">Užsiregistruoti</button>
                            </div>
                        </form>
                        <div className="account d-flex justify-content-center">
                            <p>Turi susikūręs paskyrą?</p>
                            <p>
                                <Link className="nav-link" to="/login">
                                    Prisijungti
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="register-ill d-flex justify-content-center">
                    <img src={Illustration} alt="logo" width="50%" />
                </div>
            </div>
        </>
    );
}

export default Register;
