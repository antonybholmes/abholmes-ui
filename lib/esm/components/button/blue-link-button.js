import { jsx as _jsx } from "react/jsx-runtime";
import cn from "../../lib/class-names";
import { PRIMARY_LINK_CLS } from "../../theme";
import { BasicButton } from "./basic-button";
export function BlueLinkButton({ className, children, ...props }) {
    return (_jsx(BasicButton, { className: cn(PRIMARY_LINK_CLS, "font-medium", className), ...props, children: children }));
}
//# sourceMappingURL=blue-link-button.js.map