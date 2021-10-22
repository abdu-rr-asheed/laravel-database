import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";

const Try = () => {
    const [allstudents, setAllstudents] = useState([]);
    const [links, setAllLinks] = useState([]);

    useEffect(() => {
        document.title = "E-learning System";
        axios.get(`http://localhost:8001/api/students?page=1`).then((res) => {
            if (res.data.status === 200) {
                setAllstudents(res.data.students.data);
                setAllLinks(res.data.students.links);
            }
        });
    }, []);

    // console.log(allstudents);
    console.log(links);
    // console.log(url);

    const urlid = (utl_id) => {
        axios
            .get(`http://localhost:8001/api/students?page=${utl_id}`)
            .then((res) => {
                if (res.data.status === 200) {
                    setAllstudents(res.data.students.data);
                    setAllLinks(res.data.students.links);
                }
            });
    };

    return (
        <>
            <Navbar />
            <nav aria-label="...">
                <ul className="pagination">
                    {allstudents.map((item, idx) => {
                        return (
                            <div className="text-white" key={idx}>
                                <div>{item.id}</div>
                                <div>{item.first_Name}</div>
                                <div>{item.industry}</div>
                            </div>
                        );
                    })}
                    {links.map((item, idx) => {
                        return (
                            <li
                                className={
                                    item.active
                                        ? "page-item active"
                                        : "page-item"
                                }
                                onClick={(e) => urlid(idx)}
                                key={idx}
                            >
                                <button className="page-link">
                                    {item.label}
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </>
    );
};

export default Try;
