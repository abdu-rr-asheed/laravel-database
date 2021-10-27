import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router";
import swal from "sweetalert";

const Register = () => {
    const history = useHistory();
    const [registerInput, setRegister] = useState({
        name: "",
        email: "",
        password: "",
        error_list: [],
    });

    const handleInput = (e) => {
        e.persist();
        setRegister({ ...registerInput, [e.target.name]: e.target.value });
    };

    const submitresgiser = (e) => {
        e.preventDefault();

        const data = {
            name: registerInput.name,
            email: registerInput.email,
            password: registerInput.password,
        };

        axios.get("/sanctum/csrf-cookie").then((response) => {
            axios.post(`/api/register`, data).then((res) => {
                if (res.data.status === 200) {
                    localStorage.setItem("auth_token", res.data.token);
                    localStorage.setItem("auth_name", res.data.username);
                    swal("Success", res.data.message, "success");
                    history.push("/");
                } else {
                    setRegister({
                        ...registerInput,
                        error_list: res.data.validation_errors,
                    });
                }
            });
        });
    };

    return (
        <>
            <div className="row addForm mt-5">
                <form onSubmit={submitresgiser}>
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-6">
                            <h1 className="text-light ml-1 mb-4">Register</h1>
                            <div className="form-floating my-2">
                                <input
                                    type="text"
                                    name="name"
                                    onChange={handleInput}
                                    value={registerInput.name}
                                    className="form-control bg-dark text-white border-warning"
                                    placeholder="Name"
                                />
                                <label className="text-warning">Name</label>
                            </div>

                            <div className="text-warning">
                                {registerInput.error_list.name}
                            </div>
                            <div className="form-floating my-2">
                                <input
                                    type="email"
                                    name="email"
                                    onChange={handleInput}
                                    value={registerInput.email}
                                    className="form-control bg-dark text-white border-warning"
                                    placeholder="Email"
                                />
                                <label className="text-warning">Email</label>
                            </div>

                            <div className="text-warning">
                                {registerInput.error_list.email}
                            </div>
                            <div className="form-floating my-2">
                                <input
                                    type="password"
                                    name="password"
                                    onChange={handleInput}
                                    value={registerInput.password}
                                    className="form-control bg-dark text-white border-warning"
                                    placeholder="password"
                                />
                                <label className="text-warning">Pasword</label>
                            </div>

                            <div className="text-warning">
                                {registerInput.error_list.password}
                            </div>
                            <div className="savebtn mt-3 mx-1 w-100">
                                <button
                                    type="submit"
                                    className="btn btn-danger text-white float-end"
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
