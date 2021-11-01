import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Result = () => {
    const [viewresult, setResult] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`/api/view-result`).then((res) => {
            if (res.data.status === 200) {
                setResult(res.data.result);
                setLoading(false);
            }
        });
    }, []);

    const deleteResult = (e, id) => {
        e.preventDefault();

        const thisClicked = e.currentTarget;
        thisClicked.disable = true;

        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this result Details",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                axios.delete(`/api/resultDelete/${id}`).then((res) => {
                    if (res.data.status === 200) {
                        thisClicked.closest("tr").remove();
                    } else if (res.data.status === 404) {
                        swal("Warning", res.data.message, "warning");
                        thisClicked.disable = true;
                    }
                });
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
    }

    return (
        <>
            <div className="row">
                <div className="col-md-12 col-12 my-md-5 my-2">
                    <div className="addbtn float-end ">
                        <button type="button" className="btn btn-primary">
                            <Link
                                to="/user/searchresult"
                                className="text-white text-decoration-none"
                            >
                                <i className="fas fa-plus-square me-2"></i>Add
                                Result
                            </Link>
                        </button>
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
                                <th scope="col">Full Name</th>
                                <th scope="col">Know.Area</th>
                                <th scope="col">Assessor</th>
                                <th scope="col">Level</th>
                                <th scope="col">Score</th>
                                <th scope="col">Overall</th>
                                <th scope="col">Date</th>
                                <th scope="col">Edit</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {viewresult.map((item, idx) => {
                                return (
                                    <tr key={idx} className="align-middle">
                                        <th scope="row">{idx + 1}</th>
                                        <td>
                                            {item.student.first_Name}&nbsp;
                                            {item.student.last_Name}
                                        </td>
                                        <td>{item.knowledge_area}</td>
                                        <td>{item.level}</td>
                                        <td>{item.score}</td>
                                        <td>{item.assessor}</td>
                                        <td>{item.overrall}</td>
                                        <td>{item.updated_at}</td>
                                        <td>
                                            <Link
                                                to={`/edit-result/${item.id}`}
                                            >
                                                <i className="fas fa-edit"></i>
                                            </Link>
                                        </td>
                                        <td>
                                            <button
                                                onClick={(e) =>
                                                    deleteResult(e, item.id)
                                                }
                                                className="btn text-danger"
                                            >
                                                <i className="fas fa-window-close"></i>
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default Result;
