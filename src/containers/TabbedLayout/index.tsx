import { FC } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header";

const TabbedLayout: FC = () => {
    return (
        <div className="bg-slate-100 flex flex-col h-full">
            <Header />
            <Outlet />
        </div>
    );
};

export default TabbedLayout;
