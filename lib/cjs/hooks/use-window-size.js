"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var use_window_resize_1 = __importDefault(require("./use-window-resize"));
function useWindowSize() {
    var _a = (0, react_1.useState)({
        width: -1,
        height: -1,
    }), windowSize = _a[0], setWindowSize = _a[1];
    var handleResize = function (e) {
        setWindowSize({
            width: e.width,
            height: e.height,
        });
    };
    (0, use_window_resize_1.default)(handleResize);
    return windowSize;
}
exports.default = useWindowSize;
//# sourceMappingURL=use-window-size.js.map