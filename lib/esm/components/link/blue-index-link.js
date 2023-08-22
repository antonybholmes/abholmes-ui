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
import ArrowLink from "./arrow-link";
export default function BlueArrowLink(_a) {
    var _b = _a.underline, underline = _b === void 0 ? false : _b, className = _a.className, children = _a.children, props = __rest(_a, ["underline", "className", "children"]);
    return (_jsx(ArrowLink, __assign({ underline: underline, className: cn("stroke-theme-500 text-theme-500", className) }, props, { children: children })));
}
//# sourceMappingURL=blue-index-link.js.map