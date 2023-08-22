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
import { jsx as _jsx } from "react/jsx-runtime";
import ButtonLink from "./button-link";
export var BLUE_TEXT_CLS = "text-theme-500 dark:text-gray-100";
export var BLUE_FOCUS_RING_CLS = "focus:ring-theme-200";
export var BLUE_FOCUS_VISIBLE_BUTTON_CLS = "focus-visible:ring-theme-200";
export default function BlueLink(_a) {
    var _b = _a.underline, underline = _b === void 0 ? true : _b, className = _a.className, children = _a.children, props = __rest(_a, ["underline", "className", "children"]);
    return (_jsx(ButtonLink, __assign({ className: clns(BLUE_TEXT_CLS, className), underline: underline }, props, { children: children })));
}
//# sourceMappingURL=blue-link.js.map