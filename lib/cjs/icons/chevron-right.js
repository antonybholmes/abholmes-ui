"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChevronRightIcon = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const class_names_1 = __importDefault(require("..lib/class-names"));
const icon_props_1 = require("../interfaces/icon-props");
function ChevronRightIcon({ size = "w-4", className, }) {
    return ((0, jsx_runtime_1.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", className: (0, class_names_1.default)(icon_props_1.ICON_CLS, "stroke-2", size, className), style: { strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }, children: (0, jsx_runtime_1.jsx)("path", { d: "M 5,1 L 12,8 L 5,15" }) }));
}
exports.ChevronRightIcon = ChevronRightIcon;
//# sourceMappingURL=chevron-right.js.map