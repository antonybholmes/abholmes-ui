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
import { MENU_BUTTON_CLS } from "@theme";
import { Children } from "react";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import BaseLink from "../link/base-link";
export default function MenuButtonLink(_a) {
    var className = _a.className, children = _a.children, props = __rest(_a, ["className", "children"]);
    var c = Children.toArray(children);
    return (_jsxs(BaseLink, __assign({ className: cn(MENU_BUTTON_CLS, className) }, props, { children: [c.length > 1 && (_jsx("span", { className: "flex w-5 shrink-0 flex-row justify-center", children: c[0] })), _jsx("span", { className: "grow", children: c[c.length - 1] }), _jsx("span", { className: "w-5 shrink-0" })] })));
}
//# sourceMappingURL=menu-button-link.js.map