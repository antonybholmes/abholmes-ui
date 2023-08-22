import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { clns } from "../../lib/class-names";
import { TOOLBAR_ICON_BUTTON_CLS } from "../../theme";
import ToolbarButton from "./toolbar-button";
const ToolbarIconButton = forwardRef(function ToolbarIconButton({ className, children, ...props }, ref) {
    return (_jsx(ToolbarButton, { ref: ref, size: "icon", className: clns(TOOLBAR_ICON_BUTTON_CLS, className), ...props, children: children }));
});
export default ToolbarIconButton;
//# sourceMappingURL=toolbar-icon-button.js.map