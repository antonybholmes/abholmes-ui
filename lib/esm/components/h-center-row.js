import { jsx as _jsx } from "react/jsx-runtime";
import cn from "../lib/class-names";
import { BaseRow } from "./base-row";
export default function HCenterRow({ className = "", children, ...props }) {
    return (_jsx(BaseRow, { className: cn("justify-center", className), ...props, children: children }));
}
//# sourceMappingURL=h-center-row.js.map