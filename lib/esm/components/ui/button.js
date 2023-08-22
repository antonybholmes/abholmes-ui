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
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import * as React from "react";
import { cn } from "@lib/shadcn-utils";
import { BASE_BUTTON_CLS, BASE_PRIMARY_BUTTON_CLS, DEFAULT_BUTTON_SIZE_CLS, FOCUS_RING_CLS, ICON_BUTTON_SIZE_CLS, PRIMARY_BUTTON_CLS, ROUNDED_BUTTON_CLS, SECONDARY_BUTTON_CLS, } from "@theme";
var BASE_CLS = cn(BASE_BUTTON_CLS, ROUNDED_BUTTON_CLS);
var buttonVariants = cva(BASE_CLS, {
    variants: {
        variant: {
            default: cn(BASE_PRIMARY_BUTTON_CLS, PRIMARY_BUTTON_CLS),
            destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
            outline: "border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground",
            secondary: cn(BASE_PRIMARY_BUTTON_CLS, SECONDARY_BUTTON_CLS),
            ghost: cn(BASE_PRIMARY_BUTTON_CLS, "hover:bg-accent hover:text-accent-foreground"),
            menu: "hover:bg-accent hover:text-accent-foreground focus-visible:bg-accent justify-start text-left whitespace-nowrap",
            link: cn(FOCUS_RING_CLS, "text-primary underline-offset-4 hover:underline"),
        },
        size: {
            default: DEFAULT_BUTTON_SIZE_CLS,
            sm: "h-8 rounded-md px-3 text-xs",
            lg: "h-10 rounded-md px-8",
            icon: cn("justify-center", ICON_BUTTON_SIZE_CLS),
        },
    },
    defaultVariants: {
        variant: "default",
        size: "default",
    },
});
var Button = React.forwardRef(function (_a, ref) {
    var className = _a.className, variant = _a.variant, size = _a.size, _b = _a.asChild, asChild = _b === void 0 ? false : _b, props = __rest(_a, ["className", "variant", "size", "asChild"]);
    var Comp = asChild ? Slot : "button";
    return (_jsx(Comp, __assign({ className: cn(buttonVariants({ variant: variant, size: size, className: className })), ref: ref }, props)));
});
Button.displayName = "Button";
export { Button, buttonVariants };
//# sourceMappingURL=button.js.map