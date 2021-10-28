import React from "react";
import ReactDOM from "react-dom";
import "../../css/app.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
// import Index from "./components/frontend/Index";
// import Add from "./components/frontend/Addcandidate";
// import Edit from "./components/frontend/Edit";
// import Result from "./components/frontend/Result";
// import Addresult from "./components/frontend/Addresult";
// import Login from "./components/frontend/Login";
// import Register from "./components/frontend/Register";
import axios from "axios";
// import Searchresult from "./components/frontend/Searchresult";
// import Try from "./components/frontend/Try";
// import EditResult from "./components/frontend/EditResult";
// import IndexAdmin from "./components/admin/IndexAdmin";
import PublicRoute from "./PublicRoute";
import Login from "./components/frontend/Login";
import Register from "./components/frontend/Register";
import AdminRoute from "./components/AdminRoute";

axios.defaults.baseURL = "http://localhost:8001";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["Accept"] = "application/json";
axios.defaults.withCredentials = true;
axios.interceptors.request.use(function (config) {
    const token = localStorage.getItem("auth_token");
    config.headers.Authorization = token ? `Bearer ${token}` : "";
    return config;
});

const App = () => {
    return (
        <Router>
            <Switch>
                {/* <Route exact path="/" component={Index} />
                <Route path="/AddCandidate" component={Add} />
                <Route path="/edit-student/:id" component={Edit} />
                <Route path="/try" component={Try} />
                <Route path="/result" component={Result} />
                <Route path="/searchresult" component={Searchresult} />
                <Route path="/add-result/:id" component={Addresult} />
                <Route path="/edit-result/:id" component={EditResult} /> */}

                <AdminRoute path="/admin" name="Admin" />

                <PublicRoute path="/user" name="User" />

                <Route path="/">
                    {localStorage.getItem("auth_token") ? (
                        <Redirect to="/user/candidate" />
                    ) : (
                        <Login />
                    )}
                </Route>
                <Route path="/register">
                    {localStorage.getItem("auth_token") ? (
                        <Redirect to="/user/candidate" />
                    ) : (
                        <Register />
                    )}
                </Route>

                {/* <Route path="/admin" component={IndexAdmin} /> */}
            </Switch>
        </Router>
    );
};

export default App;

ReactDOM.render(<App />, document.getElementById("app"));
