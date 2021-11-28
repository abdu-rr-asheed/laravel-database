import React from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
// import { Redirect } from "react-router";
import axios from "axios";
import swal from "sweetalert";

const Navbar = () => {
    const history = useHistory();

    const logoutSubmit = (e) => {
        e.preventDefault();

        axios.post(`/api/logout`).then((res) => {
            if (res.data.status === 200) {
                localStorage.removeItem("auth_token");
                localStorage.removeItem("auth_name");
                swal("Success", res.data.message, "success");
                // <Redirect to="/" />;
                history.push("/");
            }
        });
    };

    var AuthButton = "";
    if (localStorage.getItem("auth_token")) {
        AuthButton = (
            <>
                <li className="nav-item">
                    <NavLink to="/user/candidate" className="nav-link">
                        <span className="me-2">
                            <i className="fas fa-user ml-2"></i>
                        </span>
                        Candidate
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/user/result" className="nav-link">
                        <span className="me-2">
                            <i className="fas fa-star ml-2"></i>
                        </span>
                        Result
                    </NavLink>
                </li>
                <li className="nav-item">
                    <button
                        type="button"
                        onClick={logoutSubmit}
                        className="nav-link btn btn-sm btn-warning text-dark fs-6"
                        to="/"
                    >
                        <span className="me-2">
                            <i className="fas fa-sign-out-alt"></i>
                        </span>
                        {localStorage.getItem("auth_name")}
                    </button>
                </li>
            </>
        );
    }

    return (
        <>
            {/* Navbar  */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link to="/" className="navbar-brand" to="/">
                        <div className="logo d-flex align-items-center">
                            <svg
                                width="76"
                                height="42"
                                viewBox="0 0 86 52"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle
                                    cx="60"
                                    cy="26"
                                    r="25.5"
                                    fill="#e3342f"
                                    stroke="white"
                                />
                                <circle
                                    cx="43"
                                    cy="26"
                                    r="25.5"
                                    fill="#3490dc"
                                    stroke="white"
                                />
                                <circle
                                    cx="26"
                                    cy="26"
                                    r="25.5"
                                    fill="#ffed4a"
                                    stroke="white"
                                />
                            </svg>
                            <div className="Logo-title fw-bolder ms-2 fs-4">
                                E-Learning
                            </div>
                        </div>
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav ms-lg-auto fs-5">
                            {AuthButton}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
