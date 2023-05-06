import clsx from "clsx";
import { ComponentPropsWithoutRef, forwardRef, ReactNode } from "react";
import Container from "../Wrapper";

interface InputRowProps {
    label?: ReactNode;
}

const InputRow = forwardRef<
    HTMLInputElement,
    ComponentPropsWithoutRef<"input"> & InputRowProps
>((props, ref) => {
    const { className, label, disabled, ...rest } = props;

    return (
        <div
            className={clsx("border-b", {
                "bg-white": !disabled,
                "bg-slate-50": disabled,
            })}
        >
            <Container>
                <label className="relative flex gap-4 py-3">
                    {label && (
                        <div className="flex flex-col justify-center">
                            {label}
                        </div>
                    )}
                    <input
                        className={clsx(
                            "w-full",
                            "text-4xl",
                            "appearance-none",
                            "bg-transparent outline-none",
                            "disabled:cursor-not-allowed disabled:text-slate-400",
                            className
                        )}
                        ref={ref}
                        disabled={disabled}
                        {...rest}
                    />
                </label>
            </Container>
        </div>
    );
});

InputRow.displayName = "InputRow";

export default InputRow;
