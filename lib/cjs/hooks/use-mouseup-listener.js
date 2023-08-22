"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const use_window_listener_1 = __importDefault(require("./use-window-listener"));
function useMouseUpListener(handler) {
    (0, use_window_listener_1.default)("mouseup", handler);
}
exports.default = useMouseUpListener;
//# sourceMappingURL=use-mouseup-listener.js.map