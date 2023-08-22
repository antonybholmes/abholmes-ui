"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const class_names_1 = __importDefault(require("..lib/class-names"));
const v_center_row_1 = __importDefault(require("@components/v-center-row"));
const close_1 = require("@icons/close");
const search_1 = require("@icons/search");
const react_1 = require("react");
const _theme_1 = require("@theme");
const base_button_1 = require("./button/base-button");
function BaseSearchBar({ id, search, placeholder, onChange, onClick, onClearClick, onKeyDown, showClearButton = false, onFocus, onBlur, className, }) {
    const ref = (0, react_1.useRef)(null);
    function _onFocus(e) {
        //ref.current?.focus()
        onFocus && onFocus(e);
    }
    return ((0, jsx_runtime_1.jsxs)(v_center_row_1.default, { className: (0, class_names_1.default)("group shrink-0 gap-x-1", className), onFocus: _onFocus, onBlur: onBlur, children: [(0, jsx_runtime_1.jsx)(base_button_1.BaseButton, { onClick: onClick, "aria-label": "Search", className: (0, class_names_1.default)("focus-visible:bg-accent", _theme_1.ICON_BUTTON_CLS), children: (0, jsx_runtime_1.jsx)(search_1.SearchIcon, { className: "trans-300 transition-color fill-gray-500 group-hover:fill-gray-800 dark:fill-gray-500 dark:group-hover:fill-gray-400" }) }), (0, jsx_runtime_1.jsx)("input", { ref: ref, id: id, name: id, onChange: onChange, onKeyDown: onKeyDown, "aria-label": "Search", className: "w-full grow bg-transparent outline-none", placeholder: placeholder, value: search, autoFocus: true }), showClearButton && search.length > 0 && ((0, jsx_runtime_1.jsx)(base_button_1.BaseButton, { onClick: onClearClick, "aria-label": "Search", className: (0, class_names_1.default)("focus-visible:bg-accent", _theme_1.ICON_BUTTON_CLS), children: (0, jsx_runtime_1.jsx)(close_1.CloseIcon, { className: "trans-300 transition-color stroke-gray-500 stroke-2 group-hover:stroke-gray-800 dark:stroke-gray-500 dark:group-hover:fill-gray-400" }) }))] }));
}
exports.default = BaseSearchBar;
//# sourceMappingURL=base-search-bar.js.map