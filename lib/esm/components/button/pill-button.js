import { jsx as _jsx } from "react/jsx-runtime";
import { clns } from "../../lib/class-names";
import { PILL_BUTTON_CLS } from "../../theme";
import { BaseButton } from "./base-button";
export default function PillButton({ className, children, ...props }) {
    return (_jsx(BaseButton, { className: clns(PILL_BUTTON_CLS, className), ...props, children: children }));
}
//# sourceMappingURL=pill-button.js.map