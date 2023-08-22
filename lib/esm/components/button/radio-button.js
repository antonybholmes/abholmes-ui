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
import VCenterRow from "@components/v-center-row";
import cn from "@lib/class-names";
import { BaseButton } from "./base-button";
export default function RadioButton(_a) {
    var index = _a.index, selected = _a.selected, onRadioClick = _a.onRadioClick, children = _a.children, props = __rest(_a, ["index", "selected", "onRadioClick", "children"]);
    return (_jsxs(VCenterRow, { className: "gap-x-2 text-left", children: [_jsx(BaseButton, __assign({ onClick: function () { return onRadioClick && onRadioClick(index); }, className: "group cursor-pointer" }, props, { children: _jsxs("svg", { viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg", className: "w-5 shrink-0", children: [_jsx("circle", { cx: "8", cy: "8", r: "7", className: cn("trans-300 transition-color fill-white", [
                                selected,
                                "stroke-theme-600",
                                "stroke-gray-300 group-hover:stroke-gray-500",
                            ]) }), selected && (_jsx("circle", { cx: "8", cy: "8", r: "4", className: "fill-theme-600" }))] }) })), _jsx("span", { className: "grow", children: children })] }));
}
//# sourceMappingURL=radio-button.js.map