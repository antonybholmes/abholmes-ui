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
import { forwardRef } from "react";
import { jsx as _jsx } from "react/jsx-runtime";
import { BASE_PRIMARY_LINK_CLS } from "./base-primary-link";
import ButtonLink from "./button-link";
export var PRIMARY_LINK_CLS = BASE_PRIMARY_LINK_CLS;
var PrimaryLink = forwardRef(function PrimaryLink(_a, ref) {
    var className = _a.className, children = _a.children, props = __rest(_a, ["className", "children"]);
    return (_jsx(ButtonLink, __assign({ ref: ref, className: cn(PRIMARY_LINK_CLS, className) }, props, { children: children })));
});
export default PrimaryLink;
//# sourceMappingURL=primary-link.js.map