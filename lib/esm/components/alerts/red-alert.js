import { jsx as _jsx } from "react/jsx-runtime";
import cn from "@lib/class-names";
export var CLS_ALERT = "bg-red-100 text-red-500 p-3 rounded text-sm font-semibold text-center";
export default function RedAlert(_a) {
    var className = _a.className, children = _a.children;
    return _jsx("div", { className: cn(CLS_ALERT, className), children: children });
}
//# sourceMappingURL=red-alert.js.map