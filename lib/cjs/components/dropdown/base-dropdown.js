"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseDropDown = exports.BASE_DROPDOWN_CLS = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var class_names_1 = __importDefault(require("@lib/class-names"));
var base_col_1 = __importDefault(require("@components/base-col"));
var use_delay_hide_1 = __importDefault(require("@hooks/use-delay-hide"));
var use_outside_listener_1 = __importDefault(require("@hooks/use-outside-listener"));
var _theme_1 = require("@theme");
var react_1 = require("react");
exports.BASE_DROPDOWN_CLS = (0, class_names_1.default)("absolute mt-2 shadow-lg border border-slate-200/80 z-overlay text-sm gap-y-4 dark:border-none min-w-full", _theme_1.DROPDOWN_BG_CLS, _theme_1.ROUNDED_CLS);
function BaseDropDown(_a) {
    var _b = _a.dropDownVisible, dropDownVisible = _b === void 0 ? false : _b, onClose = _a.onClose, menuClassName = _a.menuClassName, className = _a.className, children = _a.children;
    var ref = (0, use_outside_listener_1.default)(dropDownVisible, function () { return onClose && onClose(); });
    var hide = (0, use_delay_hide_1.default)(dropDownVisible);
    // useWindowClickListener((e: { target: any }) => {
    //   if (ref.current && !ref.current.contains(e.target)) {
    //     onClose && onClose()
    //   }
    // })
    // const transitions = useTransition(dropDownVisible, {
    //   from: { opacity: 0, top: "90%" },
    //   enter: { opacity: 1, top: "100%" },
    //   leave: { opacity: 0, top: "90%" },
    // })
    function onKeyDown(e) {
        if (e.key === "Escape" && onClose) {
            onClose();
        }
    }
    var c = react_1.Children.toArray(children);
    return ((0, jsx_runtime_1.jsxs)("div", { ref: ref, className: (0, class_names_1.default)("relative", className), onKeyDown: onKeyDown, children: [c[0], (dropDownVisible || !hide) && ((0, jsx_runtime_1.jsx)(base_col_1.default, { className: (0, class_names_1.default)(exports.BASE_DROPDOWN_CLS, "duration-300 ease-in-out fill-mode-forwards", [
                    dropDownVisible,
                    "animate-in fade-in slide-in-from-top-1",
                    "animate-out fade-out slide-out-to-top-1",
                ], menuClassName), children: c[1] }))] }));
}
exports.BaseDropDown = BaseDropDown;
//# sourceMappingURL=base-dropdown.js.map