"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var use_window_listener_1 = __importDefault(require("./use-window-listener"));
function useWindowClickListener(handler) {
    (0, use_window_listener_1.default)("click", handler);
}
exports.default = useWindowClickListener;
//# sourceMappingURL=use-window-click-listener.js.map