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
exports.DropdownMenuTrigger = exports.DropdownMenuSubTrigger = exports.DropdownMenuSubContent = exports.DropdownMenuSub = exports.DropdownMenuShortcut = exports.DropdownMenuSeparator = exports.DropdownMenuRadioItem = exports.DropdownMenuRadioGroup = exports.DropdownMenuPortal = exports.DropdownMenuLabel = exports.DropdownMenuItem = exports.DropdownMenuGroup = exports.DropdownMenuContent = exports.DropdownMenuCheckboxItem = exports.DropdownMenu = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const DropdownMenuPrimitive = __importStar(require("@radix-ui/react-dropdown-menu"));
const react_icons_1 = require("@radix-ui/react-icons");
const React = __importStar(require("react"));
const _theme_1 = require("@theme");
const react_1 = require("react");
const shadcn_utils_1 = require("../../lib/shadcn-utils");
const DropdownMenu = DropdownMenuPrimitive.Root;
exports.DropdownMenu = DropdownMenu;
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
exports.DropdownMenuTrigger = DropdownMenuTrigger;
const DropdownMenuGroup = DropdownMenuPrimitive.Group;
exports.DropdownMenuGroup = DropdownMenuGroup;
const DropdownMenuPortal = DropdownMenuPrimitive.Portal;
exports.DropdownMenuPortal = DropdownMenuPortal;
const DropdownMenuSub = DropdownMenuPrimitive.Sub;
exports.DropdownMenuSub = DropdownMenuSub;
const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;
exports.DropdownMenuRadioGroup = DropdownMenuRadioGroup;
const DropdownMenuSubTrigger = React.forwardRef(({ className, inset, children, ...props }, ref) => ((0, jsx_runtime_1.jsxs)(DropdownMenuPrimitive.SubTrigger, { ref: ref, className: (0, shadcn_utils_1.cn)("focus:bg-accent data-[state=open]:bg-accent flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none", inset && "pl-8", className), ...props, children: [children, (0, jsx_runtime_1.jsx)(react_icons_1.ChevronRightIcon, { className: "ml-auto h-4 w-4" })] })));
exports.DropdownMenuSubTrigger = DropdownMenuSubTrigger;
DropdownMenuSubTrigger.displayName =
    DropdownMenuPrimitive.SubTrigger.displayName;
const DropdownMenuSubContent = React.forwardRef(({ className, ...props }, ref) => ((0, jsx_runtime_1.jsx)(DropdownMenuPrimitive.SubContent, { ref: ref, className: (0, shadcn_utils_1.cn)("bg-popover text-popover-foreground z-50 min-w-[8rem] overflow-hidden rounded-md border p-1 shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className), ...props })));
exports.DropdownMenuSubContent = DropdownMenuSubContent;
DropdownMenuSubContent.displayName =
    DropdownMenuPrimitive.SubContent.displayName;
const DropdownMenuContent = React.forwardRef(({ className, sideOffset = 4, ...props }, ref) => ((0, jsx_runtime_1.jsx)(DropdownMenuPrimitive.Portal, { children: (0, jsx_runtime_1.jsx)(DropdownMenuPrimitive.Content, { ref: ref, sideOffset: sideOffset, className: (0, shadcn_utils_1.cn)("bg-popover text-popover-foreground z-50 min-w-[8rem] overflow-hidden rounded-md border p-1 shadow-md", "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className), ...props }) })));
exports.DropdownMenuContent = DropdownMenuContent;
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;
const DropdownMenuItem = React.forwardRef(({ className, inset, children, ...props }, ref) => {
    const c = react_1.Children.toArray(children);
    return ((0, jsx_runtime_1.jsxs)(DropdownMenuPrimitive.Item, { ref: ref, className: (0, shadcn_utils_1.cn)(_theme_1.BUTTON_H_CLS, "focus:bg-accent focus:text-accent-foreground relative flex cursor-default select-none flex-row items-center gap-x-2 rounded-sm px-2 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50", inset && "pl-8", className), ...props, children: [c.length > 1 && ((0, jsx_runtime_1.jsx)("span", { className: "flex w-5 shrink-0 flex-row justify-center", children: c[0] })), c[c.length - 1], (0, jsx_runtime_1.jsx)("span", { className: "w-5 shrink-0" })] }));
});
exports.DropdownMenuItem = DropdownMenuItem;
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;
const DropdownMenuCheckboxItem = React.forwardRef(({ className, children, checked, ...props }, ref) => ((0, jsx_runtime_1.jsxs)(DropdownMenuPrimitive.CheckboxItem, { ref: ref, className: (0, shadcn_utils_1.cn)("focus:bg-accent focus:text-accent-foreground relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className), checked: checked, ...props, children: [(0, jsx_runtime_1.jsx)("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: (0, jsx_runtime_1.jsx)(DropdownMenuPrimitive.ItemIndicator, { children: (0, jsx_runtime_1.jsx)(react_icons_1.CheckIcon, { className: "h-4 w-4" }) }) }), children] })));
exports.DropdownMenuCheckboxItem = DropdownMenuCheckboxItem;
DropdownMenuCheckboxItem.displayName =
    DropdownMenuPrimitive.CheckboxItem.displayName;
const DropdownMenuRadioItem = React.forwardRef(({ className, children, ...props }, ref) => ((0, jsx_runtime_1.jsxs)(DropdownMenuPrimitive.RadioItem, { ref: ref, className: (0, shadcn_utils_1.cn)("focus:bg-accent focus:text-accent-foreground relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className), ...props, children: [(0, jsx_runtime_1.jsx)("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: (0, jsx_runtime_1.jsx)(DropdownMenuPrimitive.ItemIndicator, { children: (0, jsx_runtime_1.jsx)(react_icons_1.DotFilledIcon, { className: "h-4 w-4 fill-current" }) }) }), children] })));
exports.DropdownMenuRadioItem = DropdownMenuRadioItem;
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;
const DropdownMenuLabel = React.forwardRef(({ className, inset, ...props }, ref) => ((0, jsx_runtime_1.jsx)(DropdownMenuPrimitive.Label, { ref: ref, className: (0, shadcn_utils_1.cn)("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className), ...props })));
exports.DropdownMenuLabel = DropdownMenuLabel;
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;
const DropdownMenuSeparator = React.forwardRef(({ className, ...props }, ref) => ((0, jsx_runtime_1.jsx)(DropdownMenuPrimitive.Separator, { ref: ref, className: (0, shadcn_utils_1.cn)("bg-muted -mx-1 my-1 h-px", className), ...props })));
exports.DropdownMenuSeparator = DropdownMenuSeparator;
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;
const DropdownMenuShortcut = ({ className, ...props }) => {
    return ((0, jsx_runtime_1.jsx)("span", { className: (0, shadcn_utils_1.cn)("ml-auto text-xs tracking-widest opacity-60", className), ...props }));
};
exports.DropdownMenuShortcut = DropdownMenuShortcut;
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";
//# sourceMappingURL=dropdown-menu.js.map