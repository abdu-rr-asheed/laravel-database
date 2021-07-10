import React, { Component } from "react";
import Navbar from "./Navbar";

class UpdateCandidate extends Component {
    render() {
        return (
            <>
                <Navbar />
                {/* Form */}

                <div className="row addForm mt-5">
                    <div className="col-4 my-2">
                        <form className="form-floating">
                            <input
                                type="email"
                                className="form-control"
                                id="idinty"
                                placeholder="name@example.com"
                            />
                            <label htmlFor="idinty">ID</label>
                        </form>
                    </div>
                    <div className="col-4 my-2">
                        <form className="form-floating">
                            <input
                                type="email"
                                className="form-control"
                                id="floatingInputValue2"
                                placeholder="name@example.com"
                            />
                            <label htmlFor="floatingInputValue2">
                                Fast Name
                            </label>
                        </form>
                    </div>
                    <div className="col-4 my-2">
                        <form className="form-floating">
                            <input
                                type="email"
                                className="form-control"
                                id="floatingInputValue3"
                                placeholder="name@example.com"
                            />
                            <label htmlFor="floatingInputValue3">
                                Last Name
                            </label>
                        </form>
                    </div>
                    <div className="col-4 my-2">
                        <form className="form-floating">
                            <input
                                type="email"
                                className="form-control"
                                id="floatingInputValue4"
                                placeholder="name@example.com"
                            />
                            <label htmlFor="floatingInputValue4">Email</label>
                        </form>
                    </div>
                    <div className="col-4 my-2">
                        <form className="form-floating">
                            <input
                                type="email"
                                className="form-control"
                                id="floatingInputValue5"
                                placeholder="name@example.com"
                            />
                            <label htmlFor="floatingInputValue5">
                                Industry
                            </label>
                        </form>
                    </div>
                    <div className="col-4 my-2">
                        <form className="form-floating">
                            <input
                                type="file"
                                className="form-control"
                                id="floatingInputValue6"
                                placeholder="name@example.com"
                                name="myImage"
                                accept="image/png, image/jpg, image/jpeg"
                            />
                        </form>
                    </div>
                    <div className="savebtn mt-3">
                        <button
                            type="button"
                            className="btn btn-primary float-end"
                        >
                            <i className="fas fa-save"></i> Update Candidate
                        </button>
                    </div>
                </div>
            </>
        );
    }
}

export default UpdateCandidate;
