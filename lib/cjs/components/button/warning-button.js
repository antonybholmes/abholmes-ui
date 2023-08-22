"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WarningButton = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const button_1 = require("../ui/button");
exports.WarningButton = (0, react_1.forwardRef)(function PrimaryButton({ children, ...props }, ref) {
    return ((0, jsx_runtime_1.jsx)(button_1.Button, { ref: ref, variant: "destructive", ...props, children: children }));
});
//# sourceMappingURL=warning-button.js.map