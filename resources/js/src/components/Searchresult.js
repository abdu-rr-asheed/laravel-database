import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import axios from "axios";

const Searchresult = () => {
    const [searchTeam, setSearchTeam] = useState("");
    const [filteredResult, setFilteredResult] = useState([]);
    const [allstudents, setAllstudents] = useState([]);
    const [links, setAllLinks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        document.title = "E-learning System";
        axios.get("/api/students?page=1").then((res) => {
            if (res.data.status === 200) {
                setAllstudents(res.data.students.data);
                setAllLinks(res.data.students.links);
                setLoading(false);
            }
        });
    }, []);
    const searchData = (e) => {
        e.preventDefault();
        if (searchTeam !== "") {
            axios.get(`/api/students/search/${searchTeam}`).then((res) => {
                setFilteredResult(res.data);
            });
        }
    };

    const urlid = (utl_id) => {
        axios.get(`${utl_id}`).then((res) => {
            if (res.data.status === 200) {
                setAllstudents(res.data.students.data);
                setAllLinks(res.data.students.links);
            }
        });
    };

    var student_HTMLTABLE = "";
    student_HTMLTABLE =
        searchTeam.length > 1
            ? filteredResult.map((item) => {
                  return (
                      <tr key={item.id}>
                          <td>{item.id}</td>
                          <td>
                              {item.first_Name}&nbsp;
                              {item.last_Name}
                          </td>
                          <td>{item.email}</td>
                          <td>{item.industry}</td>
                          <td>
                              <img
                                  src={
                                      "http://localhost:8001/images/students/" +
                                      item.profile_photo
                                  }
                                  alt={item.last_Name}
                                  loading="lazy"
                                  width="100px"
                              />
                          </td>
                          <td>
                              <Link
                                  to={`add-result/${item.id}`}
                                  className="btn btn-primary btn-sm"
                              >
                                  Add Result
                              </Link>
                          </td>
                      </tr>
                  );
              })
            : allstudents.map((item) => {
                  return (
                      <tr key={item.id}>
                          <td>{item.id}</td>
                          <td>
                              {item.first_Name}&nbsp;
                              {item.last_Name}
                          </td>
                          <td>{item.email}</td>
                          <td>{item.industry}</td>
                          <td>
                              <img
                                  src={
                                      "http://localhost:8001/images/students/" +
                                      item.profile_photo
                                  }
                                  alt={item.last_Name}
                                  loading="lazy"
                                  width="100px"
                              />
                          </td>
                          <td>
                              <Link
                                  to={`add-result/${item.id}`}
                                  className="btn bg-warning text-dark btn-sm"
                              >
                                  Add Result
                              </Link>
                          </td>
                      </tr>
                  );
              });

    var Pagination_HTML = "";

    if (links.length === 3) {
        Pagination_HTML = <></>;
    } else {
        Pagination_HTML =
            searchTeam.length > 1 ? (
                <></>
            ) : (
                links.map((item, idx) => {
                    if (item.url === null) {
                        return false;
                    } else {
                        return (
                            <li
                                className={
                                    item.active
                                        ? "page-item active"
                                        : "page-item"
                                }
                                onClick={(e) => urlid(item.url)}
                                key={idx}
                            >
                                <button className="page-link">
                                    {item.label}
                                </button>
                            </li>
                        );
                    }
                })
            );
    }

    if (loading) {
        return (
            <div
                className="d-flex justify-content-center align-items-center"
                style={{ height: "100vh" }}
            >
                <div className="spinner-border text-warning" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    return (
        <>
            <Navbar />
            <div className="row justify-content-center">
                {/* Search Bar  */}
                <div className="col-md-8 col-12 searchbar my-md-5 my-2">
                    <form onSubmit={searchData}>
                        <div className="input-group mb-3">
                            <input
                                type="text"
                                className="form-control bg-warning text-dark border-warning"
                                placeholder="Search..."
                                aria-label="Search..."
                                aria-describedby="button-addon2"
                                onChange={(e) => setSearchTeam(e.target.value)}
                            />
                            <button
                                className="btn btn-warning text-dark"
                                type="submit"
                                id="button-addon2"
                            >
                                <i className="fas fa-search"></i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/* Table */}
            <div className="Chart">
                <div className="table-responsive">
                    <table className="table table-dark table-striped text-center text-nowrap align-middle">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                {/* <th scope="col">Last Name</th> */}
                                <th scope="col">Email</th>
                                <th scope="col">industry</th>
                                <th scope="col">P.P</th>
                                <th scope="col">Result</th>
                            </tr>
                        </thead>
                        <tbody>{student_HTMLTABLE}</tbody>
                    </table>
                </div>
                <nav>
                    <ul className="pagination pagination-sm justify-content-end">
                        {Pagination_HTML}
                    </ul>
                </nav>
            </div>
        </>
    );
};
export default Searchresult;
