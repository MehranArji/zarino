import { FC } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header";

const TabbedLayout: FC = () => {
    return (
        <div className="min-h-screen bg-slate-100 flex flex-col pb-20">
            <Header />
            <Outlet />
        </div>
    );
};

export default TabbedLayout;
