var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx } from "react/jsx-runtime";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import * as React from "react";
import { cn } from "@lib/shadcn-utils";
import { ROUNDED_BUTTON_CLS } from "@theme";
var Popover = PopoverPrimitive.Root;
var PopoverAnchor = PopoverPrimitive.Anchor;
var PopoverTrigger = PopoverPrimitive.Trigger;
var POP_CLS = cn(ROUNDED_BUTTON_CLS, "z-modal border border-border bg-popover p-1 shadow-md outline-none", "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2");
var PopoverContent = React.forwardRef(function (_a, ref) {
    var className = _a.className, _b = _a.align, align = _b === void 0 ? "start" : _b, _c = _a.sideOffset, sideOffset = _c === void 0 ? 4 : _c, props = __rest(_a, ["className", "align", "sideOffset"]);
    return (_jsx(PopoverPrimitive.Portal, { children: _jsx(PopoverPrimitive.Content, __assign({ ref: ref, align: align, sideOffset: sideOffset, className: cn(POP_CLS, className) }, props)) }));
});
PopoverContent.displayName = PopoverPrimitive.Content.displayName;
export { Popover, PopoverContent, PopoverTrigger };
//# sourceMappingURL=popover.js.map