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
import cn from "@lib/class-names";
import ColorButtonLink from "./color-button-link";
export var RED_BUTTON_CLS = "bg-red-200 hover:bg-red-300 text-red-600 focus:ring-red-400";
export default function RedButtonLink(_a) {
    var className = _a.className, children = _a.children, props = __rest(_a, ["className", "children"]);
    return (_jsx(ColorButtonLink, __assign({ className: cn(RED_BUTTON_CLS, className) }, props, { children: children })));
}
//# sourceMappingURL=red-button-link.js.map