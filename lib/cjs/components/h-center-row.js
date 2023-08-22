"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const class_names_1 = __importDefault(require("..lib/class-names"));
const base_row_1 = require("./base-row");
function HCenterRow({ className = "", children, ...props }) {
    return ((0, jsx_runtime_1.jsx)(base_row_1.BaseRow, { className: (0, class_names_1.default)("justify-center", className), ...props, children: children }));
}
exports.default = HCenterRow;
//# sourceMappingURL=h-center-row.js.map