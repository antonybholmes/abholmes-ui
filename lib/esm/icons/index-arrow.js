import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const W = 16;
const Y2 = 9;
const Y1 = Y2 - 4;
const Y3 = Y2 + 4;
export default function IndexArrow({ className }) {
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
    return (_jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: `0 0 ${W} ${W}`, className: className, style: { strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }, children: [_jsx("line", { x1: 4, y1: Y2, x2: 10, y2: Y2, className: "trans-300 opacity-0 transition-opacity group-hover:opacity-100" }), _jsx("path", { d: `M 6,${Y1} L 10,${Y2} L 6,${Y3}`, className: "trans-300 transition-transform group-hover:translate-x-[2px]" })] }));
}
//# sourceMappingURL=index-arrow.js.map