import { useEffect, useState } from "react";
import useWindowSize from "./use-window-size";
export const BREAKPOINT_XL = { name: "xl", px: 1280 };
export const BREAKPOINTS = {
    sm: { name: "sm", px: 640 },
    md: { name: "md", px: 768 },
    lg: { name: "lg", px: 1024 },
    xl: BREAKPOINT_XL,
    "2xl": { name: "2xl", px: 1536 },
};
export default function useBreakPoint() {
    const windowSize = useWindowSize();
    const [breakPoint, setBreakpoint] = useState(BREAKPOINTS["sm"]);
    useEffect(() => {
        if (windowSize.width < 640) {
            setBreakpoint(BREAKPOINTS["sm"]);
        }
        else if (windowSize.width < 768) {
            setBreakpoint(BREAKPOINTS["md"]);
        }
        else if (windowSize.width < 1024) {
            setBreakpoint(BREAKPOINTS["lg"]);
        }
        else if (windowSize.width < 1280) {
            setBreakpoint(BREAKPOINTS["xl"]);
        }
        else {
            setBreakpoint(BREAKPOINTS["2xl"]);
        }
    }, [windowSize]);
    return breakPoint;
}
//# sourceMappingURL=use-breakpoint.js.map