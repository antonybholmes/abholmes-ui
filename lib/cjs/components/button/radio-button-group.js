"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const radio_button_1 = __importDefault(require("./radio-button"));
function RadioButtonGroup({ items, selected = "", onRadioClick, prefix = "Sort", className, }) {
    const [index, setIndex] = (0, react_1.useState)(selected);
    function _onRadioClick(index) {
        setIndex(items[index]);
        onRadioClick(index);
    }
    return ((0, jsx_runtime_1.jsx)("ul", { className: className, children: items.map((item, index) => {
            return ((0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)(radio_button_1.default, { index: index, selected: item === selected, onRadioClick: _onRadioClick, "aria-label": `${prefix} by ${item}`, children: item }, index) }, index));
        }) }));
}
exports.default = RadioButtonGroup;
//# sourceMappingURL=radio-button-group.js.map