import { Coins } from "lucide-react";
import { FC, useMemo, useState } from "react";
import ActionSheet from "../../components/ActionSheet";
import Container from "../../components/Container";
import InputRow from "../../components/InputRow";
import InputRowLabel from "../../components/InputRow/InputRowLabel";
import ConvertActionSheet from "./ConvertActionSheet";

const Convert: FC = () => {
    const [source, setSource] = useState(0);
    const [carat, setCarat] = useState(750);

    const result750 = useMemo(() => source * (carat / 750), [source, carat]);
    const result990 = useMemo(() => source * (carat / 990), [source, carat]);

    return (
        <>
            <form
                onSubmit={(ev) => {
                    ev.preventDefault();
                }}
            >
                <InputRow
                    className="text-left"
                    dir="ltr"
                    type="number"
                    value={source}
                    min={0}
                    step={0.1}
                    onFocus={(ev) => ev.target.select()}
                    onChange={(ev) => setSource(parseFloat(ev.target.value))}
                    label={<InputRowLabel title="وزن" subtitle="گرم" />}
                />

                <InputRow
                    className="text-left"
                    dir="ltr"
                    type="number"
                    value={carat}
                    min={0}
                    max={1000}
                    step={1}
                    onFocus={(ev) => ev.target.select()}
                    onChange={(ev) => setCarat(parseFloat(ev.target.value))}
                    label={<InputRowLabel title="عیار" />}
                    list="common-carats"
                />
                <datalist id="common-carats">
                    <option>750</option>
                    <option>990</option>
                </datalist>

                <button type="submit" className="sr-only" tabIndex={-1}>
                    Submit
                </button>
            </form>

            <ConvertActionSheet result750={result750} result990={result990} />
        </>
    );
};

export default Convert;
