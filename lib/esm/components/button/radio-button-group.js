import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from "react";
import RadioButton from "./radio-button";
export default function RadioButtonGroup(_a) {
    var items = _a.items, _b = _a.selected, selected = _b === void 0 ? "" : _b, onRadioClick = _a.onRadioClick, _c = _a.prefix, prefix = _c === void 0 ? "Sort" : _c, className = _a.className;
    var _d = useState(selected), index = _d[0], setIndex = _d[1];
    function _onRadioClick(index) {
        setIndex(items[index]);
        onRadioClick(index);
    }
    return (_jsx("ul", { className: className, children: items.map(function (item, index) {
            return (_jsx("li", { children: _jsx(RadioButton, { index: index, selected: item === selected, onRadioClick: _onRadioClick, "aria-label": "".concat(prefix, " by ").concat(item), children: item }, index) }, index));
        }) }));
}
//# sourceMappingURL=radio-button-group.js.map