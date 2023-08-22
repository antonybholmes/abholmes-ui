"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlueLinkButton = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const class_names_1 = __importDefault(require("..lib/class-names"));
const _theme_1 = require("@theme");
const basic_button_1 = require("./basic-button");
function BlueLinkButton({ className, children, ...props }) {
    return ((0, jsx_runtime_1.jsx)(basic_button_1.BasicButton, { className: (0, class_names_1.default)(_theme_1.PRIMARY_LINK_CLS, "font-medium", className), ...props, children: children }));
}
exports.BlueLinkButton = BlueLinkButton;
//# sourceMappingURL=blue-link-button.js.map