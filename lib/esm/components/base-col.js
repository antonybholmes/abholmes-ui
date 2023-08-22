import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import cn from "../lib/class-names";
const BaseCol = forwardRef(function BaseCol({ className, children, ...props }, ref) {
    return (_jsx("div", { ref: ref, className: cn("flex flex-col", className), ...props, children: children }));
});
export default BaseCol;
//# sourceMappingURL=base-col.js.map