import React from "react";

const Search = () => {
    return (
        <>
            <input
                type="text"
                className="form-control"
                placeholder="Search..."
                aria-label="Search..."
                aria-describedby="button-addon2"
            />
            <button
                className="btn btn-primary text-white"
                type="button"
                id="button-addon2"
            >
                <i className="fas fa-search"></i>
            </button>
        </>
    );
};

export default Search;
