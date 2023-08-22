"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const class_names_1 = require("../lib/class-names");
const base_col_1 = __importDefault(require("./base-col"));
const VCenterCol = ({ className = "", children, ...props }) => {
    return ((0, jsx_runtime_1.jsx)(base_col_1.default, { className: (0, class_names_1.cn)("justify-center", className), ...props, children: children }));
};
exports.default = VCenterCol;
//# sourceMappingURL=v-center-col.js.map