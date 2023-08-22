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
import { DEFAULT_BUTTON_SIZE_CLS, PRIMARY_BUTTON_CLS } from "@theme";
import ButtonLink from "./button-link";
export default function PrimaryButtonLink(_a) {
    var className = _a.className, children = _a.children, props = __rest(_a, ["className", "children"]);
    return (_jsx(ButtonLink, __assign({ className: cn(PRIMARY_BUTTON_CLS, DEFAULT_BUTTON_SIZE_CLS, className) }, props, { children: children })));
}
//# sourceMappingURL=primary-button-link.js.map