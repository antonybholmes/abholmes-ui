import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { clns } from "../lib/class-names";
export const BaseCol = forwardRef(function BaseCol({ className, children, ...props }, ref) {
    return (_jsx("div", { ref: ref, className: clns("flex flex-col", className), ...props, children: children }));
});
//# sourceMappingURL=base-col.js.map