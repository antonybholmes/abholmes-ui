"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const button_1 = require("../../components/ui/button");
const class_names_1 = require("../../lib/class-names");
const react_1 = require("react");
function MenuButton({ className, children, ...props }) {
    const c = react_1.Children.toArray(children);
    return ((0, jsx_runtime_1.jsxs)(button_1.Button, { variant: "menu", className: (0, class_names_1.cn)("w-full grow", className), ...props, children: [c.length > 1 && (0, jsx_runtime_1.jsx)("span", { className: "w-5 shrink-0", children: c[0] }), c[c.length - 1], (0, jsx_runtime_1.jsx)("span", { className: "w-5 shrink-0" })] }));
}
exports.default = MenuButton;
//# sourceMappingURL=menu-button.js.map