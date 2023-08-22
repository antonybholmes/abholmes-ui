import { useState } from "react";
import useWindowResize from "./use-window-resize";
export default function useWindowSize() {
    var _a = useState({
        width: -1,
        height: -1,
    }), windowSize = _a[0], setWindowSize = _a[1];
    var handleResize = function (e) {
        setWindowSize({
            width: e.width,
            height: e.height,
        });
    };
    useWindowResize(handleResize);
    return windowSize;
}
//# sourceMappingURL=use-window-size.js.map