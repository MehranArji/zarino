import clsx from "clsx";
import { FC } from "react";
import Customizable from "../Customizable";

interface LogoProps {}

const Logo: FC<LogoProps & Customizable> = (props) => {
    const { className } = props;
    return (
        <p className={clsx("inline-block font-black text-2xl", className)}>
            زرینو
        </p>
    );
};

export default Logo;
