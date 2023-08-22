import cn from "..lib/class-names";
import VCenterRow from "@components/v-center-row";
import ChevronRightIcon from "@icons/chevron-right";
import { useState } from "react";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { CHEVRON_CLS } from "src/consts";
import Dropdown, { defaultRenderListItem } from "./dropdown";
export default function InputDropdown(_a) {
    var id = _a.id, name = _a.name, value = _a.value, _b = _a.items, items = _b === void 0 ? [] : _b, onDropClick = _a.onDropClick, _c = _a.placeholder, placeholder = _c === void 0 ? "Choose..." : _c, _d = _a.renderListItem, renderListItem = _d === void 0 ? defaultRenderListItem : _d, className = _a.className, menuClassName = _a.menuClassName;
    var _e = useState(value), text = _e[0], setText = _e[1];
    var _f = useState(false), dropDownVisible = _f[0], setDropDownVisible = _f[1];
    //useEffect(() => setDropDownVisible(items.length > 0), [items])
    function _onClick(index, id, label, item) {
        setText(label);
        setDropDownVisible(false);
        onDropClick && onDropClick(index, id, label, item);
    }
    var ditems = items.map(function (item) { return ({
        id: item.uuid64,
        label: item.name,
        item: item,
    }); });
    function onClose() {
        setDropDownVisible(false);
    }
    return (_jsx(Dropdown, { dropDownVisible: dropDownVisible, className: className, menuClassName: menuClassName, items: ditems, renderListItem: renderListItem, onDropClick: _onClick, onClose: onClose, children: _jsxs(VCenterRow
        // onClick={() => {
        //   setDropDownVisible(!dropDownVisible)
        // }}
        , { 
            // onClick={() => {
            //   setDropDownVisible(!dropDownVisible)
            // }}
            className: className, children: [_jsx("input", { id: id, name: name, 
                    //value="Vendor..."
                    //onChange={_onChange} //(e) => value = e.target.value}
                    //onSelect={(val) => value = val}
                    onFocus: function () {
                        setDropDownVisible(true);
                    }, className: "w-full cursor-pointer outline-none", placeholder: placeholder, value: text ? text : items.length > 0 ? items[0].name : "", readOnly: true }), _jsx(ChevronRightIcon, { className: cn("trans-300 transition-transform", CHEVRON_CLS, [
                        dropDownVisible,
                        "rotate-270",
                        "rotate-90",
                    ]), size: "shrink-0 w-3" })] }) }));
}
//# sourceMappingURL=input-dropdown.js.map