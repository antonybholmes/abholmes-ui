"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const class_names_1 = __importDefault(require("..lib/class-names"));
const _theme_1 = require("@theme");
const react_1 = require("react");
const toolbar_button_1 = __importDefault(require("./toolbar-button"));
const ToolbarIconButton = (0, react_1.forwardRef)(function ToolbarIconButton({ className, children, ...props }, ref) {
    return ((0, jsx_runtime_1.jsx)(toolbar_button_1.default, { ref: ref, size: "icon", className: (0, class_names_1.default)(_theme_1.TOOLBAR_ICON_BUTTON_CLS, className), ...props, children: children }));
});
exports.default = ToolbarIconButton;
//# sourceMappingURL=toolbar-icon-button.js.map