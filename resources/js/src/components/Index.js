import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import axios from "axios";
import swal from "sweetalert";

const Index = () => {
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

    const deleteStudent = (e, id) => {
        e.preventDefault();

        const thisClicked = e.currentTarget;
        thisClicked.disable = true;

        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this Student Details",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                axios.delete(`/api/delete-student/${id}`).then((res) => {
                    if (res.data.status === 200) {
                        thisClicked.closest("tr").remove();
                        window.location.reload(false);
                    } else if (res.data.status === 404) {
                        swal("Warning", res.data.message, "warning");
                        thisClicked.disable = true;
                    }
                });
            }
        });
    };

    var student_HTMLTABLE = "";
    student_HTMLTABLE =
        searchTeam.length > 1
            ? filteredResult.map((item) => {
                  return (
                      <tr key={item.id}>
                          <td className="align-middle">{item.id}</td>
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
                                  to={`edit-student/${item.id}`}
                                  className="btn text-primary"
                              >
                                  <i className="fas fa-edit"></i>
                              </Link>
                          </td>
                          <td>
                              <button
                                  onClick={(e) => deleteStudent(e, item.id)}
                                  className="btn text-danger"
                              >
                                  <i className="fas fa-window-close"></i>
                              </button>
                          </td>
                      </tr>
                  );
              })
            : allstudents.map((item) => {
                  return (
                      <tr key={item.id}>
                          <td className="align-middle">{item.id}</td>
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
                                  to={`edit-student/${item.id}`}
                                  className="btn text-primary"
                              >
                                  <i className="fas fa-edit"></i>
                              </Link>
                          </td>
                          <td>
                              <button
                                  onClick={(e) => deleteStudent(e, item.id)}
                                  className="btn text-danger"
                              >
                                  <i className="fas fa-window-close"></i>
                              </button>
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
            <div className="row">
                {/* Search Bar  */}
                <div className="col-md-4 col-12 searchbar my-md-5 my-2">
                    <form onSubmit={searchData}>
                        <div className="input-group mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search..."
                                aria-label="Search..."
                                aria-describedby="button-addon2"
                                onChange={(e) => setSearchTeam(e.target.value)}
                            />
                            <button
                                className="btn btn-primary text-white"
                                type="submit"
                                id="button-addon2"
                            >
                                <i className="fas fa-search"></i>
                            </button>
                        </div>
                    </form>
                </div>
                <div className="col-md-8 col-12 my-md-5 my-2">
                    <div className="addbtn float-end ">
                        <button
                            type="button"
                            className="btn btn-sm btn-primary"
                        >
                            <Link
                                to="/AddCandidate"
                                className="text-white text-decoration-none"
                            >
                                <i className="fas fa-plus-square me-2"></i>Add
                                Candidate
                            </Link>
                        </button>
                    </div>
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
                                <th scope="col">Email</th>
                                <th scope="col">industry</th>
                                <th scope="col">P.P</th>
                                <th scope="col">Edit</th>
                                <th scope="col">Delete</th>
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

export default Index;
