import { ComponentPropsWithoutRef, forwardRef } from "react";

const AppWrapper = forwardRef<HTMLDivElement, ComponentPropsWithoutRef<"div">>((props, ref) => {
    const { className, children, ...rest } = props;

    return (
        <div className="
                min-w-full sm:min-w-0
                mx-auto lg:my-10
                lg:rounded-lg
                lg:overflow-hidden
                sm:border-x md:border
            "
            ref={ref} {...rest}>
            {children}
        </div>
    );
});

AppWrapper.displayName = "AppWrapper";

export default AppWrapper;