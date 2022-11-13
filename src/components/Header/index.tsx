import { RotateCw, Settings } from "lucide-react";
import { FC } from "react";
import routes from "../../helpers/routes";
import Container from "../Container";
import HeaderTabs from "../HeaderTabs";
import Logo from "./Logo";

const Header: FC = () => {

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
                            routes={[
                                { name: "فروش", to: routes.sell },
                                { name: "خرید", to: routes.buy },
                                { name: "تبدیل", to: routes.convert },
                            ]}
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
