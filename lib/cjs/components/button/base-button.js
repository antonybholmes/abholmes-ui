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
exports.BaseButton = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var use_mouseup_listener_1 = __importDefault(require("@hooks/use-mouseup-listener"));
var class_names_1 = __importDefault(require("@lib/class-names"));
var _theme_1 = require("@theme");
var react_1 = require("react");
exports.BaseButton = (0, react_1.forwardRef)(function BaseButton(_a, ref) {
    var onMouseUp = _a.onMouseUp, _b = _a.isSelected, isSelected = _b === void 0 ? false : _b, selectedClassName = _a.selectedClassName, unSelectedClassName = _a.unSelectedClassName, className = _a.className, children = _a.children, props = __rest(_a, ["onMouseUp", "isSelected", "selectedClassName", "unSelectedClassName", "className", "children"]);
    (0, use_mouseup_listener_1.default)(onMouseUp);
    return ((0, jsx_runtime_1.jsx)("button", __assign({ ref: ref, className: (0, class_names_1.default)(_theme_1.BASE_BUTTON_CLS, className, [
            isSelected,
            selectedClassName,
            unSelectedClassName,
        ]) }, props, { children: children })));
});
//# sourceMappingURL=base-button.js.map