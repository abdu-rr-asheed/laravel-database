import React, { Component } from "react";
import Navbar from "./Navbar";
import axios from "axios";

class Addcandidate extends Component {
    state = {
        fname: "",
        lname: "",
        email: "",
        industry: "",
        photo: "",
    };

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    saveStudent = async (e) => {
        e.preventDefault();

        const res = await axios.post(
            "http://127.0.0.1:8000//api/add-student",
            this.state
        );

        if (res.data.status === 200) {
            console.log(res.data.message);
            this.setState({
                fname: "",
                lname: "",
                email: "",
                industry: "",
                photo: "",
            });
        }
    };

    render() {
        return (
            <>
                <Navbar />
                {/* Form */}

                <div className="row addForm mt-5">
                    <form
                        className="d-flex flex-wrap"
                        onSubmit={this.saveStudent}
                        encType="multipart/form-data"
                    >
                        <div className="col-4 my-2">
                            <div className="form-floating mx-1">
                                <input
                                    type="text"
                                    name="fname"
                                    onChange={this.handleInput}
                                    value={this.state.fname}
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
                                    name="lname"
                                    onChange={this.handleInput}
                                    value={this.state.lname}
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
                                    onChange={this.handleInput}
                                    value={this.state.email}
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
                                    // defaultValue
                                    // defaultValue="Please choose one"
                                    name="industry"
                                    onChange={this.handleInput}
                                    value={this.state.industry}
                                >
                                    {/* <option value="Please choose one" disabled>
                                        Please choose one
                                    </option> */}
                                    <option value="Health">Health</option>
                                    <option value="Business">Business</option>
                                    <option value="ICT">ICT</option>
                                </select>
                                <label>Industry</label>
                            </div>
                        </div>
                        <div className="col-4 my-2">
                            <div className="form-floating mx-1">
                                <input
                                    type="file"
                                    name="photo"
                                    onChange={this.handleInput}
                                    value={this.state.photo}
                                    className="form-control"
                                    placeholder="Profile Photo"
                                    accept="image/png, image/jpg, image/jpeg"
                                />
                                <label>Profile Photo</label>
                            </div>
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
    }
}

export default Addcandidate;
