import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            {/* Navbar  */}
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <Link to="/" className="navbar-brand" href="#">
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
                                    fill="#E53170"
                                    stroke="black"
                                />
                                <circle
                                    cx="43"
                                    cy="26"
                                    r="25.5"
                                    fill="#F25F4C"
                                    stroke="black"
                                />
                                <circle
                                    cx="26"
                                    cy="26"
                                    r="25.5"
                                    fill="#FF8906"
                                    stroke="black"
                                />
                            </svg>
                            <div className="Logo-title">E-Learning</div>
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
                        <ul className="navbar-nav ms-lg-auto">
                            <li className="nav-item">
                                <Link
                                    to="/"
                                    className="nav-link"
                                    aria-current="page"
                                >
                                    <span>
                                        <i className="fas fa-user-alt"></i>
                                    </span>
                                    Candidate
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/result" className="nav-link">
                                    <span>
                                        <i className="fas fa-star"></i>
                                    </span>
                                    Result
                                </Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <span>
                                        <i className="fas fa-sign-out-alt"></i>
                                    </span>
                                    Log Out
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
