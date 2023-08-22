"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const class_names_1 = require("../lib/class-names");
const _theme_1 = require("@theme");
const react_1 = require("react");
const base_search_bar_1 = __importDefault(require("./base-search-bar"));
const SEARCH_CLS = (0, class_names_1.cn)(_theme_1.BASE_BUTTON_CLS, _theme_1.ROUNDED_BUTTON_CLS, _theme_1.INPUT_BORDER_CLS, _theme_1.INPUT_DARK_BORDER_CLS, _theme_1.INPUT_DARK_BG_CLS, "border hover:border-gray-300 dark:border-transparent w-full");
function SearchBar({ className, showClearButton = true, ...props }) {
    const [focus, setFocus] = (0, react_1.useState)(false);
    return ((0, jsx_runtime_1.jsx)(base_search_bar_1.default, { showClearButton: showClearButton, className: (0, class_names_1.cn)(SEARCH_CLS, [focus, "ring-ring ring-2"], className), onFocus: () => setFocus(true), onBlur: () => setFocus(false), ...props }));
}
exports.default = SearchBar;
//# sourceMappingURL=search-bar.js.map