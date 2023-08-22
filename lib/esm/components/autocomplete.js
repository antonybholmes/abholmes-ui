import cn from "..lib/class-names";
import { defaultRenderListItem, } from "@abholmes/ui";
import { INPUT_CLS } from "@consts";
import { PopoverAnchor } from "@radix-ui/react-popover";
import { useMemo, useState } from "react";
import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import BaseSearchBar from "./base-search-bar";
import { Popover, PopoverContent } from "./ui/popover";
export default function Autocomplete(_a) {
    var id = _a.id, name = _a.name, text = _a.text, _b = _a.items, items = _b === void 0 ? [] : _b, onValueChange = _a.onValueChange, onDropClick = _a.onDropClick, _c = _a.placeholder, placeholder = _c === void 0 ? "Choose..." : _c, _d = _a.renderListItem, renderListItem = _d === void 0 ? defaultRenderListItem : _d, menuClassName = _a.menuClassName, className = _a.className;
    var _e = useState(false), dropDownVisible = _e[0], setDropDownVisible = _e[1];
    //const ref = useRef<HTMLDivElement>(null)
    // const menuRef = useRef<HTMLUListElement>(null)
    //useEffect(() => setDropDownVisible(items.length > 0), [items])
    function _onValueChange(text) {
        //setDropDownVisible(false)
        onValueChange && onValueChange(text);
    }
    function _onChange(e) {
        //setDropDownVisible(false)
        _onValueChange(e.target.value);
    }
    function _onClose() {
        setDropDownVisible(false);
    }
    function _onDropClick(index, id, label, item) {
        setDropDownVisible(false);
        onDropClick && onDropClick(index, id, label, item);
    }
    function onKeyDown(e) {
        if (e.key === "Enter") {
            setDropDownVisible(false);
        }
    }
    var dropdownItems = useMemo(function () {
        return items.map(function (item) { return ({
            id: item.uuid64,
            label: item.name,
            item: item,
        }); });
    }, [items]);
    return (
    // <Dropdown
    //   dropDownVisible={dropDownVisible}
    //   items={dropdownItems}
    //   renderListItem={renderListItem}
    //   onDropClick={_onClick}
    //   onClose={_onClose}
    //   onOpenAutoFocus={(e: Event) => e.stopPropagation()} // onOpenChange={setDropDownVisible}>
    // >
    _jsxs(_Fragment, { children: [_jsxs(Popover, { open: dropDownVisible, children: [_jsx(PopoverAnchor, { asChild: true, children: _jsx("span", {}) }), _jsxs(PopoverContent, { onInteractOutside: function () { return _onClose(); }, onEscapeKeyDown: function () { return _onClose(); }, className: cn("text-sm", menuClassName), sideOffset: 6, children: [_jsx(BaseSearchBar, { id: id, onChange: _onChange, placeholder: placeholder, search: text, onClearClick: function (e) {
                                    e.preventDefault();
                                    //_onValueChange("")
                                }, onKeyDown: onKeyDown }), _jsx("div", { className: "border-border border-t pt-1", children: _jsxs("ul", { className: "flex max-h-48 flex-col gap-y-1 overflow-y-auto overflow-x-hidden ", children: [dropdownItems.length === 0 && (_jsx("li", { className: "p-2", children: "Nothing found." })), dropdownItems.map(function (item, i) { return (_jsx("li", { children: renderListItem(i, item.id, item.label, item.item, _onDropClick) }, i)); })] }) })] })] }), _jsx("input", { id: id, name: name, 
                //value="Vendor..."
                onChange: _onChange, 
                //onSelect={(val) => value = val}
                className: cn(INPUT_CLS, "h-10 w-full", className), placeholder: placeholder, value: text, onFocus: function () { return setDropDownVisible(true); } })] }));
}
//# sourceMappingURL=autocomplete.js.map