"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const class_names_1 = require("../lib/class-names");
const base_col_1 = require("./base-col");
function HCenterCol({ className = "", children, ...props }) {
    return ((0, jsx_runtime_1.jsx)(base_col_1.BaseCol, { className: (0, class_names_1.cn)("items-center", className), ...props, children: children }));
}
exports.default = HCenterCol;
//# sourceMappingURL=h-center-col.js.map