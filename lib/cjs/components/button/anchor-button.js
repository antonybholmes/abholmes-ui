"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const use_mouseup_listener_1 = __importDefault(require("../../hooks/use-mouseup-listener"));
function AnchorButton({ href = "#", onClick, onMouseUp, children, ...props }) {
    (0, use_mouseup_listener_1.default)(onMouseUp);
    function _onClick(e) {
        // prevent jumping to top of page
        e.preventDefault();
        onClick && onClick(e);
    }
    return ((0, jsx_runtime_1.jsx)("a", { href: href, role: "button", onClick: _onClick, ...props, children: children }));
}
exports.default = AnchorButton;
//# sourceMappingURL=anchor-button.js.map