import React from "react";
import { Switch, Route } from "react-router";
import Navbar from "./Navbar";
import publicRoutesList from "../routes/PublicRouteList";

const FrontendLayout = () => {
    return (
        <div>
            <Navbar />
            <div>
                <Switch>
                    {publicRoutesList.map((routedata, idx) => {
                        return (
                            routedata.component && (
                                <Route
                                    key={idx}
                                    path={routedata.path}
                                    exact={routedata.exact}
                                    name={routedata.name}
                                    render={(props) => (
                                        <routedata.component {...props} />
                                    )}
                                />
                            )
                        );
                    })}
                </Switch>
            </div>
        </div>
    );
};

export default FrontendLayout;
