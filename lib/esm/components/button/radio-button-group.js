import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from "react";
import RadioButton from "./radio-button";
export default function RadioButtonGroup({ items, selected = "", onRadioClick, prefix = "Sort", className, }) {
    const [index, setIndex] = useState(selected);
    function _onRadioClick(index) {
        setIndex(items[index]);
        onRadioClick(index);
    }
    return (_jsx("ul", { className: className, children: items.map((item, index) => {
            return (_jsx("li", { children: _jsx(RadioButton, { index: index, selected: item === selected, onRadioClick: _onRadioClick, "aria-label": `${prefix} by ${item}`, children: item }, index) }, index));
        }) }));
}
//# sourceMappingURL=radio-button-group.js.map