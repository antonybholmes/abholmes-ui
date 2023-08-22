import { forwardRef } from "react";
import { jsx as _jsx } from "react/jsx-runtime";
import { Button } from "../../components/ui/button";
const ToolbarButton = forwardRef(function ToolbarButton({ size = "default", className, children, ...props }, ref) {
    //const [hover, setHover] = useState(false)
    //const [down, setDown] = useState(false)
    return (_jsx(Button, { ref: ref, variant: "ghost", size: size, className: clns("gap-x-2", className), ...props, children: children }));
});
export default ToolbarButton;
//# sourceMappingURL=toolbar-button.js.map