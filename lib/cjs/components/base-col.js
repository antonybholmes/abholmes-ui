"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseCol = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const class_names_1 = require("../lib/class-names");
exports.BaseCol = (0, react_1.forwardRef)(function BaseCol({ className, children, ...props }, ref) {
    return ((0, jsx_runtime_1.jsx)("div", { ref: ref, className: (0, class_names_1.cn)("flex flex-col", className), ...props, children: children }));
});
//# sourceMappingURL=base-col.js.map