"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CLS_ALERT = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const class_names_1 = require("../../lib/class-names");
exports.CLS_ALERT = "bg-green-200 text-green-600 p-3 rounded text-sm font-semibold text-center";
function GreenAlert({ className, children }) {
    return (0, jsx_runtime_1.jsx)("div", { className: (0, class_names_1.cn)(exports.CLS_ALERT, className), children: children });
}
exports.default = GreenAlert;
//# sourceMappingURL=green-alert.js.map