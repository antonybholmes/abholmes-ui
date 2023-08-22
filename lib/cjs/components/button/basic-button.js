"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasicButton = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const class_names_1 = require("../../lib/class-names");
const theme_1 = require("../../theme");
const base_button_1 = require("./base-button");
exports.BasicButton = (0, react_1.forwardRef)(function BasicButton({ className, children, ...props }, ref) {
    return ((0, jsx_runtime_1.jsx)(base_button_1.BaseButton, { ref: ref, className: (0, class_names_1.clns)(theme_1.FOCUS_RING_CLS, className), ...props, children: children }));
});
//# sourceMappingURL=basic-button.js.map