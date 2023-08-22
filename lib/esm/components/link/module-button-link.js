var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx } from "react/jsx-runtime";
import RoundedButtonLink from "./rounded-button-link";
export default function ModuleButtonLink(_a) {
    var selected = _a.selected, className = _a.className, children = _a.children, props = __rest(_a, ["selected", "className", "children"]);
    return (_jsx(RoundedButtonLink, __assign({ className: clns("flex flex-col justify-start border-transparent p-2", [selected, "bg-gray-200", "hover:bg-gray-200 "], className) }, props, { children: children })));
}
//# sourceMappingURL=module-button-link.js.map