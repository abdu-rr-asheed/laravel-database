import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Index from "./components/Index";
import Add from "./components/Addcandidate";
import Edit from "./components/Edit";
import Result from "./components/Result";
import Addresult from "./components/Addresult";

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Index />
                </Route>
                <Route path="/AddCandidate">
                    <Add />
                </Route>
                <Route path="/Edit/:id">
                    <Edit />
                </Route>
                <Route path="/Addresult">
                    <Addresult />
                </Route>
                <Route path="/result">
                    <Result />
                </Route>
            </Switch>
        </Router>
    );
};

export default App;

ReactDOM.render(<App />, document.getElementById("app"));
