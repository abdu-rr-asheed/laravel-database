import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function Index() {
    return (
        <>
            <Navbar />
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
                        <Link to="/add">
                            <i class="fas fa-plus-square"></i>Add Candidate
                        </Link>
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
