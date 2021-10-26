import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import { useHistory } from "react-router";

const Addresult = (props) => {
    const history = useHistory();

    const [resultInput, setresult] = useState({
        knowledge_area: "",
        level: "",
        score: "",
        assessor: "",
        overrall: "",
    });
    const [studentID, setstudentID] = useState({
        student_id: props.match.params.id,
    });

    const handleInput = (e) => {
        e.persist();
        setresult({ ...resultInput, [e.target.name]: e.target.value });
    };

    const handleId = (e) => {
        e.persist();
        setstudentID({ student_id: e.target.name });
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

        const formdata = new FormData();
        formdata.append("student_id", studentID.student_id);
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
                history.push("/result");
                // setError([]);
            } else if (res.data.status === 422) {
                swal("Validation Error", "", "warning");
                // setError(res.data.errors);
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
                        className="form-control bg-dark text-white border-warning"
                        name="student_id"
                        onChange={handleId}
                        value={studentID.student_id}
                        placeholder="Knowlage Area"
                    />
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
                    </div>
                    <div className="col-md-4 col-12 my-2">
                        <div className="form-floating mx-1">
                            <input
                                type="text"
                                className="form-control bg-dark text-white border-warning"
                                name="level"
                                onChange={handleInput}
                                value={resultInput.level}
                                placeholder="Level"
                            />
                            <label className="text-warning">Level</label>
                        </div>
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
                    </div>
                    <div className="col-md-4 col-12 my-2">
                        <div className="form-floating mx-1">
                            <input
                                type="text"
                                className="form-control bg-dark text-white border-warning"
                                name="overrall"
                                onChange={handleInput}
                                value={resultInput.overrall}
                                placeholder="overrall"
                            />
                            <label className="text-warning">Overrall</label>
                        </div>
                    </div>
                    <div className="w-100 my-3">
                        <button
                            type="submit"
                            className="btn btn-danger text-white float-end"
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
