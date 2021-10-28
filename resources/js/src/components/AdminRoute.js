import React from "react";
import { Redirect, Route } from "react-router-dom";
import AdminLayout from "./admin/AdminLayout";

const AdminRoute = ({ ...rest }) => {
    return (
        <Route
            {...rest}
            render={({ props, location }) =>
                localStorage.getItem("auth_token") ? (
                    <AdminLayout {...props} />
                ) : (
                    <Redirect
                        to={{ pathname: "/", state: { from: location } }}
                    />
                )
            }
        />
    );
};

export default AdminRoute;
