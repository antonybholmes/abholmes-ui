import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { Button } from "../ui/button";
const SecondaryButton = forwardRef(function SecondaryButton({ children, ...props }, ref) {
    //const [hover, setHover] = useState(false)
    //const [down, setDown] = useState(false)
    return (_jsx(Button, { ref: ref, variant: "secondary", ...props, children: children }));
});
export default SecondaryButton;
//# sourceMappingURL=secondary-button.js.map