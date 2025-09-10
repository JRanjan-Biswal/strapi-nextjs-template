import { useEffect, useState } from "react";

const useWindowWidth = () => {
    const [windowWidth, setWindowWidth] = useState(0);

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        if (typeof window === "undefined") return
        // Get initial window width
        handleResize();

        // Attach event listener to update on window resize
        window.addEventListener("resize", handleResize);

        // Clean up the event listener on unmount
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowWidth;
};

export default useWindowWidth;
