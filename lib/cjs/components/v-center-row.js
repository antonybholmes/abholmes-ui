"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.V_CENTER_ROW_CLS = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const class_names_1 = __importDefault(require("../lib/class-names"));
const base_row_1 = require("./base-row");
exports.V_CENTER_ROW_CLS = "flex flex-row items-center";
const VCenterRow = (0, react_1.forwardRef)(function VCenterRow({ className, children, ...props }, ref) {
    return ((0, jsx_runtime_1.jsx)(base_row_1.BaseRow, { ref: ref, className: (0, class_names_1.default)(exports.V_CENTER_ROW_CLS, className), ...props, children: children }));
});
exports.default = VCenterRow;
//# sourceMappingURL=v-center-row.js.map