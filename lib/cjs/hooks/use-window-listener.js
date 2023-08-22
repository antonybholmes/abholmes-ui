"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
function useWindowListener(event, handler) {
    (0, react_1.useEffect)(function () {
        window.addEventListener(event, handler);
        return function () { return window.removeEventListener(event, handler); };
    }, []);
}
exports.default = useWindowListener;
//# sourceMappingURL=use-window-listener.js.map