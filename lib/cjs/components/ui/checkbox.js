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
exports.Checkbox = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const CheckboxPrimitive = __importStar(require("@radix-ui/react-checkbox"));
const react_icons_1 = require("@radix-ui/react-icons");
const React = __importStar(require("react"));
const shadcn_utils_1 = require("..lib/shadcn-utils");
const Checkbox = React.forwardRef(({ className, ...props }, ref) => ((0, jsx_runtime_1.jsx)(CheckboxPrimitive.Root, { ref: ref, className: (0, shadcn_utils_1.cn)("border-primary focus-visible:ring-ring data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground peer h-4 w-4 shrink-0 rounded-sm border shadow focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50", className), ...props, children: (0, jsx_runtime_1.jsx)(CheckboxPrimitive.Indicator, { className: (0, shadcn_utils_1.cn)("flex items-center justify-center text-current"), children: (0, jsx_runtime_1.jsx)(react_icons_1.CheckIcon, { className: "h-4 w-4" }) }) })));
exports.Checkbox = Checkbox;
Checkbox.displayName = CheckboxPrimitive.Root.displayName;
//# sourceMappingURL=checkbox.js.map