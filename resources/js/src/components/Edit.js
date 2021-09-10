import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import swal from "sweetalert";
import axios from "axios";

const Edit = (props) => {
    const [studentInput, setstudent] = useState({
        first_Name: "",
        last_Name: "",
        email: "",
        industry: "",
    });

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
        axios
            .get(`http://192.168.43.54:8001/api/edit-student/${student_Id}`)
            .then((res) => {
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
            .post(
                `http://192.168.43.54:8001/api/updatestudent/${student_Id}`,
                formdata
            )
            .then((res) => {
                if (res.data.status === 200) {
                    // console.log(res.data.message);
                    swal("Success", res.data.message, "success");
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
            <Navbar />
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
                                className="form-control"
                                placeholder="Fast Name"
                            />
                            <label>Fast Name</label>
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
                    </div>
                    <div className="col-md-4 col-12 my-2">
                        <img
                            src={`http://192.168.43.54:8001/images/students/${studentInput.profile_photo}`}
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
