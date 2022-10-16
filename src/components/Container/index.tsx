import clsx from "clsx";
import { ComponentPropsWithoutRef, forwardRef } from "react";

const Container = forwardRef<HTMLDivElement, ComponentPropsWithoutRef<"div">>(
    (props, ref) => {
        const { className, children, ...rest } = props;

        return (
            <div
                className={clsx("container mx-auto px-4", className)}
                ref={ref}
                {...rest}
            >
                {children}
            </div>
        );
    }
);

Container.displayName = "Container";

export default Container;
