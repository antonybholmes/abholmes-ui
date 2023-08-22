"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const use_window_listener_1 = __importDefault(require("./use-window-listener"));
function useMouseDownListener(handler) {
    (0, use_window_listener_1.default)("mousedown", handler);
}
exports.default = useMouseDownListener;
//# sourceMappingURL=use-mousedown-listener.js.map