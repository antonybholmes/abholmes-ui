import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import VCenterRow from "@components/v-center-row";
import CloseIcon from "@icons/close";
import SearchIcon from "@icons/search";
import cn from "@lib/class-names";
import { useRef } from "react";
import { ICON_BUTTON_CLS } from "@theme";
import { BaseButton } from "./button/base-button";
export default function BaseSearchBar(_a) {
    var id = _a.id, search = _a.search, placeholder = _a.placeholder, onChange = _a.onChange, onClick = _a.onClick, onClearClick = _a.onClearClick, onKeyDown = _a.onKeyDown, _b = _a.showClearButton, showClearButton = _b === void 0 ? false : _b, onFocus = _a.onFocus, onBlur = _a.onBlur, className = _a.className;
    var ref = useRef(null);
    function _onFocus(e) {
        //ref.current?.focus()
        onFocus && onFocus(e);
    }
    return (_jsxs(VCenterRow, { className: cn("group shrink-0 gap-x-1", className), onFocus: _onFocus, onBlur: onBlur, children: [_jsx(BaseButton, { onClick: onClick, "aria-label": "Search", className: cn("focus-visible:bg-accent", ICON_BUTTON_CLS), children: _jsx(SearchIcon, { className: "trans-300 transition-color fill-gray-500 group-hover:fill-gray-800 dark:fill-gray-500 dark:group-hover:fill-gray-400" }) }), _jsx("input", { ref: ref, id: id, name: id, onChange: onChange, onKeyDown: onKeyDown, "aria-label": "Search", className: "w-full grow bg-transparent outline-none", placeholder: placeholder, value: search, autoFocus: true }), showClearButton && search.length > 0 && (_jsx(BaseButton, { onClick: onClearClick, "aria-label": "Search", className: cn("focus-visible:bg-accent", ICON_BUTTON_CLS), children: _jsx(CloseIcon, { className: "trans-300 transition-color stroke-gray-500 stroke-2 group-hover:stroke-gray-800 dark:stroke-gray-500 dark:group-hover:fill-gray-400" }) }))] }));
}
//# sourceMappingURL=base-search-bar.js.map