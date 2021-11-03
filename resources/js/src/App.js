import React from "react";
import ReactDOM from "react-dom";
import "../../css/app.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import axios from "axios";
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
                <AdminRoute path="/admin" name="Admin" />
                <PublicRoute path="/user" name="User" />
                <Route path="/" exact component={Login} />
                <Route path="/register" exact component={Register} />
                {/* <Route path="/">
                    {localStorage.getItem("auth_token") ? (
                        <Redirect to="/user/candidate" />
                    ) : (
                        <Login />
                    )}
                </Route> */}
                {/* <Route path="/register">
                    {localStorage.getItem("auth_token") ? (
                        <Redirect to="/user/candidate" />
                    ) : (
                        <Register />
                    )}
                </Route> */}
            </Switch>
        </Router>
    );
};

export default App;

ReactDOM.render(<App />, document.getElementById("app"));
