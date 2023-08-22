"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const button_1 = require("../ui/button");
const PrimaryButton = (0, react_1.forwardRef)(function PrimaryButton({ children, ...props }, ref) {
    return ((0, jsx_runtime_1.jsx)(button_1.Button, { ref: ref, ...props, children: children }));
});
exports.default = PrimaryButton;
//# sourceMappingURL=primary-button.js.map