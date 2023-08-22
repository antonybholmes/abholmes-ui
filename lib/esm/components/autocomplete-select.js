var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { BaseButton, BaseDropDown, DROPDOWN_CLS } from "@abholmes/ui";
import BaseCol from "@components/base-col";
import { BaseRow } from "@components/base-row";
import CheckBox from "@components/button/check-box";
import ChevronRightIcon from "@icons/chevron-right";
import CloseIcon from "@icons/close";
import cn from "@lib/class-names";
import { ROUNDED_BUTTON_CLS } from "@theme";
import { useEffect, useRef, useState } from "react";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { CHEVRON_CLS } from "src/consts";
import BaseSearchBar from "./base-search-bar";
export function defaultRenderListItem(item, selected, onClick) {
    function _onClick(selected) {
        onClick(item, selected);
    }
    return (_jsx(CheckBox, { onCheckClick: function (e) { return _onClick(!selected); }, "aria-label": "Select ".concat(item.name), isSelected: selected, children: item.name }));
}
export function defaultRenderRemoveItem(item, onClick) {
    function _onClick(item) {
        onClick(item);
    }
    return (_jsxs(BaseRow, { className: "items-start gap-x-2", children: [_jsx(BaseButton, { onClick: function () { return _onClick(item); }, "aria-label": "Remove item", children: _jsx(CloseIcon, { className: "stroke-gray-500" }) }), _jsx("p", { className: "text-xs font-semibold", children: item.name })] }));
}
export default function AutocompleteSelect(_a) {
    var id = _a.id, name = _a.name, _b = _a.items, items = _b === void 0 ? [] : _b, onClick = _a.onClick, _c = _a.placeholder, placeholder = _c === void 0 ? "Search..." : _c, _d = _a.maxItems, maxItems = _d === void 0 ? 10 : _d, _e = _a.showRemoveItems, showRemoveItems = _e === void 0 ? true : _e, selectedMap = _a.selectedMap, _f = _a.renderListItem, renderListItem = _f === void 0 ? defaultRenderListItem : _f, _g = _a.renderRemoveItem, renderRemoveItem = _g === void 0 ? defaultRenderRemoveItem : _g, className = _a.className, children = _a.children;
    var _h = useState(false), dropDownVisible = _h[0], setDropDownVisible = _h[1];
    var menuRef = useRef(null);
    var _j = useState(new Set()), _selectedMap = _j[0], setSelectedMap = _j[1];
    var _k = useState([]), selectedItems = _k[0], setSelectedItems = _k[1];
    var _l = useState([]), searchItems = _l[0], setSearchItems = _l[1];
    var _m = useState(""), text = _m[0], setText = _m[1];
    function onClose() {
        setDropDownVisible(false);
    }
    useEffect(function () {
        if (text.length > 0) {
            var s_1 = text.toLowerCase();
            setSearchItems(items.filter(function (item) { return item.name.toLowerCase().includes(s_1); }));
        }
        else {
            setSearchItems(items);
        }
    }, [items, text, selectedItems]);
    // useEffect(()=>{
    //   setSelectedItems(
    //     Object.fromEntries(items.map((item, oi) => [item.uuid64, false]))
    //   )
    // }, [items])
    //useEffect(() => setDropDownVisible(items.length > 0), [items])
    useEffect(function () {
        if (selectedMap) {
            setSelectedMap(selectedMap);
            var selectedItems_1 = items.filter(function (item) { return selectedMap.has(item.uuid64) || selectedMap.has(item.name); });
            setSelectedItems(selectedItems_1);
        }
    }, [items, selectedMap]);
    function _onClick(item, selected) {
        var sm = selected
            ? new Set(__spreadArray(__spreadArray([], _selectedMap, true), [item.uuid64, item.name], false))
            : new Set(__spreadArray([], _selectedMap, true).filter(function (x) { return x !== item.uuid64 && x !== item.name; }));
        _onBaseClick(sm);
    }
    function _onRemoveClick(item) {
        var sm = new Set(__spreadArray([], _selectedMap, true).filter(function (x) { return x !== item.uuid64 && x !== item.name; }));
        _onBaseClick(sm);
    }
    function _onBaseClick(selectedMap) {
        setSelectedMap(selectedMap);
        var selectedItems = items.filter(function (item) { return selectedMap.has(item.uuid64) || selectedMap.has(item.name); });
        setSelectedItems(selectedItems);
        onClick && onClick(selectedItems);
    }
    function _onChange(e) {
        setText(e.target.value);
    }
    return (_jsxs(BaseCol, { className: cn("gap-y-2 py-2", className), children: [_jsxs(BaseDropDown, { dropDownVisible: dropDownVisible, onClose: onClose, menuClassName: cn(DROPDOWN_CLS, "w-full"), children: [_jsx(BaseRow, { children: _jsxs(BaseButton, { onClick: function () { return setDropDownVisible(!dropDownVisible); }, "aria-label": "Show ".concat(name), className: cn(ROUNDED_BUTTON_CLS, "w-full gap-x-4 p-1 text-left"), children: [_jsx("p", { className: "grow", children: name }), _jsx(ChevronRightIcon, { className: cn("trans-300 transition-transform", CHEVRON_CLS, [
                                        dropDownVisible,
                                        "rotate-270",
                                        "rotate-90",
                                    ]), size: "shrink-0 w-3" })] }) }), _jsxs(BaseCol, { className: "p-1 text-sm", children: [_jsx(BaseSearchBar, { id: id, onChange: _onChange, placeholder: placeholder, search: text, onClearClick: function (e) {
                                    setText("");
                                    e.stopPropagation();
                                } }), _jsx("div", { className: "border-border border-t pt-2", children: _jsxs("ul", { ref: menuRef, className: "flex max-h-48 flex-col overflow-y-auto overflow-x-hidden", children: [searchItems.length === 0 && (_jsx("li", { className: "p-2", children: "Nothing found." })), searchItems.map(function (item, i) { return (_jsx("li", { children: renderListItem(item, _selectedMap.has(item.name) ||
                                                _selectedMap.has(item.uuid64), _onClick) }, i)); })] }) }), children] })] }), showRemoveItems && (_jsx("ul", { className: "flex flex-col gap-y-1", children: selectedItems.slice(0, maxItems).map(function (item, i) { return (_jsx("li", { children: renderRemoveItem(item, _onRemoveClick) }, i)); }) }))] }));
}
//# sourceMappingURL=autocomplete-select.js.map