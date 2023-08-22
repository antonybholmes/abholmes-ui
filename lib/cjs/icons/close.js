"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloseIcon = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const class_names_1 = __importDefault(require("..lib/class-names"));
const icon_props_1 = require("../interfaces/icon-props");
function CloseIcon({ size = "w-4", className }) {
    return ((0, jsx_runtime_1.jsxs)("svg", { viewBox: "0 0 32 32", xmlns: "http://www.w3.org/2000/svg", className: (0, class_names_1.default)(icon_props_1.ICON_CLS, size, className), style: { strokeLinecap: "round", strokeLinejoin: "round" }, children: [(0, jsx_runtime_1.jsx)("path", { d: "M 8,8 L 24,24" }), (0, jsx_runtime_1.jsx)("path", { d: "M 8,24 L 24,8" })] }));
}
exports.CloseIcon = CloseIcon;
//# sourceMappingURL=close.js.map