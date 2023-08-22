"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const class_names_1 = require("../../lib/class-names");
const toolbar_icon_button_1 = __importDefault(require("./toolbar-icon-button"));
const X1 = 2;
const X2 = 14;
const Y1 = 4;
const Y2 = 8;
const Y3 = 12;
const SideMenuButton = (0, react_1.forwardRef)(function SideMenuButton({ showMenu, className, children, ...props }, ref) {
    const ref1 = (0, react_1.useRef)(null);
    //const ref2 = useRef<SVGLineElement>(null)
    const ref3 = (0, react_1.useRef)(null);
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
    return ((0, jsx_runtime_1.jsx)(toolbar_icon_button_1.default, { ref: ref, className: (0, class_names_1.cn)("relative shrink-0 grow-0", className), ...props, children: (0, jsx_runtime_1.jsxs)("svg", { viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg", className: "stroke-foreground h-4 w-4", children: [(0, jsx_runtime_1.jsx)("line", { ref: ref1, x1: X1, y1: Y2, x2: X2, y2: Y2, rotate: 45, shapeRendering: "crispEdges", strokeLinecap: "round", strokeWidth: 2, className: (0, class_names_1.cn)("origin-center rotate-45 fill-mode-forwards", [
                        showMenu,
                        "animate-menu-button-line1-hide",
                        "animate-menu-button-line1-show",
                    ]) }), (0, jsx_runtime_1.jsx)("line", { ref: ref3, x1: X1, y1: Y2, x2: X2, y2: Y2, strokeWidth: 2, shapeRendering: "crispEdges", strokeLinecap: "round", className: (0, class_names_1.cn)("origin-center -rotate-45 fill-mode-forwards", [
                        showMenu,
                        "animate-menu-button-line2-hide",
                        "animate-menu-button-line2-show",
                    ]) })] }) }));
});
exports.default = SideMenuButton;
//# sourceMappingURL=side-menu-button.js.map