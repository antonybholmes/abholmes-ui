"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const class_names_1 = __importDefault(require("..lib/class-names"));
const v_center_row_1 = __importDefault(require("@components/v-center-row"));
const base_button_1 = require("./base-button");
function RadioButton({ index, selected, onRadioClick, children, ...props }) {
    return ((0, jsx_runtime_1.jsxs)(v_center_row_1.default, { className: "gap-x-2 text-left", children: [(0, jsx_runtime_1.jsx)(base_button_1.BaseButton, { onClick: () => onRadioClick && onRadioClick(index), className: "group cursor-pointer", ...props, children: (0, jsx_runtime_1.jsxs)("svg", { viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg", className: "w-5 shrink-0", children: [(0, jsx_runtime_1.jsx)("circle", { cx: "8", cy: "8", r: "7", className: (0, class_names_1.default)("trans-300 transition-color fill-white", [
                                selected,
                                "stroke-theme-600",
                                "stroke-gray-300 group-hover:stroke-gray-500",
                            ]) }), selected && ((0, jsx_runtime_1.jsx)("circle", { cx: "8", cy: "8", r: "4", className: "fill-theme-600" }))] }) }), (0, jsx_runtime_1.jsx)("span", { className: "grow", children: children })] }));
}
exports.default = RadioButton;
//# sourceMappingURL=radio-button.js.map