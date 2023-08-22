import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { Button } from "../ui/button";
export const WarningButton = forwardRef(function PrimaryButton({ children, ...props }, ref) {
    return (_jsx(Button, { ref: ref, variant: "destructive", ...props, children: children }));
});
//# sourceMappingURL=warning-button.js.map