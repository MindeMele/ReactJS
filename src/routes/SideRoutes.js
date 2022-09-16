import { Navigate } from "react-router-dom";
import Dashboard from "../components/Layout/Navigation/Dashboard";
import Actions from "../components/Layout/Navigation/Actions";
import Invoice from "../components/Layout/Navigation/Invoice";
import Schedule from "../components/Layout/Navigation/Schedule";
import Calendar from "../components/Layout/Navigation/Calendar";
import Messages from "../components/Layout/Navigation/Messages";
import Notifications from "../components/Layout/Navigation/Notifications";
import Settings from "../components/Layout/Navigation/Settings";
import Profile from "../components/Layout/Profile";

const sideroutes = [
    { path: "/", exact: true, element: <Navigate to="/dashboard" /> },
    {
        path: "/dashboard",
        exact: true,
        name: "Dashboard",
        element: <Dashboard />,
        index: true,
    },
    { path: "/actions", exact: true, name: "Actions", element: <Actions /> },
    { path: "/invoice", exact: true, name: "Invoice", element: <Invoice /> },
    { path: "/schedule", exact: true, name: "Schedule", element: <Schedule /> },
    { path: "/calendar", exact: true, name: "Calendar", element: <Calendar /> },
    { path: "/messages", exact: true, name: "Messages", element: <Messages /> },
    { path: "/notifications", exact: true, name: "Notifications", element: <Notifications /> },
    { path: "/settings", exact: true, name: "Settings", element: <Settings /> },
    { path: "/profile", exact: true, name: "Profile", element: <Profile /> },
];

export default sideroutes;
