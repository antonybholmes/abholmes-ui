import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ICON_CLS } from "../interfaces/icon-props";
import { clns } from "../lib/class-names";
export function CloseIcon({ size = "w-4", className }) {
    return (_jsxs("svg", { viewBox: "0 0 32 32", xmlns: "http://www.w3.org/2000/svg", className: clns(ICON_CLS, size, className), style: { strokeLinecap: "round", strokeLinejoin: "round" }, children: [_jsx("path", { d: "M 8,8 L 24,24" }), _jsx("path", { d: "M 8,24 L 24,8" })] }));
}
//# sourceMappingURL=close.js.map