import { jsx as _jsx } from "react/jsx-runtime";
export const CLS_ALERT = "bg-red-100 text-red-500 p-3 rounded text-sm font-semibold text-center";
export default function RedAlert({ className, children }) {
    return _jsx("div", { className: clns(CLS_ALERT, className), children: children });
}
//# sourceMappingURL=red-alert.js.map