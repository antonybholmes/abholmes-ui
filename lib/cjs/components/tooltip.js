"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tooltip = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const tooltip_1 = require("./ui/tooltip");
// export const TOOLTIP_CLS = cn(
//   "absolute z-overlay whitespace-nowrap rounded-md pointer-events-none",
//   "bg-gray-600 px-3 py-2 text-white shadow-lg dark:bg-gray-600",
//   "duration-300 ease-in-out fill-mode-forwards",
// )
// export const clsMap: IStringMap = {
//   bottom: TOOLTIP_CLS + " left-1/2 mt-2 top-full",
//   left: TOOLTIP_CLS + " -ml-2 left-0 top-1/2",
//   bottom_right: TOOLTIP_CLS + " mt-2 right-0",
// }
// export const animationClsMap: IFieldMap = {
//   show: {
//     bottom: "animate-tooltip-show-bottom",
//     left: "animate-tooltip-show-left",
//   },
//   hide: {
//     bottom: "animate-tooltip-hide-bottom",
//     left: "animate-tooltip-hide-left",
//   },
// }
function Tooltip({ content, children }) {
    // let timeout: NodeJS.Timeout | undefined = undefined
    // const [active, setActive] = useState(false)
    // const ref = useOutsideListener<HTMLDivElement>(active, () => hideTip())
    // const hide = useDelayHide(active)
    // function showTip() {
    //   timeout = setTimeout(() => {
    //     setActive(true)
    //   }, delay)
    // }
    // function hideTip() {
    //   clearInterval(timeout)
    //   setActive(false)
    // }
    // // const transitions = useTransition(active, {
    // //   from: { opacity: 0 },
    // //   enter: { opacity: 1 },
    // //   leave: { opacity: 0 },
    // // })
    return ((0, jsx_runtime_1.jsx)(tooltip_1.TooltipProvider, { children: (0, jsx_runtime_1.jsxs)(tooltip_1.Tooltip, { children: [(0, jsx_runtime_1.jsx)(tooltip_1.TooltipTrigger, { asChild: true, children: children }), (0, jsx_runtime_1.jsx)(tooltip_1.TooltipContent, { side: "bottom", children: (0, jsx_runtime_1.jsx)("p", { children: content }) })] }) }));
}
exports.Tooltip = Tooltip;
//# sourceMappingURL=tooltip.js.map