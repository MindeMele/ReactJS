import { RiAppsFill, RiNotification3Fill } from "react-icons/ri";
import { IoMdAnalytics, IoMdSettings } from "react-icons/io";
import { FaMoneyCheck } from "react-icons/fa";
import { AiFillSchedule, AiFillCalendar } from "react-icons/ai";
import { SiGooglemessages } from "react-icons/si";

const links = [
    {
        id: 1,
        text: "Namai",
        icon: <RiAppsFill />,
        link: "/dashboard",
    },
    {
        id: 2,
        text: "Veiksmai",
        icon: <IoMdAnalytics />,
        link: "/actions",
    },
    {
        id: 3,
        text: "Buhalterija",
        icon: <FaMoneyCheck />,
        link: "/invoice",
    },
    {
        id: 4,
        text: "Darbotvarkė",
        icon: <AiFillSchedule />,
        link: "/schedule",
    },
    {
        id: 5,
        text: "Kalendorius",
        icon: <AiFillCalendar />,
        link: "/calendar",
    },
    {
        id: 6,
        text: "Žinutės",
        icon: <SiGooglemessages />,
        link: "/messages",
    },
    {
        id: 7,
        text: "Pranešimai",
        icon: <RiNotification3Fill />,
        link: "/notifications",
    },
    {
        id: 8,
        text: "Nustatymai",
        icon: <IoMdSettings />,
        link: "/settings",
    },
];

export default links;
