import IndexAdmin from "../admin/IndexAdmin";
import Add from "../admin/Addcandidate";
import Edit from "../admin/Edit";
import EditResultAd from "../admin/EditResultAd";
import SearchresultAd from "../admin/SearchresultAd";
import AddresultAd from "../admin/AddresultAd";
import ResultAd from "../admin/ResultAd";

const adminRouteList = [
    {
        path: "/admin",
        exact: true,
        name: "Admin",
        component: IndexAdmin,
    },
    {
        path: "/admin/addCandidate",
        exact: true,
        name: "AddCandidate",
        component: Add,
    },
    {
        path: "/admin/edit-student/:id",
        exact: true,
        name: "Edit",
        component: Edit,
    },
    { path: "/admin/result", exact: true, name: "ResultAdmin", component: ResultAd },
    {
        path: "/admin/searchresult",
        exact: true,
        name: "SearchResultAdmin",
        component: SearchresultAd,
    },
    {
        path: "/admin/add-result/:id",
        exact: true,
        name: "AddresultAdmin",
        component: AddresultAd,
    },
    {
        path: "/admin/edit-ad-result/:id",
        exact: true,
        name: "EditResultAdmin",
        component: EditResultAd,
    },
];

export default adminRouteList;
