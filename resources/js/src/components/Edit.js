import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

const Edit = (props) => {
    const [studentInput, setstudent] = useState({
        first_Name: "",
        last_Name: "",
        email: "",
        industry: "",
    });

    const [pic, setpic] = useState([]);

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
                // console.log(res.data.student);
                setstudent(res.data.student);
            }
        });
    }, []);

    const updateStudent = (e) => {
        e.preventDefault();

        const student_Id = props.match.params.id;

        const formdata = new FormData();
        formdata.append("profile_photo", pic.profile_photo);
        formdata.append("first_Name", studentInput.first_Name);
        formdata.append("last_Name", studentInput.last_Name);
        formdata.append("email", studentInput.email);
        formdata.append("industry", studentInput.industry);

        axios
            .put(
                `http://127.0.0.1:8000/api/update-student/${student_Id}`,
                formdata
            )
            .then((res) => {
                if (res.data.status === 200) {
                    console.log(res.data.message);
                }
            });
    };

    return (
        <>
            <Navbar />
            <div className="row addForm mt-5">
                <h1 className="text-light ml-1 mb-4">Edit Student</h1>
                <form
                    className="d-flex flex-wrap"
                    onSubmit={updateStudent}
                    encType="multipart/form-data"
                >
                    <div className="col-4 my-2">
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
                    </div>
                    <div className="col-4 my-2">
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
                    </div>
                    <div className="col-4 my-2">
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
                    </div>
                    <div className="col-4 my-2">
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
                    </div>
                    <div className="col-4 my-2">
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
                    </div>
                    <div className="col-4 my-2">
                        <img
                            src={`http://127.0.0.1:8000/images/students/${studentInput.profile_photo}`}
                            width="100px"
                        />
                    </div>
                    <br />
                    <div className="savebtn mt-3 mx-1 w-100">
                        <button
                            type="submit"
                            className="btn btn-primary float-end"
                        >
                            <i className="fas fa-save"></i> Update Candidate
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Edit;
