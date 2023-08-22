import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { clns } from "../../lib/class-names";
import VCenterRow from "../v-center-row";
import { BaseButton } from "./base-button";
export default function RadioButton({ index, selected, onRadioClick, children, ...props }) {
    return (_jsxs(VCenterRow, { className: "gap-x-2 text-left", children: [_jsx(BaseButton, { onClick: () => onRadioClick && onRadioClick(index), className: "group cursor-pointer", ...props, children: _jsxs("svg", { viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg", className: "w-5 shrink-0", children: [_jsx("circle", { cx: "8", cy: "8", r: "7", className: clns("trans-300 transition-color fill-white", [
                                selected,
                                "stroke-theme-600",
                                "stroke-gray-300 group-hover:stroke-gray-500",
                            ]) }), selected && (_jsx("circle", { cx: "8", cy: "8", r: "4", className: "fill-theme-600" }))] }) }), _jsx("span", { className: "grow", children: children })] }));
}
//# sourceMappingURL=radio-button.js.map