import React, { Component } from "react";
import Navbar from "./Navbar";

export class Addresult extends Component {
    render() {
        return (
            <>
                <Navbar />
                {/* <!-- search Bar --> */}
                <div className="row justify-content-center">
                    {/* Search Bar  */}
                    <div className="col-md-8 col-12 searchbar my-5">
                        <div className="input-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search..."
                                aria-label="Search..."
                                aria-describedby="button-addon2"
                            />
                            <button
                                className="btn btn-primary"
                                type="button"
                                id="button-addon2"
                            >
                                <i className="fas fa-search"></i>
                            </button>
                        </div>
                    </div>
                </div>

                {/* <!-- Form --> */}

                <div className="row addForm">
                    <form className="d-flex flex-wrap">
                        <div className="col-md-4 col-12 my-2">
                            <div className="form-floating mx-1">
                                <input
                                    type="email"
                                    className="form-control"
                                    id="idinty"
                                    placeholder="name@example.com"
                                />
                                <label htmlFor="idinty">ID</label>
                            </div>
                        </div>
                        <div className="col-md-4 col-12 my-2">
                            <div className="form-floating mx-1">
                                <input
                                    type="email"
                                    className="form-control"
                                    id="floatingInputValue2"
                                    placeholder="name@example.com"
                                />
                                <label htmlFor="floatingInputValue2">
                                    Fast Name
                                </label>
                            </div>
                        </div>
                        <div className="col-md-4 col-12 my-2">
                            <div className="form-floating mx-1">
                                <input
                                    type="email"
                                    className="form-control"
                                    id="floatingInputValue3"
                                    placeholder="name@example.com"
                                />
                                <label htmlFor="floatingInputValue3">
                                    Last Name
                                </label>
                            </div>
                        </div>
                        <div className="col-md-4 col-12 my-2">
                            <div className="form-floating mx-1">
                                <input
                                    type="email"
                                    className="form-control"
                                    id="floatingInputValue4"
                                    placeholder="name@example.com"
                                />
                                <label htmlFor="floatingInputValue4">
                                    Email
                                </label>
                            </div>
                        </div>
                        <div className="col-md-4 col-12 my-2">
                            <div className="form-floating mx-1">
                                <input
                                    type="email"
                                    className="form-control"
                                    id="floatingInputValue5"
                                    placeholder="name@example.com"
                                />
                                <label htmlFor="floatingInputValue5">
                                    Industry
                                </label>
                            </div>
                        </div>
                        <div className="col-md-4 col-12 my-2">
                            <div className="form-floating mx-1">
                                <input
                                    type="file"
                                    className="form-control"
                                    id="floatingInputValue6"
                                    placeholder="name@example.com"
                                    name="myImage"
                                    accept="image/png, image/jpg, image/jpeg"
                                />
                                <label>Profile Photo</label>
                            </div>
                        </div>
                        <div className="w-100 my-3">
                            <button
                                type="button"
                                className="btn btn-primary float-end"
                            >
                                <i className="fas fa-save"></i> Save Result
                            </button>
                        </div>
                    </form>
                </div>
            </>
        );
    }
}

export default Addresult;
