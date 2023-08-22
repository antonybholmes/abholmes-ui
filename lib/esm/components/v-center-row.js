import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { cn } from "../lib/class-names";
import { BaseRow } from "./base-row";
export const V_CENTER_ROW_CLS = "flex flex-row items-center";
const VCenterRow = forwardRef(function VCenterRow({ className, children, ...props }, ref) {
    return (_jsx(BaseRow, { ref: ref, className: cn(V_CENTER_ROW_CLS, className), ...props, children: children }));
});
export default VCenterRow;
//# sourceMappingURL=v-center-row.js.map