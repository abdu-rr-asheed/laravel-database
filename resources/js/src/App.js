import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Index from "./components/Index";
import Add from "./components/Add";
import Edit from "./components/Edit";

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Index />
                </Route>
                <Route path="/Add">
                    <Add />
                </Route>
                <Route path="/Edit/:id">
                    <Edit />
                </Route>
            </Switch>
        </Router>
    );
};

export default App;

ReactDOM.render(<App />, document.getElementById("app"));
