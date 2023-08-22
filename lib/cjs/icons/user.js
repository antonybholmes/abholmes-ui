"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const class_names_1 = __importDefault(require("..lib/class-names"));
const icon_props_1 = require("../interfaces/icon-props");
function UserIcon({ size = "w-4", onClick, className, }) {
    return ((0, jsx_runtime_1.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", className: (0, class_names_1.default)(icon_props_1.ICON_CLS, size, className), onClick: onClick, children: (0, jsx_runtime_1.jsx)("path", { d: "M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" }) }));
}
exports.default = UserIcon;
//# sourceMappingURL=user.js.map