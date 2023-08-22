import { useState } from "react";
import useWindowResize from "./use-window-resize";
export default function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: -1,
        height: -1,
    });
    const handleResize = (e) => {
        setWindowSize({
            width: e.width,
            height: e.height,
        });
    };
    useWindowResize(handleResize);
    return windowSize;
}
//# sourceMappingURL=use-window-size.js.map