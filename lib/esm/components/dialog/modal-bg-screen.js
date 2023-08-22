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
export var SCREEN_CLS = cn("fixed left-0 top-0 z-100 h-screen w-screen", "bg-gray-500/50 duration-300 ease-in-out", "fill-mode-forwards dark:bg-gray-900/50", "backdrop-blur-sm");
export default function ModalBgScreen(_a) {
    var visible = _a.visible, className = _a.className, children = _a.children, props = __rest(_a, ["visible", "className", "children"]);
    console.log(visible);
    return (_jsx("div", __assign({ className: cn(SCREEN_CLS, [visible, "animate-in fade-in", "animate-out fade-out"], className) }, props, { children: children })));
}
//# sourceMappingURL=modal-bg-screen.js.map