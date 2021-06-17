import React from "react";
import Navbar from "./Navbar";
import Search from "./Search";
import BtnCandidate from "./BtnCandidate";
import rasheed from "../images/rasheed.jpg";

const Index = () => {
    return (
        <>
            <Navbar />
            {/* Search Bar  */}
            <div className="searchbar d-flex justify-content-between my-5">
                <div className="input-group mb-3 w-25">
                    <Search />
                </div>
                <div className="addbtn">
                    <BtnCandidate />
                </div>
            </div>

            {/* Table */}

            <div className="Chart">
                <div className="table-responsive">
                    <table className="table table-dark table-striped text-center">
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
                                        <i className="fas fa-clone"></i>
                                    </div>
                                </td>
                                <td>
                                    <i className="fas fa-window-close"></i>
                                </td>
                                <td>
                                    <i className="fas fa-edit"></i>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Modal */}
            <div
                className="modal fade"
                id="exampleModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                Abdur Rasheed
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body d-flex justify-content-center">
                            <img src={rasheed} alt="Logo" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Index;
