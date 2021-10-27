import Index from "../frontend/Index";
import Add from "../frontend/Addcandidate";
import Edit from "../frontend/Edit";
import Result from "../frontend/Result";
import Addresult from "../frontend/Addresult";
import Login from "../frontend/Login";
import Register from "../frontend/Register";
import Searchresult from "../frontend/Searchresult";
import Try from "../frontend/Try";
import EditResult from "../frontend/EditResult";

const publicRoutesList = [
    { path: "/", exact: true, name: "Home", component: Index },
    {
        path: "/AddCandidate",
        exact: true,
        name: "AddCandidate",
        component: Add,
    },
    {
        path: "/edit-student/:id",
        exact: true,
        name: "Edit",
        component: Edit,
    },
    { path: "/Try", exact: true, name: "Try", component: Try },
    { path: "/result", exact: true, name: "Result", component: Result },
    {
        path: "/searchresult",
        exact: true,
        name: "SearchResult",
        component: Searchresult,
    },
    {
        path: "/add-result/:id",
        exact: true,
        name: "Addresult",
        component: Addresult,
    },
    {
        path: "/edit-result/:id",
        exact: true,
        name: "EditResult",
        component: EditResult,
    },
    {
        path: "/login",
        exact: true,
        name: "Login",
        component: Login,
    },
    {
        path: "/register",
        exact: true,
        name: "Register",
        component: Register,
    },
];

export default publicRoutesList;
