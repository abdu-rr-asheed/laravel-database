import axios from "axios";
import React, { useState } from "react";
import swal from "sweetalert";
import Navbar from "./Navbar";

const Addcandidate = () => {
    const [studentInput, setstudent] = useState({
        first_Name: "",
        last_Name: "",
        email: "",
        industry: "",
    });

    const [pic, setpic] = useState([]);
    const [error_list, setError] = useState([]);

    const handleInput = (e) => {
        e.persist();
        setstudent({ ...studentInput, [e.target.name]: e.target.value });
    };

    const handleImage = (e) => {
        e.persist();
        setpic({ profile_photo: e.target.files[0] });
    };

    const saveStudent = (e) => {
        e.preventDefault();

        const formdata = new FormData();
        formdata.append("profile_photo", pic.profile_photo);
        formdata.append("first_Name", studentInput.first_Name);
        formdata.append("last_Name", studentInput.last_Name);
        formdata.append("email", studentInput.email);
        formdata.append("industry", studentInput.industry);

        axios.post(`/api/add-student`, formdata).then((res) => {
            if (res.data.status === 200) {
                console.log(res.data.message);
                setstudent({
                    ...studentInput,
                    first_Name: "",
                    last_Name: "",
                    email: "",
                    industry: "",
                });
                setError([]);
                document.getElementById("myForm").reset();
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
            <div className="row addForm mt-5">
                <h1 className="text-light ml-1 mb-4">Add a new Student</h1>
                <form
                    className="d-flex flex-wrap"
                    id="myForm"
                    onSubmit={saveStudent}
                    encType="multipart/form-data"
                >
                    <div className="col-md-4 col-12 my-2">
                        <div className="form-floating mx-1">
                            <input
                                type="text"
                                name="first_Name"
                                onChange={handleInput}
                                value={studentInput.first_Name}
                                className="form-control"
                                placeholder="Fast Name"
                            />
                            <label>Fast Name</label>
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
                                className="form-control"
                                placeholder="Last Name"
                            />
                            <label>Last Name</label>
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
                                className="form-control"
                                placeholder="Email"
                            />
                            <label>Email</label>
                        </div>
                        <span className="text-warning">{error_list.email}</span>
                    </div>
                    <div className="col-md-4 col-12 my-2">
                        <div className="form-floating mx-1">
                            <select
                                className="form-select form-control"
                                name="industry"
                                onChange={handleInput}
                                value={studentInput.industry}
                            >
                                <option>Please choose one</option>
                                <option value="Health">Health</option>
                                <option value="Business">Business</option>
                                <option value="ICT">ICT</option>
                            </select>
                            <label>Industry</label>
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
                                className="form-control"
                                placeholder="Profile Photo"
                                accept="image/png, image/jpg, image/jpeg"
                            />
                            <label>Profile Photo</label>
                        </div>
                        <span className="text-warning">
                            {error_list.profile_photo}
                        </span>
                    </div>
                    <br />
                    <div className="savebtn mt-3 mx-1 w-100">
                        <button
                            type="submit"
                            className="btn btn-primary float-end"
                        >
                            <i className="fas fa-save"></i> Save Candidate
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Addcandidate;
