import React from "react";
import ReactDOM from "react-dom";
import "../../css/app.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Index from "./components/Index";
import Add from "./components/Addcandidate";
import Edit from "./components/Edit";
import Result from "./components/Result";
import Addresult from "./components/Addresult";
import UpdateCandidate from "./components/UpdateCandidate";

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Index} />
                <Route path="/AddCandidate" component={Add} />
                <Route path="/Edit/:id" component={Edit} />
                <Route path="/Addresult" component={Addresult} />
                <Route path="/result" component={Result} />
                <Route path="/updateCandidate" component={UpdateCandidate} />
            </Switch>
        </Router>
    );
};

export default App;

ReactDOM.render(<App />, document.getElementById("app"));
