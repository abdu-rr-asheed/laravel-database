import axios from "axios";
import React from "react";
import { Route, Redirect, useHistory } from "react-router-dom";
import swal from "sweetalert";
import FrontendLayout from "./components/frontend/FrontendLayout";

const PublicRoute = ({ ...rest }) => {
    const history = useHistory();

    axios.interceptors.response.use(
        function (response) {
            return response;
        },
        function (error) {
            if (error.response.status === 403) {
                //Access Denied
                swal("Forbedden", error.response.data.message, "warning");
                history.push("/");
            } else if (error.response.status === 404) {
                //page Not Found
                swal("404 Error", "Url/Page Not found", "warning");
                history.push("/");
            }
            return Promise.reject(error);
        }
    );

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
