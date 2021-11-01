import React from "react";
import { Route, Redirect } from "react-router-dom";
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
};
export default PublicRoute;
