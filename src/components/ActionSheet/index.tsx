import { Disclosure } from "@headlessui/react";
import clsx from "clsx";
import { FC, ReactNode } from "react";
import Customizable from "../Customizable";
import ActionSheetIndicator from "./ActionSheetIndicator";

interface ActionSheetProps {
    content?: ReactNode;
    children?: ReactNode;
}

const ActionSheet: FC<ActionSheetProps & Customizable> = (props) => {
    const { children, content } = props;

    return (
        <Disclosure>
            {({ open }) => (
                <>
                    <Disclosure.Panel>
                        <Disclosure.Button>
                            <div className="bg-black/60 fixed inset-0 z-30" />
                        </Disclosure.Button>
                    </Disclosure.Panel>

                    <div
                        className={clsx(
                            "flex flex-col",
                            "bg-white border-t fixed bottom-0 right-0 left-0 transition-all z-50",
                            {
                                "h-20": !open,
                                "h-3/4": open,
                            }
                        )}
                    >
                        <div className="min-h-[80px]">
                            <Disclosure.Button className="block text-center my-1 w-full">
                                <ActionSheetIndicator isOpen={open} />
                            </Disclosure.Button>
                            {content}
                        </div>

                        <Disclosure.Panel className="flex-1 border-t overflow-auto">
                            {children}
                        </Disclosure.Panel>
                    </div>
                </>
            )}
        </Disclosure>
    );
};

export default ActionSheet;
