import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";

const Addresult = (props) => {
    const [resultInput, setresult] = useState({
        knowlage_area: "",
        level: "",
        score: "",
        assessor: "",
    });

    const handleInput = (e) => {
        e.persist();
        setresult({ ...resultInput, [e.target.name]: e.target.value });
    };

    const [studentInput, setstudent] = useState([]);

    useEffect(() => {
        const student_Id = props.match.params.id;
        axios.get(`/api/edit-student/${student_Id}`).then((res) => {
            if (res.data.status === 200) {
                setstudent(res.data.student);
            }
        });
    }, [props.match.params.id]);

    const saveResult = (e) => {
        e.preventDefault();

        const data = {
            knowlage_area: resultInput.knowlage_area,
            level: resultInput.level,
            score: resultInput.score,
            assessor: resultInput.assessor,
        };

        axios.post(`/api/result`, data).then((res) => {
            if (res.data.status === 200) {
                console.log(res.data.message);
                setresult({
                    ...resultInput,
                    knowlage_area: "",
                    level: "",
                    score: "",
                    assessor: "",
                });
                // setError([]);
                swal("Success", res.data.message, "success");
            } else if (res.data.status === 422) {
                swal("Validation Error", "", "warning");
                setError(res.data.errors);
            }
        });
    };

    return (
        <>
            <Navbar />

            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div
                        className="card mb-3"
                        style={{
                            maxWidth: "540px",
                            backgroundColor: "#211f31",
                            color: "#fff",
                        }}
                    >
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img
                                    src={
                                        "http://localhost:8001/images/students/" +
                                        studentInput.profile_photo
                                    }
                                    className="img-fluid rounded-start"
                                    alt={studentInput.last_Name}
                                />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">
                                        {studentInput.first_Name}&nbsp;
                                        {studentInput.last_Name}
                                    </h5>
                                    <p className="card-text">
                                        {studentInput.email}
                                    </p>
                                    <p className="card-text">
                                        {studentInput.industry}
                                    </p>
                                    <p className="card-text">
                                        <small className="text-muted">
                                            id : {studentInput.id}
                                        </small>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Form --> */}

            <div className="row addForm">
                <form className="d-flex flex-wrap" onSubmit={saveResult}>
                    <input
                        type="hidden"
                        className="form-control"
                        id="floatingInputValue2"
                        name="knowlage_area"
                        onChange={handleInput}
                        value={studentInput.knowlage_area}
                        placeholder="Knowlage Area"
                    />
                    <div className="col-md-4 col-12 my-2">
                        <div className="form-floating mx-1">
                            <input
                                type="h"
                                className="form-control"
                                id="floatingInputValue2"
                                name="knowlage_area"
                                onChange={handleInput}
                                value={studentInput.knowlage_area}
                                placeholder="Knowlage Area"
                            />
                            <label htmlFor="floatingInputValue2">
                                Knowlage Area
                            </label>
                        </div>
                    </div>
                    <div className="col-md-4 col-12 my-2">
                        <div className="form-floating mx-1">
                            <input
                                type="text"
                                className="form-control"
                                id="floatingInputValue3"
                                name="level"
                                onChange={handleInput}
                                value={studentInput.level}
                                placeholder="Level"
                            />
                            <label htmlFor="floatingInputValue3">Level</label>
                        </div>
                    </div>
                    <div className="col-md-4 col-12 my-2">
                        <div className="form-floating mx-1">
                            <input
                                type="text"
                                className="form-control"
                                id="floatingInputValue4"
                                name="score"
                                onChange={handleInput}
                                value={studentInput.score}
                                placeholder="Score"
                            />
                            <label htmlFor="floatingInputValue4">Score</label>
                        </div>
                    </div>
                    <div className="col-md-4 col-12 my-2">
                        <div className="form-floating mx-1">
                            <input
                                type="text"
                                className="form-control"
                                id="floatingInputValue5"
                                name="assessor"
                                onChange={handleInput}
                                value={studentInput.assessor}
                                placeholder="Assessor"
                            />
                            <label htmlFor="floatingInputValue5">
                                Assessor
                            </label>
                        </div>
                    </div>
                    <div className="w-100 my-3">
                        <button
                            type="submit"
                            className="btn btn-primary float-end"
                        >
                            <i className="fas fa-save"></i> Save Result
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Addresult;
