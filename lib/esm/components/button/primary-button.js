import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { Button } from "../ui/button";
const PrimaryButton = forwardRef(function PrimaryButton({ children, ...props }, ref) {
    return (_jsx(Button, { ref: ref, ...props, children: children }));
});
export default PrimaryButton;
//# sourceMappingURL=primary-button.js.map