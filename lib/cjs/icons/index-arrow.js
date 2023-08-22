"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IndexArrowIcon = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const W = 16;
const Y2 = 9;
const Y1 = Y2 - 4;
const Y3 = Y2 + 4;
function IndexArrowIcon({ className }) {
    //const lineRef = useRef(null)
    //const arrowRef = useRef(null)
    // useEffect(() => {
    //   gsap
    //     .timeline()
    //     .to(
    //       arrowRef.current,
    //       {
    //         x: selected ? "2px" : 0,
    //         duration: DURATION,
    //       },
    //       0
    //     )
    //     .to(
    //       lineRef.current,
    //       {
    //         scaleX: selected ? 1 : 0,
    //         opacity: selected ? 1 : 0,
    //         duration: DURATION,
    //       },
    //       0
    //     )
    // }, [selected])
    return ((0, jsx_runtime_1.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: `0 0 ${W} ${W}`, className: className, style: { strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }, children: [(0, jsx_runtime_1.jsx)("line", { x1: 4, y1: Y2, x2: 10, y2: Y2, className: "trans-300 opacity-0 transition-opacity group-hover:opacity-100" }), (0, jsx_runtime_1.jsx)("path", { d: `M 6,${Y1} L 10,${Y2} L 6,${Y3}`, className: "trans-300 transition-transform group-hover:translate-x-[2px]" })] }));
}
exports.IndexArrowIcon = IndexArrowIcon;
//# sourceMappingURL=index-arrow.js.map