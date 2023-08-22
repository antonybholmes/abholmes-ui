import * as Switch from "@radix-ui/react-switch";
import { BUTTON_W_CLS, FOCUS_RING_CLS } from "@theme";
import { forwardRef } from "react";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from "../../lib/class-names";
import VCenterRow from "../v-center-row";
const TOGGLE_CLS = cn(FOCUS_RING_CLS, BUTTON_W_CLS, "overflow-hidden rounded-full outline-none", "data-[state=checked]:bg-primary data-[state=checked]:hover:bg-primary/80", "data-[state=unchecked]:bg-input data-[state=unchecked]:hover:bg-secondary/80");
const THUMB_CLS = cn("pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0", "trans-300 ease-in-out transition-transform", "data-[state=checked]:translate-x-3 data-[state=unchecked]:translate-x-0");
const ToggleSwitch = forwardRef(function ToggleSwitch({ index = -1, onCheckClick, isSelected, className, children }, ref) {
    function _onClick(state) {
        onCheckClick && onCheckClick(index, state);
    }
    return (_jsxs(VCenterRow, { className: "gap-x-2", children: [_jsx(Switch.Root, { ref: ref, checked: isSelected, onCheckedChange: _onClick, className: cn(TOGGLE_CLS, className), style: { padding: 2 }, children: _jsx(Switch.Thumb, { className: THUMB_CLS }) }), _jsx("span", { children: children })] }));
});
export default ToggleSwitch;
//# sourceMappingURL=toggle-switch.js.map