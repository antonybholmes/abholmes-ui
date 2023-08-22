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
import cn from "..lib/class-names";
import { BASE_BUTTON_CLS, FOCUS_RING_CLS, PILL_BUTTON_CLS } from "@theme";
import { jsx as _jsx } from "react/jsx-runtime";
import BaseLink from "./base-link";
var PILL_CLS = cn(BASE_BUTTON_CLS, FOCUS_RING_CLS, PILL_BUTTON_CLS);
export default function PillButtonLink(_a) {
    var className = _a.className, children = _a.children, props = __rest(_a, ["className", "children"]);
    return (_jsx(BaseLink, __assign({ className: cn(PILL_CLS, className) }, props, { children: children })));
}
//# sourceMappingURL=pill-button-link.js.map