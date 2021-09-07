import React from "react";
import Navbar from "./Navbar";

const Register = () => {
    return (
        <>
            <Navbar />
            <div className="row addForm mt-5">
                <form
                    // onSubmit={updateStudent}
                    encType="multipart/form-data"
                >
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-6">
                            <h1 className="text-light ml-1 mb-4">Register</h1>
                            <div className="form-floating my-2">
                                <input
                                    type="text"
                                    name="name"
                                    // onChange={handleInput}
                                    // value={studentInput.email}
                                    className="form-control"
                                    placeholder="Email"
                                />
                                <label>Name</label>
                            </div>
                            <div className="form-floating my-2">
                                <input
                                    type="email"
                                    name="email"
                                    // onChange={handleInput}
                                    // value={studentInput.email}
                                    className="form-control"
                                    placeholder="Email"
                                />
                                <label>Email</label>
                            </div>
                            <div className="form-floating my-2">
                                <input
                                    type="password"
                                    name="password"
                                    // onChange={handleInput}
                                    // value={studentInput.email}
                                    className="form-control"
                                    placeholder="Email"
                                />
                                <label>Pasword</label>
                            </div>
                            <div className="savebtn mt-3 mx-1 w-100">
                                <button
                                    type="submit"
                                    className="btn btn-primary float-end"
                                >
                                    <i className="fas fa-save"></i> Register
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Register;
