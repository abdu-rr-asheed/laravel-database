import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { Link } from "react-router-dom";

const Result = () => {
    const [viewresult, setResult] = useState([]);

    useEffect(() => {
        axios.get(`/api/view-result`).then((res) => {
            if (res.data.status === 200) {
                setResult(res.data.result);
            }
        });
    }, []);
    return (
        <>
            <Navbar />
            <div className="row">
                <div className="col-md-12 col-12 my-md-5 my-2">
                    <div className="addbtn float-end ">
                        <button type="button" className="btn btn-primary">
                            <Link to="/searchresult">
                                <i className="fas fa-plus-square"></i>Add Result
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
                                <th scope="col">Delete</th>
                                <th scope="col">Edit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {viewresult.map((item) => {
                                return (
                                    <tr key={item.id}>
                                        <th scope="row">{item.id}</th>
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
                                            <i className="fas fa-window-close"></i>
                                        </td>
                                        <td>
                                            <i className="fas fa-edit"></i>
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
