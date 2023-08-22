"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseButton = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const use_mouseup_listener_1 = __importDefault(require("@hooks/use-mouseup-listener"));
const class_names_1 = __importDefault(require("..lib/class-names"));
const _theme_1 = require("@theme");
const react_1 = require("react");
exports.BaseButton = (0, react_1.forwardRef)(function BaseButton({ onMouseUp, isSelected = false, selectedClassName, unSelectedClassName, className, children, ...props }, ref) {
    (0, use_mouseup_listener_1.default)(onMouseUp);
    return ((0, jsx_runtime_1.jsx)("button", { ref: ref, className: (0, class_names_1.default)(_theme_1.BASE_BUTTON_CLS, className, [
            isSelected,
            selectedClassName,
            unSelectedClassName,
        ]), ...props, children: children }));
});
//# sourceMappingURL=base-button.js.map