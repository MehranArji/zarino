import { Scale, Banknote, Hammer, ChevronRight } from "lucide-react";
import { FC } from "react";
import Container from "../Wrapper";

interface HistoryItemProps {}

const HistoryItem: FC<HistoryItemProps> = (props) => {
    const {} = props;
    return (
        <Container className="py-4 flex items-center" dir="ltr">
            <div>
                <p className="flex items-center text-xl mb-2">
                    <small className="text-xs text-slate-400 font-light mr-2">
                        تومان
                    </small>
                    ۱۱٬۲۰۰٬۰۰۰
                </p>
                <div className="flex gap-4 text-slate-600 text-left">
                    <p className="flex items-center text-xs">
                        <Scale
                            size={16}
                            className="stroke-slate-400 mr-1"
                            strokeWidth={1}
                        />
                        ۲٫۲۳۰
                    </p>
                    <p className="flex items-center text-xs">
                        <Banknote
                            size={16}
                            className="stroke-slate-400 mr-1"
                            strokeWidth={1}
                        />
                        ۱٬۲۰۰٬۰۰۰
                    </p>
                    <p className="flex items-center text-xs">
                        <Hammer
                            size={16}
                            className="stroke-slate-400 mr-1"
                            strokeWidth={1}
                        />
                        ٪۷
                    </p>
                </div>
            </div>
            <ChevronRight
                size={32}
                className="stroke-slate-400 ml-auto"
                strokeWidth={1}
            />
        </Container>
    );
};

export default HistoryItem;
