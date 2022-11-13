import clsx from "clsx";
import { FC } from "react";
import { NavLink, To } from "react-router-dom";
import Customizable from "../Customizable";

interface HeaderTabsProps {
    routes: {
        to: To;
        name: string;
    }[];
}

const HeaderTabs: FC<HeaderTabsProps & Customizable> = (props) => {
    const { className, routes } = props;

    return (
        <div className={clsx("flex justify-start", className)}>
            {routes.map((route, index) => (
                <NavLink
                    key={index}
                    to={route.to}
                    className={({ isActive }) =>
                        clsx("p-3 border-b transition-colors", {
                            "border-b-amber-400 text-amber-500": isActive,
                            "border-b-transparent text-slate-600": !isActive,
                        })
                    }
                    replace
                >
                    {route.name}
                </NavLink>
            ))}
        </div>
    );
};

export default HeaderTabs;
