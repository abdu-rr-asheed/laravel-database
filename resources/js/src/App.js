import React from "react";
import ReactDOM from "react-dom";
import "../../css/app.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import Index from "./components/Index";
import Add from "./components/Addcandidate";
import Edit from "./components/Edit";
import Result from "./components/Result";
import Addresult from "./components/Addresult";
import Login from "./components/Login";
import Register from "./components/Register";
import axios from "axios";
import Searchresult from "./components/Searchresult";
import Try from "./components/Try";
import EditResult from "./components/EditResult";

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
                <Route exact path="/" component={Index} />
                <Route path="/AddCandidate" component={Add} />
                <Route path="/edit-student/:id" component={Edit} />
                <Route path="/try" component={Try} />
                <Route path="/result" component={Result} />
                <Route path="/searchresult" component={Searchresult} />
                <Route path="/add-result/:id" component={Addresult} />
                <Route path="/edit-result/:id" component={EditResult} />

                <Route path="/login">
                    {localStorage.getItem("auth_token") ? (
                        <Redirect to="/" />
                    ) : (
                        <Login />
                    )}
                </Route>
                <Route path="/register">
                    {localStorage.getItem("auth_token") ? (
                        <Redirect to="/" />
                    ) : (
                        <Register />
                    )}
                </Route>

                {/* <Route path="/login" component={Login} />
                <Route path="/register" component={Register} /> */}
            </Switch>
        </Router>
    );
};

export default App;

ReactDOM.render(<App />, document.getElementById("app"));
