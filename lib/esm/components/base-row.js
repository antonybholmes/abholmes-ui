import { forwardRef } from "react";
import { jsx as _jsx } from "react/jsx-runtime";
export const ROW_CLS = "flex flex-row";
export const BaseRow = forwardRef(function BaseRow({ className, children, ...props }, ref) {
    return (_jsx("div", { ref: ref, className: clns(ROW_CLS, className), ...props, children: children }));
});
//# sourceMappingURL=base-row.js.map