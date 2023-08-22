"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseRow = exports.ROW_CLS = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const class_names_1 = require("../lib/class-names");
exports.ROW_CLS = "flex flex-row";
exports.BaseRow = (0, react_1.forwardRef)(function BaseRow({ className, children, ...props }, ref) {
    return ((0, jsx_runtime_1.jsx)("div", { ref: ref, className: (0, class_names_1.clns)(exports.ROW_CLS, className), ...props, children: children }));
});
//# sourceMappingURL=base-row.js.map