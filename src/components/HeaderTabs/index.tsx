import clsx from "clsx";
import { FC, ReactNode } from "react";
import Customizable from "../Customizable";

interface HeaderTabsProps {
    tabs?: ReactNode[];
    active?: number;
    onChange?: (tab: number) => void;
}

const HeaderTabs: FC<HeaderTabsProps & Customizable> = (props) => {
    const { className, tabs = [], active, onChange } = props;

    return (
        <div className={clsx("flex justify-start", className)}>
            {tabs.map((tab, index) => (
                <button
                    className={clsx(
                        "text-slate-600 p-3 border-b transition-colors",
                        {
                            "border-b-amber-400": index === active,
                            "border-b-transparent": index !== active,
                        }
                    )}
                    onClick={() => onChange?.(index)}
                    key={index}
                >
                    {tab}
                </button>
            ))}
        </div>
    );
};

export default HeaderTabs;
