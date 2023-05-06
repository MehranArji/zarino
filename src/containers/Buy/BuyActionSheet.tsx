import { Coins } from "lucide-react";
import { FC } from "react";
import ActionSheet from "../../components/ActionSheet";
import Container from "../../components/Wrapper";

interface BuyActionSheetProps {
    result?: number | null;
}

const BuyActionSheet: FC<BuyActionSheetProps> = (props) => {
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
                            {result?.toLocaleString("fa", {
                                maximumFractionDigits: 0,
                            }) || "🙄"}{" "}
                            <small className="text-xs text-slate-400 font-light">
                                تومان
                            </small>
                        </span>
                    </p>
                </Container>
            }
        ></ActionSheet>
    );
};

export default BuyActionSheet;
