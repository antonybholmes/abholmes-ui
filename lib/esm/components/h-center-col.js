import { jsx as _jsx } from "react/jsx-runtime";
import { BaseCol } from "./base-col";
export default function HCenterCol({ className = "", children, ...props }) {
    return (_jsx(BaseCol, { className: clns("items-center", className), ...props, children: children }));
}
//# sourceMappingURL=h-center-col.js.map