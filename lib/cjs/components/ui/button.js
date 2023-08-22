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
exports.buttonVariants = exports.Button = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_slot_1 = require("@radix-ui/react-slot");
const class_variance_authority_1 = require("class-variance-authority");
const React = __importStar(require("react"));
const shadcn_utils_1 = require("..lib/shadcn-utils");
const _theme_1 = require("@theme");
const BASE_CLS = (0, shadcn_utils_1.cn)(_theme_1.BASE_BUTTON_CLS, _theme_1.ROUNDED_BUTTON_CLS);
const buttonVariants = (0, class_variance_authority_1.cva)(BASE_CLS, {
    variants: {
        variant: {
            default: (0, shadcn_utils_1.cn)(_theme_1.BASE_PRIMARY_BUTTON_CLS, _theme_1.PRIMARY_BUTTON_CLS),
            destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
            outline: "border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground",
            secondary: (0, shadcn_utils_1.cn)(_theme_1.BASE_PRIMARY_BUTTON_CLS, _theme_1.SECONDARY_BUTTON_CLS),
            ghost: (0, shadcn_utils_1.cn)(_theme_1.BASE_PRIMARY_BUTTON_CLS, "hover:bg-accent hover:text-accent-foreground"),
            menu: "hover:bg-accent hover:text-accent-foreground focus-visible:bg-accent justify-start text-left whitespace-nowrap",
            link: (0, shadcn_utils_1.cn)(_theme_1.FOCUS_RING_CLS, "text-primary underline-offset-4 hover:underline"),
        },
        size: {
            default: _theme_1.DEFAULT_BUTTON_SIZE_CLS,
            sm: "h-8 rounded-md px-3 text-xs",
            lg: "h-10 rounded-md px-8",
            icon: (0, shadcn_utils_1.cn)("justify-center", _theme_1.ICON_BUTTON_SIZE_CLS),
        },
    },
    defaultVariants: {
        variant: "default",
        size: "default",
    },
});
exports.buttonVariants = buttonVariants;
const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? react_slot_1.Slot : "button";
    return ((0, jsx_runtime_1.jsx)(Comp, { className: (0, shadcn_utils_1.cn)(buttonVariants({ variant, size, className })), ref: ref, ...props }));
});
exports.Button = Button;
Button.displayName = "Button";
//# sourceMappingURL=button.js.map