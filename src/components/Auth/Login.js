import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Logo from "../../assets/Logo.svg";
import Illustration from "../../assets/Login-Ill.svg";

import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";

import "./css/form.css";
import axios from "axios";

function Login({ setIsLoggedIn }) {
    const navigate = useNavigate();

    const [loginInput, setLogin] = useState({
        email: "",
        password: "",
        error_list: [],
    });

    const handleInput = (e) => {
        e.persist();
        setLogin({ ...loginInput, [e.target.name]: e.target.value });
    };

    const loginSubmit = (e) => {
        e.preventDefault();

        const data = {
            email: loginInput.email,
            password: loginInput.password,
        };

        axios.get("/sanctum/csrf-cookie").then((response) => {
            axios.post(`api/login`, data).then((res) => {
                if (res.data.status === 200) {
                    localStorage.setItem("auth_token", res.data.token);
                    localStorage.setItem("auth_name", res.data.fullname);
                    localStorage.setItem("role", res.data.role);
                    setIsLoggedIn(true);
                    navigate("/");
                } else if (res.data.status === 401) {
                    navigate("/login");
                } else {
                    setLogin({ ...loginInput, error_list: res.data.validation_errors });
                }
            });
        });
    };

    return (
        <>
            <div className="login-page">
                <div className="login-form">
                    <div className="login-design">
                        <div className="logo d-flex justify-content-center">
                            <img src={Logo} alt="logo" height="100" />
                        </div>
                        <div className="title text-center">
                            <h1>Prisijungimas</h1>
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
                        <form onSubmit={loginSubmit}>
                            <div className="form-group">
                                <label>El. Paštas</label>
                                <input
                                    type="email"
                                    name="email"
                                    onChange={handleInput}
                                    value={loginInput.email}
                                    className="form-control"
                                    placeholder="pavyzdys@gmail.com"
                                />
                                <span>{loginInput?.error_list?.email}</span>
                            </div>
                            <div className="form-group">
                                <label>Slaptažodis</label>
                                <input
                                    type="password"
                                    name="password"
                                    onChange={handleInput}
                                    value={loginInput.password}
                                    className="form-control"
                                    placeholder="•••••••"
                                />
                                <span>{loginInput?.error_list?.password}</span>
                                <span>{loginInput?.error_list?.fields}</span>
                            </div>
                            <div className="remember d-flex align-items-center">
                                <p className="d-flex align-items-center">
                                    <input type="checkbox" id="scales" name="scales" />
                                    <span className="ms-3 "> Prisiminti slaptažodį</span>
                                </p>
                                <p className="password">
                                    <Link className="nav-link" to="/recover">
                                        Pamiršai slaptažodį?
                                    </Link>
                                </p>
                            </div>
                            <div className="form-group">
                                <button type="submit">Prisijungti</button>
                            </div>
                        </form>
                        <div className="account d-flex justify-content-center">
                            <p>Neturi susikūręs paskyros?</p>
                            <p>
                                <Link className="nav-link" to="/register">
                                    Susikurti Paskyrą
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="login-ill d-flex justify-content-center">
                    <img src={Illustration} alt="logo" width="50%" />
                </div>
            </div>
        </>
    );
}

export default Login;
