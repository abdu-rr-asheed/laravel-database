import React from "react";
import { Route } from "react-router-dom";
import FrontendLayout from "./components/frontend/FrontendLayout";

const PublicRoute = ({ ...rest }) => {
    return (
        <Route
            {...rest}
            render={({ props, location }) =>
                localStorage.getItem("auth_token") ? (
                    <FrontendLayout {...props} />
                ) : (
                    <Redirect
                        to={{ pathname: "/", state: { from: location } }}
                    />
                )
            }
        />
    );
    // return (
    //     <Route {...rest} render={(props) => <FrontendLayout {...props} />} />
    // );
};
export default PublicRoute;
