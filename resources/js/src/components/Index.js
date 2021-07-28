import React, { Component } from "react";
import axios from "axios";
import Search from "./Search";
import BtnCandidate from "./BtnCandidate";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

class Index extends Component {
    state = {
        students: [],
    };

    async componentDidMount() {
        document.title = "E-learnig System";
        const res = await axios.get("http://127.0.0.1:8000/api/students");
        if (res.data.status === 200) {
            this.setState({
                students: res.data.students,
            });
        }
    }

    deleteStudent = async (e, id) => {
        const thidClickFinda = e.currentTarget;
        thidClickFinda.disabled = true;
        const res = await axios.delete(
            `http://127.0.0.1:8000/api/delete-student/${id}`
        );
        if (res.data.status === 200) {
            thidClickFinda.closest("tr").remove();
            console.log(res.data.message);
        }
    };
    render() {
        var student_HTMLTABLE = this.state.students.map((item) => {
            return (
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
                            <tbody>{student_HTMLTABLE}</tbody>
                        </table>
                    </div>
                </div>
            </>
        );
    }
}

export default Index;
