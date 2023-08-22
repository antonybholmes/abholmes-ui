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
exports.TooltipTrigger = exports.TooltipProvider = exports.TooltipContent = exports.Tooltip = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const TooltipPrimitive = __importStar(require("@radix-ui/react-tooltip"));
const React = __importStar(require("react"));
const shadcn_utils_1 = require("../../lib/shadcn-utils");
const TooltipProvider = TooltipPrimitive.Provider;
exports.TooltipProvider = TooltipProvider;
const Tooltip = TooltipPrimitive.Root;
exports.Tooltip = Tooltip;
const TooltipTrigger = TooltipPrimitive.Trigger;
exports.TooltipTrigger = TooltipTrigger;
const TooltipContent = React.forwardRef(({ className, sideOffset = 4, ...props }, ref) => ((0, jsx_runtime_1.jsx)(TooltipPrimitive.Content, { ref: ref, sideOffset: sideOffset, className: (0, shadcn_utils_1.cn)("text-primary-foreground z-modal overflow-hidden rounded-md bg-slate-600 px-3 py-1.5 text-xs animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className), ...props })));
exports.TooltipContent = TooltipContent;
TooltipContent.displayName = TooltipPrimitive.Content.displayName;
//# sourceMappingURL=tooltip.js.map