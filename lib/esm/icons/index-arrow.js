import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
var W = 16;
var Y2 = 9;
var Y1 = Y2 - 4;
var Y3 = Y2 + 4;
export default function IndexArrow(_a) {
    //const lineRef = useRef(null)
    //const arrowRef = useRef(null)
    var className = _a.className;
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
    return (_jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 ".concat(W, " ").concat(W), className: className, style: { strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }, children: [_jsx("line", { x1: 4, y1: Y2, x2: 10, y2: Y2, className: "trans-300 opacity-0 transition-opacity group-hover:opacity-100" }), _jsx("path", { d: "M 6,".concat(Y1, " L 10,").concat(Y2, " L 6,").concat(Y3), className: "trans-300 transition-transform group-hover:translate-x-[2px]" })] }));
}
//# sourceMappingURL=index-arrow.js.map