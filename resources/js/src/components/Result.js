import React from "react";
import Navbar from "./Navbar";
import Search from "./Search";
import BtnResult from "./btnResult";

const Result = () => {
    return (
        <>
            <Navbar />
            <div className="row">
                {/* Search Bar  */}
                <div className="col-md-4 col-12 searchbar my-md-5 my-2">
                    <div className="input-group mb-3">
                        <Search />
                    </div>
                </div>
                <div className="col-md-8 col-12 my-md-5 my-2">
                    <div className="addbtn float-end ">
                        <BtnResult />
                    </div>
                </div>
            </div>

            {/* Table */}

            <div className="Chart">
                <div className="table-responsive">
                    <table className="table table-dark table-striped text-center text-nowrap">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">Know.Area</th>
                                <th scope="col">Assessor</th>
                                <th scope="col">Overall</th>
                                <th scope="col">Date</th>
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
                                <td>Gampola</td>
                                <td>11.11.2021</td>
                                <td>
                                    <i className="fas fa-window-close"></i>
                                </td>
                                <td>
                                    <i className="fas fa-edit"></i>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Abdur</td>
                                <td>Rasheed</td>
                                <td>abdurrasheed430@gmail.com</td>
                                <td>Gampola</td>
                                <td>Gampola</td>
                                <td>11.11.2021</td>
                                <td>
                                    <i className="fas fa-window-close"></i>
                                </td>
                                <td>
                                    <i className="fas fa-edit"></i>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Abdur</td>
                                <td>Rasheed</td>
                                <td>abdurrasheed430@gmail.com</td>
                                <td>Gampola</td>
                                <td>Gampola</td>
                                <td>11.11.2021</td>
                                <td>
                                    <i className="fas fa-window-close"></i>
                                </td>
                                <td>
                                    <i className="fas fa-edit"></i>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">4</th>
                                <td>Abdur</td>
                                <td>Rasheed</td>
                                <td>abdurrasheed430@gmail.com</td>
                                <td>Gampola</td>
                                <td>Gampola</td>
                                <td>11.11.2021</td>
                                <td>
                                    <i className="fas fa-window-close"></i>
                                </td>
                                <td>
                                    <i className="fas fa-edit"></i>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">5</th>
                                <td>Abdur</td>
                                <td>Rasheed</td>
                                <td>abdurrasheed430@gmail.com</td>
                                <td>Gampola</td>
                                <td>Gampola</td>
                                <td>11.11.2021</td>
                                <td>
                                    <i className="fas fa-window-close"></i>
                                </td>
                                <td>
                                    <i className="fas fa-edit"></i>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">6</th>
                                <td>Abdur</td>
                                <td>Rasheed</td>
                                <td>abdurrasheed430@gmail.com</td>
                                <td>Gampola</td>
                                <td>Gampola</td>
                                <td>11.11.2021</td>
                                <td>
                                    <i className="fas fa-window-close"></i>
                                </td>
                                <td>
                                    <i className="fas fa-edit"></i>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">7</th>
                                <td>Abdur</td>
                                <td>Rasheed</td>
                                <td>abdurrasheed430@gmail.com</td>
                                <td>Gampola</td>
                                <td>Gampola</td>
                                <td>11.11.2021</td>
                                <td>
                                    <i className="fas fa-window-close"></i>
                                </td>
                                <td>
                                    <i className="fas fa-edit"></i>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">8</th>
                                <td>Abdur</td>
                                <td>Rasheed</td>
                                <td>abdurrasheed430@gmail.com</td>
                                <td>Gampola</td>
                                <td>Gampola</td>
                                <td>11.11.2021</td>
                                <td>
                                    <i className="fas fa-window-close"></i>
                                </td>
                                <td>
                                    <i className="fas fa-edit"></i>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">9</th>
                                <td>Abdur</td>
                                <td>Rasheed</td>
                                <td>abdurrasheed430@gmail.com</td>
                                <td>Gampola</td>
                                <td>Gampola</td>
                                <td>11.11.2021</td>
                                <td>
                                    <i className="fas fa-window-close"></i>
                                </td>
                                <td>
                                    <i className="fas fa-edit"></i>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">10</th>
                                <td>Abdur</td>
                                <td>Rasheed</td>
                                <td>abdurrasheed430@gmail.com</td>
                                <td>Gampola</td>
                                <td>Gampola</td>
                                <td>11.11.2021</td>
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
        </>
    );
};

export default Result;
