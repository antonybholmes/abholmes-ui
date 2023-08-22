"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TICK_CLS = exports.CHECK_CLS = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Checkbox = __importStar(require("@radix-ui/react-checkbox"));
const react_1 = require("react");
const consts_1 = require("../../consts");
const class_names_1 = require("../../lib/class-names");
const theme_1 = require("../../theme");
exports.CHECK_CLS = (0, class_names_1.clns)(theme_1.BASE_BUTTON_CLS, theme_1.ROUNDED_BUTTON_CLS, "shrink-0 cursor-pointer gap-x-2 whitespace-nowrap text-left");
exports.TICK_CLS = (0, class_names_1.clns)(theme_1.INPUT_BORDER_CLS, theme_1.INPUT_DARK_BORDER_CLS, theme_1.GROUP_FOCUS_RING_CLS, "bg-white dark:bg-transparent border border-input rounded", "h-4.5 w-4.5");
const CheckBox = (0, react_1.forwardRef)(function CheckBox({ index = -1, isSelected = false, onCheckClick, className, children, }, ref) {
    function _onClick(state) {
        const v = state === true || state !== "indeterminate";
        onCheckClick && onCheckClick(index, v);
    }
    return ((0, jsx_runtime_1.jsxs)(Checkbox.Root, { ref: ref, checked: isSelected, onCheckedChange: _onClick, className: (0, class_names_1.clns)(exports.CHECK_CLS, className), children: [(0, jsx_runtime_1.jsx)("svg", { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", className: exports.TICK_CLS, style: {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    fill: "none",
                }, children: isSelected && ((0, jsx_runtime_1.jsx)("path", { d: "M 5,12.5 L 10,18 L 19,6", className: (0, class_names_1.clns)(consts_1.CHEVRON_CLS, "stroke-3") })) }), (0, jsx_runtime_1.jsx)("span", { children: children })] }));
});
exports.default = CheckBox;
//# sourceMappingURL=check-box.js.map