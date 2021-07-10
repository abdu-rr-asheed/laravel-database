import React, { Component } from "react";
import axios from "axios";
import Search from "./Search";
import BtnCandidate from "./BtnCandidate";
import Navbar from "./Navbar";
import rasheed from "../images/rasheed.jpg";
import { Link } from "react-router-dom";

class Index extends Component {
    state = {
        students: [],
        // loading: true,
    };

    async componentDidMount() {
        document.title = "E-learnig System";
        const res = await axios.get("http://127.0.0.1:8000/api/students");
        // console.log(res);
        if (res.data.status === 200) {
            this.setState({
                students: res.data.students,
                // loading: false,
            });
        }
    }

    deleteStudent = async (e, id) => {
        const thidClickFinda = e.currentTarget;
        thidClickFinda.disabled = true;
        // thidClickFinda.innerText =
        //     '<i className="fas fa-window-close text-white"></i>';
        const res = await axios.delete(
            `http://127.0.0.1:8000/api/delete-student/${id}`
        );
        if (res.data.status === 200) {
            thidClickFinda.closest("tr").remove();
            console.log(res.data.message);
        }
    };
    render() {
        // var student_HTMLTABLE = "";
        // if (this.state.loading) {
        //   student_HTMLTABLE = (
        //     <tr>
        //       <td colSpan="7">
        //         <h2>Loading...</h2>
        //       </td>
        //     </tr>
        //   );
        // } else {
        var student_HTMLTABLE = this.state.students.map((item) => {
            return (
                // <tr>
                //     <th scope="row">1</th>
                //     <td>Abdur</td>
                //     <td>Rasheed</td>
                //     <td>abdurrasheed430@gmail.com</td>
                //     <td>Gampola</td>
                //     <td>
                //         <div
                //             data-bs-toggle="modal"
                //             data-bs-target="#exampleModal"
                //         >
                //             <i className="fas fa-clone"></i>
                //         </div>
                //     </td>
                //     <td>
                //         <Link to="/updateCandidate">
                //             <i className="fas fa-edit"></i>
                //         </Link>
                //     </td>
                //     <td>
                //         <Link to="/updateCandidate">
                //             <i className="fas fa-window-close"></i>
                //         </Link>
                //     </td>
                // </tr>
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.first_Name}</td>
                    <td>{item.last_Name}</td>
                    <td>{item.email}</td>
                    <td>{item.industry}</td>
                    <td>
                        <img
                            src={
                                "http://127.0.0.1:8000/images/students/" +
                                item.profile_photo
                            }
                            alt={item.last_Name}
                            loading="lazy"
                            width="100px"
                        />
                    </td>
                    <td>
                        <Link to={`edit-student/${item.id}`} className="btn">
                            <i className="fas fa-edit"></i>
                        </Link>
                    </td>
                    <td>
                        <div
                            onClick={(e) => this.deleteStudent(e, item.id)}
                            className="btn"
                        >
                            <i className="fas fa-window-close"></i>
                        </div>
                    </td>
                </tr>
            );
        });
        // }
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
                                    <th scope="col">Edit</th>
                                    <th scope="col">Delete</th>
                                </tr>
                            </thead>
                            {/* <tbody> */}
                            {/* <tr>
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
                                        <Link to="/updateCandidate">
                                            <i className="fas fa-edit"></i>
                                        </Link>
                                    </td>
                                    <td>
                                        <Link to="/updateCandidate">
                                            <i className="fas fa-window-close"></i>
                                        </Link>
                                    </td>
                                </tr> */}
                            {/* </tbody> */}
                            <tbody>{student_HTMLTABLE}</tbody>
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
                                <h5
                                    className="modal-title"
                                    id="exampleModalLabel"
                                >
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
                                <img
                                    src={rasheed}
                                    alt="Logo"
                                    className="img-fluid w-75"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Index;
