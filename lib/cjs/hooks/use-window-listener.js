"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
function useWindowListener(event, handler) {
    (0, react_1.useEffect)(() => {
        window.addEventListener(event, handler);
        return () => window.removeEventListener(event, handler);
    }, []);
}
exports.default = useWindowListener;
//# sourceMappingURL=use-window-listener.js.map