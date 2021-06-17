import React from "react";
import { Link } from "react-router-dom";

const BtnResult = () => {
    return (
        <>
            <button type="button" className="btn btn-primary">
                <Link to="/Addresult">
                    <i className="fas fa-plus-square"></i>Add Result
                </Link>
            </button>
        </>
    );
};

export default BtnResult;
