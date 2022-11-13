import { FC, useEffect, useMemo, useRef, useState } from "react";
import InputRow from "../../components/InputRow";
import InputRowLabel from "../../components/InputRow/InputRowLabel";
import BuyActionSheet from "./BuyActionSheet";

const Buy: FC = () => {
    const [quotation, setQuotation] = useState(0);
    const [weight, setWeight] = useState(0);
    const weightInputRef = useRef<HTMLInputElement>(null);

    const price = useMemo(
        () => Math.max(((quotation - 50) / 4.3318) * 1000, 0),
        [quotation]
    );

    const result = useMemo(() => price * weight || null, [price, weight]);

    const onSubmit = () => {
        quotation && localStorage.setItem("quotation", quotation + "");

        weightInputRef.current?.select();
    };

    useEffect(() => {
        weightInputRef.current?.focus();

        setQuotation(+(localStorage.getItem("quotation") || 0));
    }, []);

    return (
        <>
            <form
                onSubmit={(ev) => {
                    ev.preventDefault();
                    onSubmit();
                }}
            >
                <InputRow
                    className="text-left"
                    dir="ltr"
                    type="number"
                    value={quotation}
                    min={0}
                    onFocus={(ev) => ev.target.select()}
                    onChange={(ev) => setQuotation(parseFloat(ev.target.value))}
                    label={<InputRowLabel title="مظنه" subtitle="هزار تومان" />}
                />
                <InputRow
                    className="text-left"
                    dir="ltr"
                    value={price.toLocaleString("fa", {
                        maximumFractionDigits: 0,
                    })}
                    onFocus={(ev) => ev.target.select()}
                    label={<InputRowLabel title="قیمت" subtitle="تومان" />}
                    tabIndex={-1}
                    readOnly
                />
                <InputRow
                    className="text-left"
                    dir="ltr"
                    type="number"
                    value={weight}
                    min={0}
                    step={0.01}
                    ref={weightInputRef}
                    onFocus={(ev) => ev.target.select()}
                    onChange={(ev) => setWeight(parseFloat(ev.target.value))}
                    label={<InputRowLabel title="وزن" subtitle="گرم" />}
                />
                <button type="submit" className="sr-only" tabIndex={-1}>
                    Submit
                </button>
            </form>
            <BuyActionSheet result={result} />
        </>
    );
};

export default Buy;
