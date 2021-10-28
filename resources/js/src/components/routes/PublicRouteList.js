import Index from "../frontend/Index";
import Result from "../frontend/Result";
import Addresult from "../frontend/Addresult";
import Searchresult from "../frontend/Searchresult";
import Try from "../frontend/Try";
import EditResult from "../frontend/EditResult";

const publicRoutesList = [
    { path: "/user/Try", exact: true, name: "Try", component: Try },
    { path: "/user/result", exact: true, name: "Result", component: Result },
    {
        path: "/user/searchresult",
        exact: true,
        name: "SearchResult",
        component: Searchresult,
    },
    {
        path: "/user/add-result/:id",
        exact: true,
        name: "Addresult",
        component: Addresult,
    },
    {
        path: "/user/edit-result/:id",
        exact: true,
        name: "EditResult",
        component: EditResult,
    },
    {
        path: "/user/candidate",
        exact: true,
        name: "Candidate",
        component: Index,
    },
];

export default publicRoutesList;
