"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dropdown = exports.defaultRenderListItem = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const class_names_1 = __importDefault(require("../lib/class-names"));
const base_dropdown_1 = require("./base-dropdown");
const menu_button_1 = __importDefault(require("./toolbar/menu-button"));
function defaultRenderListItem(index, id, label, item, onClick) {
    function _onClick(e) {
        e.preventDefault();
        onClick(index, id, label, item);
    }
    return ((0, jsx_runtime_1.jsx)(menu_button_1.default, { onClick: (e) => _onClick(e), "aria-label": label, children: (0, jsx_runtime_1.jsx)("span", { children: label }) }));
}
exports.defaultRenderListItem = defaultRenderListItem;
function Dropdown({ dropDownVisible = false, items = [], onDropClick, renderListItem = defaultRenderListItem, onClose, onOpenAutoFocus, className, menuClassName, children, }) {
    //const menuRef = useRef<HTMLUListElement>(null)
    // useEffect(() => {
    //   setDropDownVisible(dropDownVisible)
    // }, [dropDownVisible])
    function _onClick(index, id, label, item) {
        ///setDropDownVisible(false)
        onDropClick && onDropClick(index, id, label, item);
    }
    return ((0, jsx_runtime_1.jsxs)(base_dropdown_1.BaseDropDown, { dropDownVisible: dropDownVisible, className: className, onClose: onClose, menuClassName: (0, class_names_1.default)(base_dropdown_1.DROPDOWN_CLS, menuClassName), onOpenAutoFocus: onOpenAutoFocus, children: [(0, jsx_runtime_1.jsx)("div", { children: children }), (0, jsx_runtime_1.jsx)("ul", { className: "w-full", children: items.map((item, i) => ((0, jsx_runtime_1.jsx)("li", { children: renderListItem(i, item.id, item.label, item.item, _onClick) }, i))) })] }));
}
exports.Dropdown = Dropdown;
//# sourceMappingURL=dropdown.js.map