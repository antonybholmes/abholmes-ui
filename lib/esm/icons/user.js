import { jsx as _jsx } from "react/jsx-runtime";
import cn from "@lib/class-names";
import { ICON_CLS } from "../interfaces/icon-props";
export default function UserIcon(_a) {
    var _b = _a.size, size = _b === void 0 ? "w-4" : _b, onClick = _a.onClick, className = _a.className;
    return (_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", className: cn(ICON_CLS, size, className), onClick: onClick, children: _jsx("path", { d: "M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" }) }));
}
//# sourceMappingURL=user.js.map