import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { Button } from "../components/ui/button";
import { cn } from "../lib/shadcn-utils";
const ToolbarButton = forwardRef(function ToolbarButton({ size = "default", className, children, ...props }, ref) {
    //const [hover, setHover] = useState(false)
    //const [down, setDown] = useState(false)
    return (_jsx(Button, { ref: ref, variant: "ghost", size: size, className: cn("gap-x-2", className), ...props, children: children }));
});
export default ToolbarButton;
//# sourceMappingURL=toolbar-button.js.map