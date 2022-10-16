import { RotateCw, Settings } from "lucide-react";
import { FC, useState } from "react";
import Container from "../Container";
import HeaderTabs from "../HeaderTabs";
import Logo from "./Logo";

interface HeaderProps {}

const Header: FC<HeaderProps> = (props) => {
    const {} = props;
    const [activeTab, setActiveTab] = useState(0);

    return (
        <>
            <div className="bg-white">
                <Container>
                    <div className="flex items-center">
                        <Logo className="text-amber-500 my-3" />
                    </div>
                </Container>
            </div>
            <div className="bg-white border-b sticky top-0 z-10">
                <Container className="-mb-px">
                    <div className="flex items-center">
                        <HeaderTabs
                            tabs={["خرید", "فروش"]}
                            active={activeTab}
                            onChange={setActiveTab}
                        />
                        <div className="flex gap-4 mr-auto">
                            <button>
                                <Settings
                                    size={18}
                                    className="stroke-slate-600"
                                    strokeWidth={1}
                                />
                            </button>
                            <button>
                                <RotateCw
                                    size={18}
                                    className="stroke-slate-600"
                                    strokeWidth={1}
                                />
                            </button>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
};

export default Header;
