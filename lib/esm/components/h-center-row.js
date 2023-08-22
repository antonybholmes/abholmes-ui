import { jsx as _jsx } from "react/jsx-runtime";
import { clns } from "../lib/class-names";
import { BaseRow } from "./base-row";
export default function HCenterRow({ className = "", children, ...props }) {
    return (_jsx(BaseRow, { className: clns("justify-center", className), ...props, children: children }));
}
//# sourceMappingURL=h-center-row.js.map