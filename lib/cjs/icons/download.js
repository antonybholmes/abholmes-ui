"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DownloadIcon = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const icon_props_1 = require("../interfaces/icon-props");
const class_names_1 = __importDefault(require("../lib/class-names"));
function DownloadIcon({ size = "w-4", className }) {
    return ((0, jsx_runtime_1.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", className: (0, class_names_1.default)(icon_props_1.ICON_CLS, size, className), children: (0, jsx_runtime_1.jsx)("path", { d: "M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" }) }));
}
exports.DownloadIcon = DownloadIcon;
//# sourceMappingURL=download.js.map