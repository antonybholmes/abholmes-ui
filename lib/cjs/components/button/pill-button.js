"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const class_names_1 = __importDefault(require("../../lib/class-names"));
const theme_1 = require("../../theme");
const base_button_1 = require("./base-button");
function PillButton({ className, children, ...props }) {
    return ((0, jsx_runtime_1.jsx)(base_button_1.BaseButton, { className: (0, class_names_1.default)(theme_1.PILL_BUTTON_CLS, className), ...props, children: children }));
}
exports.default = PillButton;
//# sourceMappingURL=pill-button.js.map