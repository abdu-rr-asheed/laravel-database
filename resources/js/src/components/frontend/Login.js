import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router";
import swal from "sweetalert";
import Navbar from "./Navbar";

const Login = () => {
    const history = useHistory();

    const [loginInput, setLogin] = useState({
        email: "",
        password: "",
        error_list: [],
    });

    const handleInput = (e) => {
        e.persist();
        setLogin({ ...loginInput, [e.target.name]: e.target.value });
    };

    const loginsubmit = (e) => {
        e.preventDefault();

        const data = {
            email: loginInput.email,
            password: loginInput.password,
        };

        axios.get("/sanctum/csrf-cookie").then((response) => {
            axios.post(`api/login`, data).then((res) => {
                if (res.data.status === 200) {
                    localStorage.setItem("auth_token", res.data.token);
                    localStorage.setItem("auth_name", res.data.username);
                    swal("Success", res.data.message, "success");
                    if (res.data.role === "admin") {
                        history.push("/admin");
                    } else {
                        history.push("/user/candidate");
                    }
                } else if (res.data.status === 401) {
                    swal("Warning", res.data.message, "warning");
                } else {
                    setLogin({
                        ...loginInput,
                        error_list: res.data.validation_errors,
                    });
                }
            });
        });
    };

    return (
        <>
            <Navbar />
            <div className="row addForm mt-5">
                <form onSubmit={loginsubmit}>
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-6">
                            <h1 className="text-light ml-1 mb-4">Login</h1>
                            <div className="form-floating my-2">
                                <input
                                    type="email"
                                    name="email"
                                    onChange={handleInput}
                                    value={loginInput.email}
                                    className="form-control bg-dark text-white border-warning"
                                    placeholder="Email"
                                />
                                <label className="text-warning">Email</label>
                            </div>
                            <div className="text-warning">
                                {loginInput.error_list.email}
                            </div>
                            <div className="form-floating my-2">
                                <input
                                    type="password"
                                    name="password"
                                    onChange={handleInput}
                                    value={loginInput.password}
                                    className="form-control bg-dark text-white border-warning"
                                    placeholder="Email"
                                />
                                <label className="text-warning">Pasword</label>
                            </div>
                            <div className="text-warning">
                                {loginInput.error_list.password}
                            </div>
                            <div className="savebtn mt-3 mx-1 w-100">
                                <button
                                    type="submit"
                                    className="btn btn-danger text-white float-end"
                                >
                                    <i className="fas fa-save"></i> Login
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Login;
