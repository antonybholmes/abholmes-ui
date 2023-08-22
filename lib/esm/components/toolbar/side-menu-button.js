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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import cn from "@lib/class-names";
import { forwardRef, useRef } from "react";
import ToolbarIconButton from "./toolbar-icon-button";
var X1 = 2;
var X2 = 14;
var Y1 = 4;
var Y2 = 8;
var Y3 = 12;
var SideMenuButton = forwardRef(function SideMenuButton(_a, ref) {
    var showMenu = _a.showMenu, className = _a.className, children = _a.children, props = __rest(_a, ["showMenu", "className", "children"]);
    var ref1 = useRef(null);
    //const ref2 = useRef<SVGLineElement>(null)
    var ref3 = useRef(null);
    //const [hover, setHover] = useState(false)
    // useEffect(() => {
    //   if (showMenu) {
    //     gsap
    //       .timeline()
    //       .to(
    //         ref1.current,
    //         {
    //           duration: DURATION,
    //           attr: { y1: Y2, y2: Y2 },
    //         },
    //         0
    //       )
    //       .to(
    //         ref3.current,
    //         {
    //           duration: DURATION,
    //           attr: { y1: Y2, y2: Y2 },
    //         },
    //         0
    //       )
    //       .to(
    //         ref1.current,
    //         {
    //           duration: DURATION,
    //           rotate: 45,
    //           transformOrigin: "50% 50%",
    //         },
    //         DURATION
    //       )
    //       .to(
    //         ref3.current,
    //         {
    //           duration: DURATION,
    //           rotate: -45,
    //           transformOrigin: "50% 50%",
    //         },
    //         DURATION
    //       )
    //   } else {
    //     gsap
    //       .timeline()
    //       .to(
    //         ref1.current,
    //         {
    //           duration: DURATION,
    //           rotate: 0,
    //           transformOrigin: "50% 50%",
    //         },
    //         0
    //       )
    //       .to(
    //         ref3.current,
    //         {
    //           duration: DURATION,
    //           rotate: 0,
    //           transformOrigin: "50% 50%",
    //         },
    //         0
    //       )
    //       // .to(
    //       //   ref2.current,
    //       //   {
    //       //     duration: DURATION,
    //       //     opacity: 1,
    //       //   },
    //       //   0
    //       // )
    //       .to(
    //         ref1.current,
    //         {
    //           duration: DURATION,
    //           attr: { y1: Y1, y2: Y1 },
    //         },
    //         DURATION
    //       )
    //       .to(
    //         ref3.current,
    //         {
    //           duration: DURATION,
    //           attr: { y1: Y3, y2: Y3 },
    //         },
    //         DURATION
    //       )
    //   }
    // }, [ref1, ref3, showMenu])
    // function onMouseEnter() {
    //   setHover(true)
    // }
    // function onMouseLeave() {
    //   setHover(false)
    // }
    // function onFocus() {
    //   setFocus(true)
    // }
    // function onBlur() {
    //   setFocus(false)
    // }
    props["aria-label"] = showMenu ? "Close Menu" : "Open Menu";
    return (_jsx(ToolbarIconButton, __assign({ ref: ref, className: cn("relative shrink-0 grow-0", className) }, props, { children: _jsxs("svg", { viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg", className: "stroke-foreground h-4 w-4", children: [_jsx("line", { ref: ref1, x1: X1, y1: Y2, x2: X2, y2: Y2, rotate: 45, shapeRendering: "crispEdges", strokeLinecap: "round", strokeWidth: 2, className: cn("origin-center rotate-45 fill-mode-forwards", [
                        showMenu,
                        "animate-menu-button-line1-hide",
                        "animate-menu-button-line1-show",
                    ]) }), _jsx("line", { ref: ref3, x1: X1, y1: Y2, x2: X2, y2: Y2, strokeWidth: 2, shapeRendering: "crispEdges", strokeLinecap: "round", className: cn("origin-center -rotate-45 fill-mode-forwards", [
                        showMenu,
                        "animate-menu-button-line2-hide",
                        "animate-menu-button-line2-show",
                    ]) })] }) })));
});
export default SideMenuButton;
//# sourceMappingURL=side-menu-button.js.map