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
import cn from "@lib/class-names";
import { BASE_BUTTON_CLS, INPUT_BORDER_CLS, INPUT_DARK_BG_CLS, INPUT_DARK_BORDER_CLS, ROUNDED_BUTTON_CLS, } from "@theme";
import { useState } from "react";
import BaseSearchBar from "./base-search-bar";
var SEARCH_CLS = cn(BASE_BUTTON_CLS, ROUNDED_BUTTON_CLS, INPUT_BORDER_CLS, INPUT_DARK_BORDER_CLS, INPUT_DARK_BG_CLS, "border hover:border-gray-300 dark:border-transparent w-full");
export default function SearchBar(_a) {
    var className = _a.className, _b = _a.showClearButton, showClearButton = _b === void 0 ? true : _b, props = __rest(_a, ["className", "showClearButton"]);
    var _c = useState(false), focus = _c[0], setFocus = _c[1];
    return (_jsx(BaseSearchBar, __assign({ showClearButton: showClearButton, className: cn(SEARCH_CLS, [focus, "ring-ring ring-2"], className), onFocus: function () { return setFocus(true); }, onBlur: function () { return setFocus(false); } }, props)));
}
//# sourceMappingURL=search-bar.js.map