import { jsx as _jsx } from "react/jsx-runtime";
import { PRIMARY_LINK_CLS } from "../../theme";
import { BasicButton } from "./basic-button";
export function BlueLinkButton({ className, children, ...props }) {
    return (_jsx(BasicButton, { className: clns(PRIMARY_LINK_CLS, "font-medium", className), ...props, children: children }));
}
//# sourceMappingURL=blue-link-button.js.map