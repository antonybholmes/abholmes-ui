import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from "../../lib/class-names";
export const CLS_ALERT = "bg-green-200 text-green-600 p-3 rounded text-sm font-semibold text-center";
export default function GreenAlert({ className, children }) {
    return _jsx("div", { className: cn(CLS_ALERT, className), children: children });
}
//# sourceMappingURL=green-alert.js.map