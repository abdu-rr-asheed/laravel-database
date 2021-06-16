import React from "react";

const Navbar = () => {
    return (
        <>
            {/* Navbar  */}
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container">
                    <a class="navbar-brand" href="#">
                        <div class="logo d-flex align-items-center">
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
                            <div class="Logo-title">E-Learning</div>
                        </div>
                    </a>
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div
                        class="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul class="navbar-nav ms-lg-auto">
                            <li class="nav-item">
                                <a
                                    class="nav-link active"
                                    aria-current="page"
                                    href="index.html"
                                >
                                    <span>
                                        <i class="fas fa-user-alt"></i>
                                    </span>
                                    Candidate
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="Result.html">
                                    <span>
                                        <i class="fas fa-star"></i>
                                    </span>
                                    Result
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    <span>
                                        <i class="fas fa-sign-out-alt"></i>
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
