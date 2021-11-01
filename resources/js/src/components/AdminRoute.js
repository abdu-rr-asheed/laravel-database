import axios from "axios";
import React, { useEffect, useState } from "react";
import { Route, Redirect, useHistory } from "react-router-dom";
import AdminLayout from "./admin/AdminLayout";

const AdminRoute = ({ ...rest }) => {
    const history = useHistory();

    const [Authenticated, setAuthenticated] = useState(false);
    const [loading, setloading] = useState(true);

    useEffect(() => {
        axios.get(`/api/checkingAuthenticated`).then((res) => {
            if (res.status === 200) {
                setAuthenticated(true);
            }
            setloading(false);
        });

        return () => {
            setAuthenticated(false);
        };
    }, []);

    axios.interceptors.response.use(
        undefined,
        function axiosRetryInterceptor(err) {
            if (err.response.status === 401) {
                swal("Unauthorized", err.response.data.message, "warning");
                history.push("/");
            }
            return Promise.reject(err);
        }
    );

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

    if (loading) {
        return (
            <div
                className="d-flex justify-content-center align-items-center"
                style={{ height: "100vh" }}
            >
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    return (
        <Route
            {...rest}
            render={({ props, location }) =>
                Authenticated ? (
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
