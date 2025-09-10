import { useEffect, useState } from "react";

export default function useWindowAvailabile() {
    const [hasWindow, setHasWindow] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            setHasWindow(true);
        }

    }, []);

    return hasWindow
}