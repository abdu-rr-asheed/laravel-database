import React from "react";
import Navbar from "./Navbar";

const Addresult = () => {
    return (
        <>
            <Navbar />
            {/* <!-- search Bar --> */}
            <div class="searchbar d-flex justify-content-between my-5">
                <div class="input-group mb-3 m-auto w-50">
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Search..."
                        aria-label="Search..."
                        aria-describedby="button-addon2"
                    />
                    <button
                        class="btn btn-primary"
                        type="button"
                        id="button-addon2"
                    >
                        <i class="fas fa-search"></i>
                    </button>
                </div>
            </div>

            {/* <!-- Form --> */}

            <div class="row addForm mt-5">
                <div class="col-4 my-2">
                    <form class="form-floating">
                        <input
                            type="email"
                            class="form-control"
                            id="idinty"
                            placeholder="name@example.com"
                        />
                        <label for="idinty">ID</label>
                    </form>
                </div>
                <div class="col-4 my-2">
                    <form class="form-floating">
                        <input
                            type="email"
                            class="form-control"
                            id="floatingInputValue2"
                            placeholder="name@example.com"
                        />
                        <label for="floatingInputValue2">Fast Name</label>
                    </form>
                </div>
                <div class="col-4 my-2">
                    <form class="form-floating">
                        <input
                            type="email"
                            class="form-control"
                            id="floatingInputValue3"
                            placeholder="name@example.com"
                        />
                        <label for="floatingInputValue3">Last Name</label>
                    </form>
                </div>
                <div class="col-4 my-2">
                    <form class="form-floating">
                        <input
                            type="email"
                            class="form-control"
                            id="floatingInputValue4"
                            placeholder="name@example.com"
                        />
                        <label for="floatingInputValue4">Email</label>
                    </form>
                </div>
                <div class="col-4 my-2">
                    <form class="form-floating">
                        <input
                            type="email"
                            class="form-control"
                            id="floatingInputValue5"
                            placeholder="name@example.com"
                        />
                        <label for="floatingInputValue5">Industry</label>
                    </form>
                </div>
                <div class="col-4 my-2">
                    <form class="form-floating">
                        <input
                            type="file"
                            class="form-control"
                            id="floatingInputValue6"
                            placeholder="name@example.com"
                            name="myImage"
                            accept="image/png, image/jpg, image/jpeg"
                        />
                    </form>
                </div>
                <div class="savebtn mt-3">
                    <button type="button" class="btn btn-primary float-end">
                        <i class="fas fa-save"></i> Save
                    </button>
                </div>
            </div>
        </>
    );
};

export default Addresult;
