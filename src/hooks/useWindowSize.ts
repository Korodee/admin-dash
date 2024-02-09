import { useEffect, useState } from "react";

interface WindowSize {
    width: number;
    height: number;
}

function useWindowSize(): WindowSize {
    const [windowSize, setWindowSize] = useState<WindowSize>({
        width: 0,
        height: 0,
    });

    useEffect(() => {
        if (window === undefined) {
            return;
        }
        const handler = () => {
            // if(typeof window !== 'undefined'){
            setWindowSize({
                width: window?.innerWidth,
                height: window?.innerHeight,
            });
            // }
        };

        // Set size at the first client-side load
        handler();

        window?.addEventListener("resize", handler);

        // Remove event listener on cleanup
        return () => {
            window?.removeEventListener("resize", handler);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return windowSize;
}

export default useWindowSize;
