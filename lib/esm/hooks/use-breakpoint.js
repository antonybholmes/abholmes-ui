import { useEffect, useState } from "react";
import useWindowSize from "./use-window-size";
export var BREAKPOINT_XL = { name: "xl", px: 1280 };
export var BREAKPOINTS = {
    sm: { name: "sm", px: 640 },
    md: { name: "md", px: 768 },
    lg: { name: "lg", px: 1024 },
    xl: BREAKPOINT_XL,
    "2xl": { name: "2xl", px: 1536 },
};
export default function useBreakPoint() {
    var windowSize = useWindowSize();
    var _a = useState(BREAKPOINTS["sm"]), breakPoint = _a[0], setBreakpoint = _a[1];
    useEffect(function () {
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