import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

const Addresult = (props) => {
    const history = useHistory();
    const [loading, setLoading] = useState(true);

    const [resultInput, setresult] = useState({
        knowledge_area: "",
        level: "",
        score: "",
        assessor: "",
        overrall: "",
    });
    const [error_list, setError] = useState([]);

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
                setLoading(false);
            }
        });
    }, [props.match.params.id]);

    const saveResult = (e) => {
        e.preventDefault();

        const formdata = new FormData();
        formdata.append("student_id", studentInput.id);
        formdata.append("knowledge_area", resultInput.knowledge_area);
        formdata.append("level", resultInput.level);
        formdata.append("score", resultInput.score);
        formdata.append("assessor", resultInput.assessor);
        formdata.append("overrall", resultInput.overrall);

        axios.post(`/api/result`, formdata).then((res) => {
            if (res.data.status === 200) {
                swal("Success", res.data.message, "success");
                setresult({
                    ...resultInput,
                    knowledge_area: "",
                    level: "",
                    score: "",
                    assessor: "",
                });
                history.push("/user/result");
                setError([]);
            } else if (res.data.status === 422) {
                swal("Validation Error", "", "warning");
                setError(res.data.errors);
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

            <form className="d-flex flex-wrap" onSubmit={saveResult}>
                <div className="row addForm">
                    <div className="col-md-4 col-12 my-2">
                        <div className="form-floating mx-1">
                            <input
                                type="text"
                                className="form-control bg-dark text-white border-warning"
                                name="knowledge_area"
                                onChange={handleInput}
                                value={resultInput.knowledge_area}
                                placeholder="Knowlage Area"
                            />
                            <label className="text-warning">
                                Knowlage Area
                            </label>
                        </div>
                        <div className="text-warning">
                            {error_list.knowledge_area}
                        </div>
                    </div>
                    <div className="col-md-4 col-12 my-2">
                        <div className="form-floating mx-1">
                            <select
                                className="form-control bg-dark text-white border-warning"
                                name="level"
                                onChange={handleInput}
                                value={resultInput.level}
                                placeholder="Level"
                            >
                                <option>Please choose one</option>
                                <option value="level 1">level 1</option>
                                <option value="level 2">level 2</option>
                                <option value="level 3">level 3</option>
                                <option value="level 4">level 4</option>
                                <option value="level 5">level 5</option>
                            </select>
                            <label className="text-warning">Level</label>
                        </div>
                        <div className="text-warning">{error_list.level}</div>
                    </div>
                    <div className="col-md-4 col-12 my-2">
                        <div className="form-floating mx-1">
                            <input
                                type="text"
                                className="form-control bg-dark text-white border-warning"
                                name="score"
                                onChange={handleInput}
                                value={resultInput.score}
                                placeholder="Score"
                            />
                            <label className="text-warning">Score</label>
                        </div>
                        <div className="text-warning">{error_list.score}</div>
                    </div>
                    <div className="col-md-4 col-12 my-2">
                        <div className="form-floating mx-1">
                            <input
                                type="text"
                                className="form-control bg-dark text-white border-warning"
                                name="assessor"
                                onChange={handleInput}
                                value={resultInput.assessor}
                                placeholder="Assessor"
                            />
                            <label className="text-warning">Assessor</label>
                        </div>
                        <div className="text-warning">
                            {error_list.assessor}
                        </div>
                    </div>
                    <div className="col-md-4 col-12 my-2">
                        <div className="form-floating mx-1">
                            <select
                                className="form-control bg-dark text-white border-warning"
                                name="overrall"
                                onChange={handleInput}
                                value={resultInput.overrall}
                                placeholder="overrall"
                            >
                                <option>Please choose one</option>
                                <option value="pass">Pass</option>
                                <option value="fail">Fail</option>
                            </select>
                            <label className="text-warning">Overrall</label>
                        </div>
                        <div className="text-warning">
                            {error_list.overrall}
                        </div>
                    </div>
                </div>
                <div className="row justify-content-end w-100">
                    <div className="col-1 my-3 align-self-end">
                        <Link
                            to="/user/searchresult"
                            className="btn btn-warning text-dark text-nowrap"
                        >
                            <i className="fas fa-angle-left"></i> Back
                        </Link>
                    </div>
                    <div className="col-2 my-3">
                        <button
                            type="submit"
                            className="btn btn-danger text-white text-nowrap"
                        >
                            <i className="fas fa-save"></i> Save Result
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
};

export default Addresult;
