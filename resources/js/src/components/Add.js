import React from "react";

const Add = () => {
    return (
        <>
            {/* Navbar */}

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
                                    class="nav-link"
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

            {/* Form */}

            <div class="row addForm mt-5">
                <div class="col-4 my-2">
                    <form class="form-floating">
                        <input
                            type="email"
                            class="form-control"
                            id="idinty"
                            placeholder="name@example.com"
                        />
                        <label for="idinty">ID</label>
                    </form>
                </div>
                <div class="col-4 my-2">
                    <form class="form-floating">
                        <input
                            type="email"
                            class="form-control"
                            id="floatingInputValue2"
                            placeholder="name@example.com"
                        />
                        <label for="floatingInputValue2">Fast Name</label>
                    </form>
                </div>
                <div class="col-4 my-2">
                    <form class="form-floating">
                        <input
                            type="email"
                            class="form-control"
                            id="floatingInputValue3"
                            placeholder="name@example.com"
                        />
                        <label for="floatingInputValue3">Last Name</label>
                    </form>
                </div>
                <div class="col-4 my-2">
                    <form class="form-floating">
                        <input
                            type="email"
                            class="form-control"
                            id="floatingInputValue4"
                            placeholder="name@example.com"
                        />
                        <label for="floatingInputValue4">Email</label>
                    </form>
                </div>
                <div class="col-4 my-2">
                    <form class="form-floating">
                        <input
                            type="email"
                            class="form-control"
                            id="floatingInputValue5"
                            placeholder="name@example.com"
                        />
                        <label for="floatingInputValue5">Industry</label>
                    </form>
                </div>
                <div class="col-4 my-2">
                    <form class="form-floating">
                        <input
                            type="file"
                            class="form-control"
                            id="floatingInputValue6"
                            placeholder="name@example.com"
                            name="myImage"
                            accept="image/png, image/jpg, image/jpeg"
                        />
                    </form>
                </div>
                <div class="savebtn mt-3">
                    <button type="button" class="btn btn-primary float-end">
                        <i class="fas fa-save"></i> Save
                    </button>
                </div>
            </div>
        </>
    );
};

export default Add;
