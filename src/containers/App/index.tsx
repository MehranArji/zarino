import {
    Banknote,
    ChevronRight,
    Coins,
    Equal,
    Hammer,
    History,
    Scale,
} from "lucide-react";
import { FC, useEffect, useMemo, useRef, useState } from "react";
import ActionSheet from "../../components/ActionSheet";
import Container from "../../components/Container";
import Header from "../../components/Header";
import InputRow from "../../components/InputRow";

interface AppProps {}

const App: FC<AppProps> = (props) => {
    const {} = props;
    const [priceStr, setPriceStr] = useState("");
    const [wageStr, setWageStr] = useState("");
    const [weightStr, setWeightStr] = useState("");
    const [profitStr, setProfitStr] = useState("");
    const wageInputRef = useRef<HTMLInputElement>(null);
    const weightInputRef = useRef<HTMLInputElement>(null);

    const result = useMemo(() => {
        const price = +priceStr;
        const wage = +wageStr;
        const profit = +profitStr;
        const weight = parseFloat(weightStr);

        let result = price;

        result += result * (wage / 100);
        result += result * (profit / 100);
        result = result * weight;

        return result || "🙄";
    }, [priceStr, wageStr, weightStr, profitStr]);

    const onSubmit = () => {
        weightInputRef.current?.focus();
        weightInputRef.current?.select();
    };

    useEffect(() => {
        const regex = /^\d*\.\d{3,}$/;

        if (regex.test(weightStr + "")) {
            wageInputRef.current?.focus();
            wageInputRef.current?.select();
        }
    }, [weightStr]);

    return (
        <div className="min-h-screen bg-slate-100 flex flex-col pb-20">
            <Header />
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
                    value={priceStr}
                    min={0}
                    step={500}
                    onChange={(ev) => setPriceStr(ev.target.value)}
                    label={
                        <>
                            <p className="text-slate-600 font-bold">نرخ</p>
                            <p className="text-xs text-slate-400 font-light">
                                تومان
                            </p>
                        </>
                    }
                />
                <InputRow
                    className="text-left"
                    dir="ltr"
                    type="number"
                    value={profitStr}
                    min={0}
                    onChange={(ev) => setProfitStr(ev.target.value)}
                    label={
                        <>
                            <p className="text-slate-600 font-bold">سود</p>
                            <p className="text-xs text-slate-400 font-light">
                                درصد
                            </p>
                        </>
                    }
                />
                <InputRow
                    className="text-left"
                    dir="ltr"
                    type="number"
                    ref={weightInputRef}
                    value={weightStr}
                    min={0}
                    step={0.01}
                    onChange={(ev) => setWeightStr(ev.target.value)}
                    label={
                        <>
                            <p className="text-slate-600 font-bold">وزن</p>
                            <p className="text-xs text-slate-400 font-light">
                                گرم
                            </p>
                        </>
                    }
                />
                <InputRow
                    className="text-left"
                    dir="ltr"
                    type="number"
                    ref={wageInputRef}
                    value={wageStr}
                    min={0}
                    onChange={(ev) => setWageStr(ev.target.value)}
                    label={
                        <>
                            <p className="text-slate-600 font-bold">اجرت</p>
                            <p className="text-xs text-slate-400 font-light">
                                درصد
                            </p>
                        </>
                    }
                />
                <button type="submit" className="sr-only">
                    Submit
                </button>
            </form>

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
                                {result.toLocaleString()}{" "}
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
                        .map(() => (
                            <div className="border-b last:border-b-0">
                                <Container
                                    className="py-4 flex items-center"
                                    dir="ltr"
                                >
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
                            </div>
                        ))}
                </>
            </ActionSheet>
        </div>
    );
};

export default App;
