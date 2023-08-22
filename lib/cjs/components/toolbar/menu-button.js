"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var button_1 = require("@components/button/button");
var class_names_1 = __importDefault(require("@lib/class-names"));
var _theme_1 = require("@theme");
function MenuButton(_a) {
    //const [hover, setHover] = useState(false)
    //const [down, setDown] = useState(false)
    var className = _a.className, children = _a.children, props = __rest(_a, ["className", "children"]);
    return ((0, jsx_runtime_1.jsxs)(button_1.Button, __assign({ className: (0, class_names_1.default)(_theme_1.MENU_BUTTON_CLS, className) }, props, { children: [(0, jsx_runtime_1.jsx)("span", { className: "w-6 shrink-0", children: 
                // @ts-ignore
                children[0] }), 
            // @ts-ignore
            children[1], (0, jsx_runtime_1.jsx)("span", { className: "w-6 shrink-0" })] })));
}
exports.default = MenuButton;
//# sourceMappingURL=menu-button.js.map