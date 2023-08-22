import { jsx as _jsx } from "react/jsx-runtime";
import cn from "../lib/class-names";
import BaseCol from "./base-col";
export default function HCenterCol({ className = "", children, ...props }) {
    return (_jsx(BaseCol, { className: cn("items-center", className), ...props, children: children }));
}
//# sourceMappingURL=h-center-col.js.map