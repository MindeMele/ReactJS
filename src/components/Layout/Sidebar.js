import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate, NavLink } from "react-router-dom";

import { RiArrowRightSLine, RiLogoutBoxFill, RiMoonLine, RiSunLine } from "react-icons/ri";
import Icon from "../../assets/icon.png";
import Men from "../../assets/men.jpg";

import links from "../../data/Links";
import "./style/sidebar.css";

const Home = () => {
    const navigate = useNavigate();

    // Username
    const [username, setUsername] = useState("");
    const [user_role, setRole] = useState("");

    useEffect(() => {
        axios.get(`/api/view_user`).then((res) => {
            setUsername(res.data.fullname);
            setRole(res.data.role);
        });
    }, []);

    // Logout

    const logoutSubmit = (e) => {
        e.preventDefault();

        axios.post(`api/logout`).then((res) => {
            if (res.data.status === 200) {
                localStorage.removeItem("auth_token");
                localStorage.removeItem("auth_name");
                localStorage.removeItem("role");
                navigate("/login");
                window.location.reload(false);
            } else {
            }
        });
    };

    // Styles

    const [navEdit, setNavEdit] = useState(false);
    const [bodyDark, setBodyDark] = useState(false);

    const body = document.querySelector("body");

    const changeSidebar = (e) => {
        setNavEdit(!navEdit);
    };

    const changeTheme = (e) => {
        body.classList.toggle("dark");
        setBodyDark(!bodyDark);
    };

    return (
        <>
            <div className="sidebar-box">
                <div className={"sidebar-layout " + (navEdit ? "close" : "open")}>
                    <header>
                        <div className="image-text">
                            <span className="image">
                                <img src={Icon} alt="logo" />
                            </span>
                            <div className="text header-text">
                                <span className="name">Techwork</span>
                            </div>
                        </div>
                        <i onClick={changeSidebar} className="toggle">
                            <RiArrowRightSLine />
                        </i>
                    </header>
                    <div className="menu-bar">
                        <div className="menu">
                            <ul className="menu-links">
                                {links.map((link) => {
                                    return (
                                        <li key={link.id}>
                                            <NavLink
                                                className={({ isActive }) =>
                                                    isActive ? "link-active nav-link" : "nav-link"
                                                }
                                                to={link.link}>
                                                <i className="icon">{link.icon}</i>
                                                <span className="text nav-text">{link.text}</span>
                                            </NavLink>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                        <div className="bottom-content">
                            <li className="profile d-flex">
                                <Link to="/profile">
                                    <img src={Men} alt="" />
                                </Link>
                                <div className="profile-info-block">
                                    <h1>{username}</h1>
                                    <p>{user_role}</p>
                                </div>
                            </li>
                            <li onClick={logoutSubmit}>
                                <Link to="/">
                                    <i className="icon">
                                        <RiLogoutBoxFill />
                                    </i>
                                    <span className="text nav-text">Atsijungti</span>
                                </Link>
                            </li>
                            <li className="mode">
                                <div className="moon-sun">
                                    <i className="moon icon">
                                        <RiMoonLine />
                                    </i>
                                    <i className="sun icon">
                                        <RiSunLine />
                                    </i>
                                </div>
                                <span className="mode-text text">
                                    {bodyDark ? "Light Mode" : "Dark Mode"}
                                </span>
                                <div onClick={changeTheme} className="toggle-switch">
                                    <span className="switch"></span>
                                </div>
                            </li>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
