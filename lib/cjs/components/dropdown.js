"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dropdown = exports.defaultRenderListItem = exports.DROPDOWN_CLS = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var menu_button_1 = __importDefault(require("@components/toolbar/menu-button"));
var base_dropdown_1 = require("./base-dropdown");
exports.DROPDOWN_CLS = "left-0";
function defaultRenderListItem(index, id, label, item, onClick) {
    function _onClick(e) {
        onClick(index, id, label, item);
    }
    return ((0, jsx_runtime_1.jsxs)(menu_button_1.default, { onClick: function (e) { return _onClick(e); }, "aria-label": label, children: [(0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {}), (0, jsx_runtime_1.jsx)("span", { children: label })] }));
}
exports.defaultRenderListItem = defaultRenderListItem;
function Dropdown(_a) {
    //const menuRef = useRef<HTMLUListElement>(null)
    var _b = _a.dropDownVisible, dropDownVisible = _b === void 0 ? false : _b, _c = _a.items, items = _c === void 0 ? [] : _c, onDropClick = _a.onDropClick, _d = _a.renderListItem, renderListItem = _d === void 0 ? defaultRenderListItem : _d, onClose = _a.onClose, className = _a.className, children = _a.children;
    // useEffect(() => {
    //   setDropDownVisible(dropDownVisible)
    // }, [dropDownVisible])
    function _onClick(index, id, label, item) {
        ///setDropDownVisible(false)
        onDropClick && onDropClick(index, id, label, item);
    }
    return ((0, jsx_runtime_1.jsxs)(base_dropdown_1.BaseDropDown, { dropDownVisible: dropDownVisible, className: className, onClose: onClose, menuClassName: exports.DROPDOWN_CLS, children: [(0, jsx_runtime_1.jsx)("div", { children: children }), (0, jsx_runtime_1.jsx)("ul", { className: "flex flex-col gap-y-1 p-1", children: items.map(function (item, i) { return ((0, jsx_runtime_1.jsx)("li", { children: renderListItem(i, item.id, item.label, item.item, _onClick) }, i)); }) })] }));
}
exports.Dropdown = Dropdown;
//# sourceMappingURL=dropdown.js.map