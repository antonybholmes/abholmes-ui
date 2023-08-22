"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const button_1 = require("@components/ui/button");
const react_1 = require("react");
const SecondaryButton = (0, react_1.forwardRef)(function SecondaryButton({ children, ...props }, ref) {
    //const [hover, setHover] = useState(false)
    //const [down, setDown] = useState(false)
    return ((0, jsx_runtime_1.jsx)(button_1.Button, { ref: ref, variant: "secondary", ...props, children: children }));
});
exports.default = SecondaryButton;
//# sourceMappingURL=secondary-button.js.map