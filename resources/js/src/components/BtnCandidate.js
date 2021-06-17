import React from "react";
import { Link } from "react-router-dom";

const BtnCandidate = () => {
    return (
        <>
            <button type="button" className="btn btn-primary">
                <Link to="/AddCandidate">
                    <i className="fas fa-plus-square"></i>Add Candidate
                </Link>
            </button>
        </>
    );
};

export default BtnCandidate;
