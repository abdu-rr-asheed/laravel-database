import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Index from "./Index";
import Add from "./Addcandidate";
import Edit from "./Edit";
import Result from "./Result";
import Addresult from "./Addresult";
import UpdateCandidate from "./UpdateCandidate";
import Ex from "./Ex";

function Home() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Index} />
                <Route path="/AddCandidate" component={Add} />
                <Route path="/Edit/:id" component={Edit} />
                <Route path="/Addresult" component={Addresult} />
                <Route path="/result" component={Result} />
                <Route path="/updateCandidate" component={UpdateCandidate} />
                <Route path="/Ex" component={Ex} />
                {/* sad */}
            </Switch>
        </Router>
    );
}

export default Home;

ReactDOM.render(<Home />, document.getElementById("app"));
