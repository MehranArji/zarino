import { FC } from "react";
import ActionSheet from "../../components/ActionSheet";
import Container from "../../components/Wrapper";

interface ConvertActionSheetProps {
    result750: number;
    result990: number;
}

const ConvertActionSheet: FC<ConvertActionSheetProps> = (props) => {
    const { result750, result990 } = props;
    return (
        <ActionSheet
            content={
                <Container>
                    <p className="flex justify-between leading-none">
                        <span>
                            {result750?.toLocaleString("fa", {
                                useGrouping: false,
                                minimumFractionDigits: 3,
                            }) || "🙄"}{" "}
                            <small className="text-xs text-slate-400 font-light">
                                گرم به ۷۵۰
                            </small>
                        </span>
                        <span className="mx-2 text-slate-200">.</span>
                        <span>
                            {result990?.toLocaleString("fa", {
                                useGrouping: false,
                                minimumFractionDigits: 3,
                            }) || "🙄"}{" "}
                            <small className="text-xs text-slate-400 font-light">
                                گرم به ۹۹۰
                            </small>
                        </span>
                    </p>
                </Container>
            }
        ></ActionSheet>
    );
};

export default ConvertActionSheet;
