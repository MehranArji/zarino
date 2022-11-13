import { FC } from "react";

interface InputRowLabelProps {
    title?: string;
    subtitle?: string;
}

const InputRowLabel: FC<InputRowLabelProps> = (props) => {
    const { title, subtitle } = props;
    return (
        <>
            {title && <p className="text-slate-600 font-bold">{title}</p>}
            {subtitle && (
                <p className="text-xs text-slate-400 font-light whitespace-nowrap">{subtitle}</p>
            )}
        </>
    );
};

export default InputRowLabel;
