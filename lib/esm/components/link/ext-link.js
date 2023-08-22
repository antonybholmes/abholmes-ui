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
export var UNDERLINE_CLS = "underline trans-300 transition-colors decoration-transparent hover:decoration-current";
var ExtLink = forwardRef(function ExtLink(_a, ref) {
    var href = _a.href, _b = _a.target, target = _b === void 0 ? "_blank" : _b, _c = _a.underline, underline = _c === void 0 ? false : _c, className = _a.className, children = _a.children, props = __rest(_a, ["href", "target", "underline", "className", "children"]);
    return (_jsx("a", __assign({ ref: ref, href: href, target: target, className: cn([underline, UNDERLINE_CLS], className) }, props, { children: children })));
});
export default ExtLink;
//# sourceMappingURL=ext-link.js.map