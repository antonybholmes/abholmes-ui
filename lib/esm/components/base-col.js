import { forwardRef } from "react";
import { jsx as _jsx } from "react/jsx-runtime";
export const BaseCol = forwardRef(function BaseCol({ className, children, ...props }, ref) {
    return (_jsx("div", { ref: ref, className: clns("flex flex-col", className), ...props, children: children }));
});
//# sourceMappingURL=base-col.js.map