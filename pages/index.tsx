import LinearProgressWithLabel from "@/components/LinearProgressWithLabel";
import LinearProgress, {
    LinearProgressProps,
} from "@mui/material/LinearProgress";
import { useEffect, useState } from "react";

export default function Page() {
    const [state, setState] = useState<number>(0);
    useEffect(() => {
        const interval = setInterval(
            () => setState((prev) => (prev !== 100 ? prev + 10 : 0)),
            2000
        );
        () => clearInterval(interval);
    }, []);
    return (
        <main className="p-10 text-stone-500 grid gap-10 items-center ">
            <h1>Ziad is cool</h1>
            <h2>Anas is gays 🌈</h2>
            <LinearProgressWithLabel value={state} variant="determinate" />
        </main>
    );
}
