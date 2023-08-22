import { cn } from "..lib/class-names";
import { Dropdown, defaultRenderListItem, } from "@abholmes/ui";
import ChevronRightIcon from "@icons/chevron-right";
import { useState } from "react";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import BasicButton from "./button/basic-button";
export default function ItemDropdown(_a) {
    var name = _a.name, _b = _a.items, items = _b === void 0 ? [] : _b, onDropClick = _a.onDropClick, _c = _a.renderListItem, renderListItem = _c === void 0 ? defaultRenderListItem : _c, className = _a.className, menuClassName = _a.menuClassName;
    var _d = useState(false), dropDownVisible = _d[0], setDropDownVisible = _d[1];
    //const ref = useRef<HTMLDivElement>(null)
    //const menuRef = useRef<HTMLUListElement>(null)
    // useEffect(()=>{
    //   setSelectedItems(
    //     Object.fromEntries(items.map((item, oi) => [item.uuid64, false]))
    //   )
    // }, [items])
    //useEffect(() => setDropDownVisible(items.length > 0), [items])
    function _onClick(index, id, label, item) {
        setDropDownVisible(false);
        onDropClick && onDropClick(index, id, label, item);
    }
    function onClose() {
        setDropDownVisible(false);
    }
    return (_jsx(Dropdown, { dropDownVisible: dropDownVisible, items: items, renderListItem: renderListItem, onDropClick: _onClick, onClose: onClose, menuClassName: menuClassName, children: _jsxs(BasicButton, { onClick: function () { return setDropDownVisible(!dropDownVisible); }, "aria-label": "Show search", className: cn("gap-x-4 text-left", className), children: [_jsx("p", { className: "grow", children: name }), _jsx(ChevronRightIcon, { className: cn("trans-300 stroke-gray-800 transition-transform dark:stroke-white/50 ", [dropDownVisible, "rotate-270", "rotate-90"]), size: "shrink-0 w-2.5" })] }) }));
}
//# sourceMappingURL=item-dropdown.js.map