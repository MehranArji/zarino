import clsx from "clsx";
import { ComponentPropsWithoutRef, forwardRef, ReactNode } from "react";

interface InputRowProps {
    label?: ReactNode;
}

const InputRow = forwardRef<
    HTMLInputElement,
    ComponentPropsWithoutRef<"input"> & InputRowProps
>((props, ref) => {
    const { className, label, ...rest } = props;

    return (
        <label
            className={clsx(
                "relative flex gap-4",
                "px-4 py-3",
                "bg-white border-b"
            )}
        >
            {label && (
                <div className="flex flex-col justify-center">{label}</div>
            )}
            <input
                className={clsx(
                    "w-full",
                    "text-2xl",
                    "appearance-none",
                    "bg-transparent outline-none",
                    className
                )}
                ref={ref}
                {...rest}
            />
        </label>
    );
});

InputRow.displayName = "InputRow";

export default InputRow;
