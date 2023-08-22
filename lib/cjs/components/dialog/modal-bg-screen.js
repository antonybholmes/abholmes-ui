"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SCREEN_CLS = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const class_names_1 = __importDefault(require("../../lib/class-names"));
exports.SCREEN_CLS = (0, class_names_1.default)("fixed left-0 top-0 z-100 h-screen w-screen", "bg-gray-500/50 duration-300 ease-in-out", "fill-mode-forwards dark:bg-gray-900/50", "backdrop-blur-sm");
function ModalBgScreen({ visible, className, children, ...props }) {
    console.log(visible);
    return ((0, jsx_runtime_1.jsx)("div", { className: (0, class_names_1.default)(exports.SCREEN_CLS, [visible, "animate-in fade-in", "animate-out fade-out"], className), ...props, children: children }));
}
exports.default = ModalBgScreen;
//# sourceMappingURL=modal-bg-screen.js.map