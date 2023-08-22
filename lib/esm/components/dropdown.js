import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import MenuButton from "@components/toolbar/menu-button";
import cn from "@lib/class-names";
import { BaseDropDown, DROPDOWN_CLS } from "./base-dropdown";
export function defaultRenderListItem(index, id, label, item, onClick) {
    function _onClick(e) {
        e.preventDefault();
        onClick(index, id, label, item);
    }
    return (_jsx(MenuButton, { onClick: function (e) { return _onClick(e); }, "aria-label": label, children: _jsx("span", { children: label }) }));
}
export function Dropdown(_a) {
    //const menuRef = useRef<HTMLUListElement>(null)
    var _b = _a.dropDownVisible, dropDownVisible = _b === void 0 ? false : _b, _c = _a.items, items = _c === void 0 ? [] : _c, onDropClick = _a.onDropClick, _d = _a.renderListItem, renderListItem = _d === void 0 ? defaultRenderListItem : _d, onClose = _a.onClose, onOpenAutoFocus = _a.onOpenAutoFocus, className = _a.className, menuClassName = _a.menuClassName, children = _a.children;
    // useEffect(() => {
    //   setDropDownVisible(dropDownVisible)
    // }, [dropDownVisible])
    function _onClick(index, id, label, item) {
        ///setDropDownVisible(false)
        onDropClick && onDropClick(index, id, label, item);
    }
    return (_jsxs(BaseDropDown, { dropDownVisible: dropDownVisible, className: className, onClose: onClose, menuClassName: cn(DROPDOWN_CLS, menuClassName), onOpenAutoFocus: onOpenAutoFocus, children: [_jsx("div", { children: children }), _jsx("ul", { className: "w-full", children: items.map(function (item, i) { return (_jsx("li", { children: renderListItem(i, item.id, item.label, item.item, _onClick) }, i)); }) })] }));
}
//# sourceMappingURL=dropdown.js.map