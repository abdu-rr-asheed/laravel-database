import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BtnCandidate from "./BtnCandidate";
import Navbar from "./Navbar";
import axios from "axios";
import swal from "sweetalert";

const Index = () => {
    const [allstudents, setAllstudents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        document.title = "E-learning System";
        axios.get("/api/students").then((res) => {
            if (res.data.status === 200) {
                setAllstudents(res.data.students);
                setLoading(false);
            }
        });
    }, []);
    // const searchSubmit = (e) => {
    //     e.preventDefault();

    //     axios.post(`/api/students/search/${name}`).then((res) => {
    // if (res.data.status === 200) {
    // }
    //     });
    // };

    const deleteStudent = (e, id) => {
        e.preventDefault();

        const thisClicked = e.currentTarget;
        thisClicked.disable = true;

        axios.delete(`/api/delete-student/${id}`).then((res) => {
            if (res.data.status === 200) {
                thisClicked.closest("tr").remove();
                swal("Success", res.data.message, "success");
            } else if (res.data.status === 404) {
                swal("Warning", res.data.message, "warning");
                thisClicked.disable = true;
            }
        });
    };

    if (loading) {
        return (
            <div
                className="d-flex justify-content-center align-items-center"
                style={{ height: "100vh" }}
            >
                <div className="spinner-border text-warning" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    } else {
        {
            var student_HTMLTABLE = "";
            student_HTMLTABLE = allstudents.map((item) => {
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
                                    "http://localhost:8001/images/students/" +
                                    item.profile_photo
                                }
                                alt={item.last_Name}
                                loading="lazy"
                                width="100px"
                            />
                        </td>
                        <td>
                            <Link
                                to={`edit-student/${item.id}`}
                                className="btn"
                            >
                                <i className="fas fa-edit"></i>
                            </Link>
                        </td>
                        <td>
                            <button
                                onClick={(e) => deleteStudent(e, item.id)}
                                className="btn"
                            >
                                <i className="fas fa-window-close"></i>
                            </button>
                        </td>
                    </tr>
                );
            });
        }
    }

    return (
        <>
            <Navbar />
            <div className="row">
                {/* Search Bar  */}
                <div className="col-md-4 col-12 searchbar my-md-5 my-2">
                    {/* <form onSubmit={searchSubmit}> */}
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search..."
                            aria-label="Search..."
                            aria-describedby="button-addon2"
                            // onChange={searchhandleInput}
                            // value={searchInput.name}
                        />
                        <button
                            className="btn btn-primary text-white"
                            type="submit"
                            id="button-addon2"
                        >
                            <i className="fas fa-search"></i>
                        </button>
                    </div>
                    {/* </form> */}
                </div>
                <div className="col-md-8 col-12 my-md-5 my-2">
                    <div className="addbtn float-end ">
                        <BtnCandidate />
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
};

export default Index;
