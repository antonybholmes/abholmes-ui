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
import { Button } from "@components/ui/button";
import { cn } from "@lib/shadcn-utils";
import { forwardRef } from "react";
var ToolbarButton = forwardRef(function ToolbarButton(_a, ref) {
    //const [hover, setHover] = useState(false)
    //const [down, setDown] = useState(false)
    var _b = _a.size, size = _b === void 0 ? "default" : _b, className = _a.className, children = _a.children, props = __rest(_a, ["size", "className", "children"]);
    return (_jsx(Button, __assign({ ref: ref, variant: "ghost", size: size, className: cn("gap-x-2", className) }, props, { children: children })));
});
export default ToolbarButton;
//# sourceMappingURL=toolbar-button.js.map