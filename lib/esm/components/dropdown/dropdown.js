import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import MenuButton from "@components/toolbar/menu-button";
import { BaseDropDown } from "./base-dropdown";
export var DROPDOWN_CLS = "left-0";
export function defaultRenderListItem(index, id, label, item, onClick) {
    function _onClick(e) {
        onClick(index, id, label, item);
    }
    return (_jsxs(MenuButton, { onClick: function (e) { return _onClick(e); }, "aria-label": label, children: [_jsx(_Fragment, {}), _jsx("span", { children: label })] }));
}
export function Dropdown(_a) {
    //const menuRef = useRef<HTMLUListElement>(null)
    var _b = _a.dropDownVisible, dropDownVisible = _b === void 0 ? false : _b, _c = _a.items, items = _c === void 0 ? [] : _c, onDropClick = _a.onDropClick, _d = _a.renderListItem, renderListItem = _d === void 0 ? defaultRenderListItem : _d, onClose = _a.onClose, className = _a.className, children = _a.children;
    // useEffect(() => {
    //   setDropDownVisible(dropDownVisible)
    // }, [dropDownVisible])
    function _onClick(index, id, label, item) {
        ///setDropDownVisible(false)
        onDropClick && onDropClick(index, id, label, item);
    }
    return (_jsxs(BaseDropDown, { dropDownVisible: dropDownVisible, className: className, onClose: onClose, menuClassName: DROPDOWN_CLS, children: [_jsx("div", { children: children }), _jsx("ul", { className: "flex flex-col gap-y-1 p-1", children: items.map(function (item, i) { return (_jsx("li", { children: renderListItem(i, item.id, item.label, item.item, _onClick) }, i)); }) })] }));
}
//# sourceMappingURL=dropdown.js.map