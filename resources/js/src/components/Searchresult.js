import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import axios from "axios";

const Searchresult = () => {
    const [searchTeam, setSearchTeam] = useState("");
    const [filteredResult, setFilteredResult] = useState([]);
    const [allstudents, setAllstudents] = useState([]);
    const [links, setAllLinks] = useState([]);

    useEffect(() => {
        document.title = "E-learning System";
        axios.get("/api/students?page=1").then((res) => {
            if (res.data.status === 200) {
                setAllstudents(res.data.students.data);
                setAllLinks(res.data.students.links);
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
                                  className="btn btn-primary btn-sm"
                              >
                                  Add Result
                              </Link>
                          </td>
                      </tr>
                  );
              });

    console.log(links);

    var Pagination_HTML = "";

    if (links.length === 0) {
        return <></>;
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
                                className="form-control"
                                placeholder="Search..."
                                aria-label="Search..."
                                aria-describedby="button-addon2"
                                onChange={(e) => setSearchTeam(e.target.value)}
                                // value={searchInput.name}
                            />
                            <button
                                className="btn btn-primary text-white"
                                type="submit"
                                id="button-addon2"
                                // onClick={searchData}
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
                    <table className="table table-dark table-striped text-center text-nowrap">
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
