"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchIcon = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const class_names_1 = __importDefault(require("..lib/class-names"));
const icon_props_1 = require("../interfaces/icon-props");
function SearchIcon({ size = "w-4", className }) {
    return ((0, jsx_runtime_1.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", className: (0, class_names_1.default)(icon_props_1.ICON_CLS, size, className), viewBox: "0 0 512 512", children: (0, jsx_runtime_1.jsx)("path", { d: "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" }) }));
}
exports.SearchIcon = SearchIcon;
//# sourceMappingURL=search.js.map