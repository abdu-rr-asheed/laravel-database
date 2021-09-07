import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import BtnCandidate from "./BtnCandidate";
import Navbar from "./Navbar";
import axios from "axios";
import swal from "sweetalert";

const Index = () => {
    const [allstudents, setAllstudents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        document.title = "E-learning System";
        axios.get("http://192.168.43.54:8001/api/students").then((res) => {
            if (res.data.status === 200) {
                setAllstudents(res.data.students);
                setLoading(false);
            }
        });
    }, []);

    const deleteStudent = (e, id) => {
        e.preventDefault();

        const thisClicked = e.currentTarget;
        thisClicked.disable = true;

        axios
            .delete(`http://192.168.43.54:8001/api/delete-student/${id}`)
            .then((res) => {
                if (res.data.status === 200) {
                    thisClicked.closest("tr").remove();
                    swal("Success", res.data.message, "success");
                } else if (res.data.status === 404) {
                    swal("Warning", res.data.message, "warning");
                    thisClicked.disable = true;
                }
            });
    };

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
    } else {
        {
            var student_HTMLTABLE = "";
            student_HTMLTABLE = allstudents.map((item) => {
                return (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.first_Name}</td>
                        <td>{item.last_Name}</td>
                        <td>{item.email}</td>
                        <td>{item.industry}</td>
                        <td>
                            <img
                                src={
                                    "http://192.168.43.54:8001/images/students/" +
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
                                className="btn"
                            >
                                <i className="fas fa-edit"></i>
                            </Link>
                        </td>
                        <td>
                            <button
                                onClick={(e) => deleteStudent(e, item.id)}
                                className="btn"
                            >
                                <i className="fas fa-window-close"></i>
                            </button>
                        </td>
                    </tr>
                );
            });
        }
    }

    return (
        <>
            <Navbar />
            <div className="row">
                {/* Search Bar  */}
                <div className="col-md-4 col-12 searchbar my-md-5 my-2">
                    <div className="input-group mb-3">
                        <Search />
                    </div>
                </div>
                <div className="col-md-8 col-12 my-md-5 my-2">
                    <div className="addbtn float-end ">
                        <BtnCandidate />
                    </div>
                </div>
            </div>

            {/* Table */}
            <div className="Chart">
                <div className="table-responsive">
                    <table className="table table-dark table-striped text-center text-nowrap">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
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
            </div>
        </>
    );
};

export default Index;

// import React, { Component } from "react";
// import axios from "axios";
// import Search from "./Search";
// import BtnCandidate from "./BtnCandidate";
// import Navbar from "./Navbar";
// import { Link } from "react-router-dom";

// class Index extends Component {
//     state = {
//         students: [],
//     };

//     async componentDidMount() {
//         document.title = "E-learnig System";
//         const res = await axios.get("http://127.0.0.1:8001/api/students");
//         if (res.data.status === 200) {
//             this.setState({
//                 students: res.data.students,
//             });
//         }
//     }

//     deleteStudent = async (e, id) => {
//         const thidClickFinda = e.currentTarget;
//         thidClickFinda.disabled = true;
//         const res = await axios.delete(
//             `http://127.0.0.1:8001/api/delete-student/${id}`
//         );
//         if (res.data.status === 200) {
//             thidClickFinda.closest("tr").remove();
//             console.log(res.data.message);
//         }
//     };
//     render() {
//         var student_HTMLTABLE = this.state.students.map((item) => {
//             return (
//                 <tr key={item.id}>
//                     <td>{item.id}</td>
//                     <td>{item.first_Name}</td>
//                     <td>{item.last_Name}</td>
//                     <td>{item.email}</td>
//                     <td>{item.industry}</td>
//                     <td>
//                         <img
//                             src={
//                                 "http://127.0.0.1:8001/images/students/" +
//                                 item.profile_photo
//                             }
//                             alt={item.last_Name}
//                             loading="lazy"
//                             width="100px"
//                         />
//                     </td>
//                     <td>
//                         <Link to={`edit-student/${item.id}`} className="btn">
//                             <i className="fas fa-edit"></i>
//                         </Link>
//                     </td>
//                     <td>
//                         <div
//                             onClick={(e) => this.deleteStudent(e, item.id)}
//                             className="btn"
//                         >
//                             <i className="fas fa-window-close"></i>
//                         </div>
//                     </td>
//                 </tr>
//             );
//         });
// }
// return (
//     <>
//         <Navbar />
{
    /* Search Bar  */
}
// <div className="searchbar d-flex justify-content-between my-5">
//     <div className="input-group mb-3 w-25">
//         <Search />
//     </div>
//     <div className="addbtn">
//         <BtnCandidate />
//     </div>
// </div>

{
    /* Table */
}

//                 <div className="Chart">
//                     <div className="table-responsive">
//                         <table className="table table-dark table-striped text-center">
//                             <thead>
//                                 <tr>
//                                     <th scope="col">#</th>
//                                     <th scope="col">First Name</th>
//                                     <th scope="col">Last Name</th>
//                                     <th scope="col">Email</th>
//                                     <th scope="col">industry</th>
//                                     <th scope="col">P.P</th>
//                                     <th scope="col">Edit</th>
//                                     <th scope="col">Delete</th>
//                                 </tr>
//                             </thead>
//                             <tbody>{student_HTMLTABLE}</tbody>
//                         </table>
//                     </div>
//                 </div>
//             </>
//         );
//     }
// }

// export default Index;
