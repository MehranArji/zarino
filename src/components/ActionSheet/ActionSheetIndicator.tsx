import clsx from "clsx";
import { ChevronUp } from "lucide-react";
import { FC } from "react";

interface ActionSheetIndicatorProps {
    isOpen?: boolean;
}

const ActionSheetIndicator: FC<ActionSheetIndicatorProps> = (props) => {
    const { isOpen } = props;
    return (
        <>
            <ChevronUp
                className={clsx(
                    "inline-block stroke-slate-300 transition-transform",
                    { "-scale-y-100": isOpen }
                )}
                size={32}
                strokeWidth={1}
            />
        </>
    );
};

export default ActionSheetIndicator;
