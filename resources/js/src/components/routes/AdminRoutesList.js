import IndexAdmin from "../admin/IndexAdmin";
import Add from "../admin/Addcandidate";
import Edit from "../admin/Edit";

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
];

export default adminRouteList;
