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
import { cn } from "..lib/class-names";
import { BASE_BUTTON_CLS } from "@theme";
import Link from "next/link";
import { forwardRef } from "react";
import { jsx as _jsx } from "react/jsx-runtime";
import ExtLink, { UNDERLINE_CLS } from "./ext-link";
var BaseLink = forwardRef(function BaseLink(_a, ref) {
    var href = _a.href, _b = _a.underline, underline = _b === void 0 ? false : _b, _c = _a.target, target = _c === void 0 ? "_blank" : _c, className = _a.className, children = _a.children, props = __rest(_a, ["href", "underline", "target", "className", "children"]);
    if (!props["aria-label"]) {
        props["aria-label"] = "Click to visit ".concat(href);
    }
    // Test if we use the NextJS router link or a regular a for external urls
    var isExt = href.startsWith("http") || href.startsWith("www");
    if (isExt) {
        return (_jsx(ExtLink, __assign({ ref: ref, href: href, className: cn(BASE_BUTTON_CLS, className), target: target, underline: underline }, props, { children: children })));
    }
    else {
        return (_jsx(Link, __assign({ ref: ref, href: href, className: cn(BASE_BUTTON_CLS, [underline, UNDERLINE_CLS], className) }, props, { children: children })));
    }
});
export default BaseLink;
//# sourceMappingURL=base-link.js.map