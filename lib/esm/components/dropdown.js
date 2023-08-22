import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from "../lib/class-names";
import { BaseDropDown, DROPDOWN_CLS } from "./base-dropdown";
import MenuButton from "./toolbar/menu-button";
export function defaultRenderListItem(index, id, label, item, onClick) {
    function _onClick(e) {
        e.preventDefault();
        onClick(index, id, label, item);
    }
    return (_jsx(MenuButton, { onClick: (e) => _onClick(e), "aria-label": label, children: _jsx("span", { children: label }) }));
}
export function Dropdown({ dropDownVisible = false, items = [], onDropClick, renderListItem = defaultRenderListItem, onClose, onOpenAutoFocus, className, menuClassName, children, }) {
    //const menuRef = useRef<HTMLUListElement>(null)
    // useEffect(() => {
    //   setDropDownVisible(dropDownVisible)
    // }, [dropDownVisible])
    function _onClick(index, id, label, item) {
        ///setDropDownVisible(false)
        onDropClick && onDropClick(index, id, label, item);
    }
    return (_jsxs(BaseDropDown, { dropDownVisible: dropDownVisible, className: className, onClose: onClose, menuClassName: cn(DROPDOWN_CLS, menuClassName), onOpenAutoFocus: onOpenAutoFocus, children: [_jsx("div", { children: children }), _jsx("ul", { className: "w-full", children: items.map((item, i) => (_jsx("li", { children: renderListItem(i, item.id, item.label, item.item, _onClick) }, i))) })] }));
}
//# sourceMappingURL=dropdown.js.map