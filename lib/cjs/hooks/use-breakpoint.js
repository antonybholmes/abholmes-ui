"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BREAKPOINTS = exports.BREAKPOINT_XL = void 0;
var react_1 = require("react");
var use_window_size_1 = __importDefault(require("./use-window-size"));
exports.BREAKPOINT_XL = { name: "xl", px: 1280 };
exports.BREAKPOINTS = {
    sm: { name: "sm", px: 640 },
    md: { name: "md", px: 768 },
    lg: { name: "lg", px: 1024 },
    xl: exports.BREAKPOINT_XL,
    "2xl": { name: "2xl", px: 1536 },
};
function useBreakPoint() {
    var windowSize = (0, use_window_size_1.default)();
    var _a = (0, react_1.useState)(exports.BREAKPOINTS["sm"]), breakPoint = _a[0], setBreakpoint = _a[1];
    (0, react_1.useEffect)(function () {
        if (windowSize.width < 640) {
            setBreakpoint(exports.BREAKPOINTS["sm"]);
        }
        else if (windowSize.width < 768) {
            setBreakpoint(exports.BREAKPOINTS["md"]);
        }
        else if (windowSize.width < 1024) {
            setBreakpoint(exports.BREAKPOINTS["lg"]);
        }
        else if (windowSize.width < 1280) {
            setBreakpoint(exports.BREAKPOINTS["xl"]);
        }
        else {
            setBreakpoint(exports.BREAKPOINTS["2xl"]);
        }
    }, [windowSize]);
    return breakPoint;
}
exports.default = useBreakPoint;
//# sourceMappingURL=use-breakpoint.js.map