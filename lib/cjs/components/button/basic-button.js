"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasicButton = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const class_names_1 = __importDefault(require("..lib/class-names"));
const _theme_1 = require("@theme");
const react_1 = require("react");
const base_button_1 = require("./base-button");
exports.BasicButton = (0, react_1.forwardRef)(function BasicButton({ className, children, ...props }, ref) {
    return ((0, jsx_runtime_1.jsx)(base_button_1.BaseButton, { ref: ref, className: (0, class_names_1.default)(_theme_1.FOCUS_RING_CLS, className), ...props, children: children }));
});
//# sourceMappingURL=basic-button.js.map