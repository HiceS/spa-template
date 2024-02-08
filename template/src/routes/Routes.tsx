// <IconBolt size="1rem" />, color: "blue", label: "Production", disabled: false
import {
    IconAppsFilled
} from "@tabler/icons-react";
import { ReactNode } from "react";
import TestRoute from "./TestRoute";
import Home from "./Home";

type RouteConfig = {
    name: string;
    path: string;
    icon: ReactNode;
    disabled: boolean;
    element?: ReactNode;
};

const iconsize = "1.2rem";

export const routes: RouteConfig[] = [
    {
        name: "Home",
        path: "/",
        icon: <IconAppsFilled size={iconsize} />,
        disabled: false,
        element: <Home />
    },
    {
        name: "IO Dashboard",
        path: "/io_dashboard",
        icon: <IconAppsFilled size={iconsize} />,
        disabled: false,
        element: <TestRoute />
    }
];
