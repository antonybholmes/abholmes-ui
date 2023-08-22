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
import useMouseUpListener from "@hooks/use-mouseup-listener";
import cn from "@lib/class-names";
import { BASE_BUTTON_CLS } from "@theme";
import { forwardRef } from "react";
export var BaseButton = forwardRef(function BaseButton(_a, ref) {
    var onMouseUp = _a.onMouseUp, _b = _a.isSelected, isSelected = _b === void 0 ? false : _b, selectedClassName = _a.selectedClassName, unSelectedClassName = _a.unSelectedClassName, className = _a.className, children = _a.children, props = __rest(_a, ["onMouseUp", "isSelected", "selectedClassName", "unSelectedClassName", "className", "children"]);
    useMouseUpListener(onMouseUp);
    return (_jsx("button", __assign({ ref: ref, className: cn(BASE_BUTTON_CLS, className, [
            isSelected,
            selectedClassName,
            unSelectedClassName,
        ]) }, props, { children: children })));
});
//# sourceMappingURL=base-button.js.map