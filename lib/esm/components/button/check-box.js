import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { CHEVRON_CLS } from "@/consts";
import cn from "@lib/class-names";
import * as Checkbox from "@radix-ui/react-checkbox";
import { forwardRef } from "react";
import { BASE_BUTTON_CLS, GROUP_FOCUS_RING_CLS, INPUT_BORDER_CLS, INPUT_DARK_BORDER_CLS, ROUNDED_BUTTON_CLS, } from "@theme";
export var CHECK_CLS = cn(BASE_BUTTON_CLS, ROUNDED_BUTTON_CLS, "shrink-0 cursor-pointer gap-x-2 whitespace-nowrap text-left");
export var TICK_CLS = cn(INPUT_BORDER_CLS, INPUT_DARK_BORDER_CLS, GROUP_FOCUS_RING_CLS, "bg-white dark:bg-transparent border border-input rounded", "h-4.5 w-4.5");
var CheckBox = forwardRef(function CheckBox(_a, ref) {
    var _b = _a.index, index = _b === void 0 ? -1 : _b, _c = _a.isSelected, isSelected = _c === void 0 ? false : _c, onCheckClick = _a.onCheckClick, className = _a.className, children = _a.children;
    function _onClick(state) {
        var v = state === true || state !== "indeterminate";
        onCheckClick && onCheckClick(index, v);
    }
    return (_jsxs(Checkbox.Root, { ref: ref, checked: isSelected, onCheckedChange: _onClick, className: cn(CHECK_CLS, className), children: [_jsx("svg", { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", className: TICK_CLS, style: {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    fill: "none",
                }, children: isSelected && (_jsx("path", { d: "M 5,12.5 L 10,18 L 19,6", className: cn(CHEVRON_CLS, "stroke-3") })) }), _jsx("span", { children: children })] }));
});
export default CheckBox;
//# sourceMappingURL=check-box.js.map