import { jsx as _jsx } from "react/jsx-runtime";
import useMouseUpListener from "../../hooks/use-mouseup-listener";
import { forwardRef } from "react";
import { cn } from "../../lib/class-names";
import { BASE_BUTTON_CLS } from "../../theme";
export const BaseButton = forwardRef(function BaseButton({ onMouseUp, isSelected = false, selectedClassName, unSelectedClassName, className, children, ...props }, ref) {
    useMouseUpListener(onMouseUp);
    return (_jsx("button", { ref: ref, className: cn(BASE_BUTTON_CLS, className, [
            isSelected,
            selectedClassName,
            unSelectedClassName,
        ]), ...props, children: children }));
});
//# sourceMappingURL=base-button.js.map