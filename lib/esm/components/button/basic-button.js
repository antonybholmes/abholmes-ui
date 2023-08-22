import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { clns } from "../../lib/class-names";
import { FOCUS_RING_CLS } from "../../theme";
import { BaseButton } from "./base-button";
export const BasicButton = forwardRef(function BasicButton({ className, children, ...props }, ref) {
    return (_jsx(BaseButton, { ref: ref, className: clns(FOCUS_RING_CLS, className), ...props, children: children }));
});
//# sourceMappingURL=basic-button.js.map