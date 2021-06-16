import React from "react";
import ReactDOM from "react-dom";

function Index() {
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

            {/* Search Bar  */}
            <div class="searchbar d-flex justify-content-between my-5">
                <div class="input-group mb-3 w-25">
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Search..."
                        aria-label="Search..."
                        aria-describedby="button-addon2"
                    />
                    <button
                        class="btn btn-primary"
                        type="button"
                        id="button-addon2"
                    >
                        <i class="fas fa-search"></i>
                    </button>
                </div>
                <div class="addbtn">
                    <button type="button" class="btn btn-primary">
                        <a href="addCandidate.html">
                            <i class="fas fa-plus-square"></i>Add Candidate
                        </a>
                    </button>
                </div>
            </div>

            {/* Table */}

            <div class="Chart">
                <div class="table-responsive">
                    <table class="table table-dark table-striped text-center">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">industry</th>
                                <th scope="col">P.P</th>
                                <th scope="col">Delete</th>
                                <th scope="col">Edit</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Abdur</td>
                                <td>Rasheed</td>
                                <td>abdurrasheed430@gmail.com</td>
                                <td>Gampola</td>
                                <td>
                                    <div
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                    >
                                        <i class="fas fa-clone"></i>
                                    </div>
                                </td>
                                <td>
                                    <i class="fas fa-window-close"></i>
                                </td>
                                <td>
                                    <i class="fas fa-edit"></i>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Modal */}
            <div
                class="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">
                                Abdur Rasheed
                            </h5>
                            <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div class="modal-body d-flex justify-content-center">
                            <img
                                src="images/rasheed.jpg"
                                alt="abdurrasheed"
                                class="img-fluid w-75"
                            ></img>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Index;

if (document.getElementById("app")) {
    ReactDOM.render(<Index />, document.getElementById("app"));
}
