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
import ChevronRightIcon from "@icons/chevron-right";
import { useRef, useState } from "react";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import BaseLink from "./base-link";
var IndexLink = function (_a) {
    var _b = _a.underline, underline = _b === void 0 ? false : _b, className = _a.className, children = _a.children, props = __rest(_a, ["underline", "className", "children"]);
    var _c = useState(false), hover = _c[0], setHover = _c[1];
    var iconEl = useRef(null);
    // useEffect(() => {
    //   gsap
    //     .timeline()
    //     .to(
    //       iconEl.current,
    //       { x: hover ? '0.15rem' : 0, ease: 'power3.out', duration: 0.2 },
    //       0
    //     )
    // }, [hover])
    var _handleMouseEnter = function (e) {
        setHover(true);
    };
    var _handleMouseLeave = function (e) {
        setHover(false);
    };
    return (_jsxs(BaseLink, __assign({ className: cn("flex flex-row gap-x-1", className) }, props, { children: [children, _jsx("div", { ref: iconEl, children: _jsx(ChevronRightIcon, { className: cn("h-full w-3 transition-transform duration-200", [
                        hover,
                        "translate-x-1",
                        "translate-x-0",
                    ]) }) })] })));
};
export default IndexLink;
//# sourceMappingURL=index-link.js.map