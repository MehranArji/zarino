import {
    Coins, History
} from "lucide-react";
import { FC } from "react";
import ActionSheet from "../../components/ActionSheet";
import Container from "../../components/Container";
import HistoryItem from "../../components/History/HistoryItem";

interface SellActionSheetProps {
    result?: number | null;
}

const SellActionSheet: FC<SellActionSheetProps> = (props) => {
    const { result } = props;

    return (
        <ActionSheet
            content={
                <Container>
                    <p className="flex leading-none">
                        <Coins
                            size={18}
                            strokeWidth={1}
                            className="stroke-amber-500 ml-2"
                        />
                        <span className="text-xs text-amber-500 font-light">
                            قیمت
                        </span>
                        <span className="mr-auto">
                            {result?.toLocaleString() || "🙄"}{" "}
                            <small className="text-xs text-slate-400 font-light">
                                تومان
                            </small>
                        </span>
                    </p>
                </Container>
            }
        >
            <>
                <div className="bg-slate-100 py-1 border-b">
                    <Container>
                        <p className="flex items-center text-xs text-slate-400 font-light">
                            <History
                                size={18}
                                strokeWidth={1}
                                className="stroke-slate-400 ml-2"
                            />
                            اخیرا
                            <span className="mr-auto">۱۲ مورد</span>
                        </p>
                    </Container>
                </div>
                {Array(12)
                    .fill(true)
                    .map((_, i) => (
                        <div className="border-b last:border-b-0" key={i}>
                            <HistoryItem />
                        </div>
                    ))}
            </>
        </ActionSheet>
    );
};

export default SellActionSheet;
