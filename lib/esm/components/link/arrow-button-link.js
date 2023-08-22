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
import IndexArrow from "@icons/index-arrow";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { COLOR_BUTTON_CLS } from "./color-button-link";
import PillButtonLink from "./pill-button-link";
var ARROW_BUTTON_CLS = "justify-between px-4 py-2";
export default function ArrowButtonLink(_a) {
    // const iconEl
    var _b = _a.underline, underline = _b === void 0 ? false : _b, className = _a.className, children = _a.children, props = __rest(_a, ["underline", "className", "children"]);
    // useEffect(() => {
    //   gsap
    //     .timeline()
    //     .to(
    //       iconEl.current,
    //       { x: hover ? "0.15rem" : 0, ease: "power3.out", duration: 0.2 },
    //       0
    //     )
    // }, [hover])
    return (_jsxs(PillButtonLink, __assign({ className: cn(ARROW_BUTTON_CLS, COLOR_BUTTON_CLS, className) }, props, { children: [_jsx("span", { children: children }), _jsx(IndexArrow, { className: "w-4 stroke-2" })] })));
}
//# sourceMappingURL=arrow-button-link.js.map