import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import axios from "axios";
import { Link } from "react-router-dom";

const Edit = (props) => {
    const [studentInput, setstudent] = useState({
        first_Name: "",
        last_Name: "",
        email: "",
        industry: "",
    });

    const [error_list, setError] = useState([]);

    const [pic, setpic] = useState([]);
    const [loading, setLoading] = useState(true);

    const handleInput = (e) => {
        e.persist();
        setstudent({ ...studentInput, [e.target.name]: e.target.value });
    };

    const handleImage = (e) => {
        e.persist();
        setpic({ profile_photo: e.target.files[0] });
    };

    useEffect(() => {
        const student_Id = props.match.params.id;
        axios.get(`/api/edit-student/${student_Id}`).then((res) => {
            if (res.data.status === 200) {
                setstudent(res.data.student);
                setLoading(false);
            }
        });
    }, []);

    const updateStudent = async (e) => {
        e.preventDefault();

        const student_Id = props.match.params.id;

        const formdata = new FormData();
        formdata.append("first_Name", studentInput.first_Name);
        formdata.append("last_Name", studentInput.last_Name);
        formdata.append("email", studentInput.email);
        formdata.append("industry", studentInput.industry);
        formdata.append("profile_photo", pic.profile_photo);

        await axios
            .post(`/api/updatestudent/${student_Id}`, formdata)
            .then((res) => {
                if (res.data.status === 200) {
                    swal("Success", res.data.message, "success");
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
            <div className="row addForm mt-5">
                <h1 className="text-light ml-1 mb-4">Edit Student</h1>
                <form
                    className="d-flex flex-wrap"
                    onSubmit={updateStudent}
                    encType="multipart/form-data"
                >
                    <div className="col-md-4 col-12 my-2">
                        <div className="form-floating mx-1">
                            <input
                                type="text"
                                name="first_Name"
                                onChange={handleInput}
                                value={studentInput.first_Name}
                                className="form-control bg-dark text-white border-warning"
                                placeholder="Fast Name"
                            />
                            <label className="text-warning">Fast Name</label>
                        </div>
                        <div className="text-warning">
                            {error_list.first_Name}
                        </div>
                    </div>
                    <div className="col-md-4 col-12 my-2">
                        <div className="form-floating mx-1">
                            <input
                                type="text"
                                name="last_Name"
                                onChange={handleInput}
                                value={studentInput.last_Name}
                                className="form-control bg-dark text-white border-warning"
                                placeholder="Last Name"
                            />
                            <label className="text-warning">Last Name</label>
                        </div>
                        <span className="text-warning">
                            {error_list.last_Name}
                        </span>
                    </div>
                    <div className="col-md-4 col-12 my-2">
                        <div className="form-floating mx-1">
                            <input
                                type="email"
                                name="email"
                                onChange={handleInput}
                                value={studentInput.email}
                                className="form-control bg-dark text-white border-warning"
                                placeholder="Email"
                            />
                            <label className="text-warning">Email</label>
                        </div>
                        <span className="text-warning">{error_list.email}</span>
                    </div>
                    <div className="col-md-4 col-12 my-2">
                        <div className="form-floating mx-1">
                            <select
                                className="form-select form-control bg-dark text-white border-warning"
                                name="industry"
                                onChange={handleInput}
                                value={studentInput.industry}
                            >
                                <option>Please choose one</option>
                                <option value="Health">Health</option>
                                <option value="Business">Business</option>
                                <option value="ICT">ICT</option>
                            </select>
                            <label className="text-warning">Industry</label>
                        </div>
                        <span className="text-warning">
                            {error_list.industry}
                        </span>
                    </div>
                    <div className="col-md-4 col-12 my-2">
                        <div className="form-floating mx-1">
                            {/* image */}
                            <input
                                type="file"
                                name="profile_photo"
                                onChange={handleImage}
                                className="form-control bg-dark text-white border-warning"
                                placeholder="Profile Photo"
                                accept="image/png, image/jpg, image/jpeg"
                            />
                            <label className="text-warning">
                                Profile Photo
                            </label>
                        </div>
                        <span className="text-warning">
                            {error_list.profile_photo}
                        </span>
                    </div>
                    <div className="col-md-4 col-12 my-2">
                        <img
                            src={`http://localhost:8001/images/students/${studentInput.profile_photo}`}
                            width="100px"
                        />
                    </div>
                    <br />
                    <div className="row justify-content-end w-100">
                        <div className="col-1 my-3 align-self-end">
                            <Link
                                to="/admin"
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
                                <i className="fas fa-save"></i> Update Candidate
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Edit;
