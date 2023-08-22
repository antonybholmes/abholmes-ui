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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const class_names_1 = __importDefault(require("..lib/class-names"));
const v_center_row_1 = __importDefault(require("@components/v-center-row"));
const Switch = __importStar(require("@radix-ui/react-switch"));
const _theme_1 = require("@theme");
const react_1 = require("react");
const TOGGLE_CLS = (0, class_names_1.default)(_theme_1.FOCUS_RING_CLS, _theme_1.BUTTON_W_CLS, "overflow-hidden rounded-full outline-none", "data-[state=checked]:bg-primary data-[state=checked]:hover:bg-primary/80", "data-[state=unchecked]:bg-input data-[state=unchecked]:hover:bg-secondary/80");
const THUMB_CLS = (0, class_names_1.default)("pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0", "trans-300 ease-in-out transition-transform", "data-[state=checked]:translate-x-3 data-[state=unchecked]:translate-x-0");
const ToggleSwitch = (0, react_1.forwardRef)(function ToggleSwitch({ index = -1, onCheckClick, isSelected, className, children }, ref) {
    function _onClick(state) {
        onCheckClick && onCheckClick(index, state);
    }
    return ((0, jsx_runtime_1.jsxs)(v_center_row_1.default, { className: "gap-x-2", children: [(0, jsx_runtime_1.jsx)(Switch.Root, { ref: ref, checked: isSelected, onCheckedChange: _onClick, className: (0, class_names_1.default)(TOGGLE_CLS, className), style: { padding: 2 }, children: (0, jsx_runtime_1.jsx)(Switch.Thumb, { className: THUMB_CLS }) }), (0, jsx_runtime_1.jsx)("span", { children: children })] }));
});
exports.default = ToggleSwitch;
//# sourceMappingURL=toggle-switch.js.map