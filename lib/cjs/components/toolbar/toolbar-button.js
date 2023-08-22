"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const shadcn_utils_1 = require("..lib/shadcn-utils");
const button_1 = require("@components/ui/button");
const react_1 = require("react");
const ToolbarButton = (0, react_1.forwardRef)(function ToolbarButton({ size = "default", className, children, ...props }, ref) {
    //const [hover, setHover] = useState(false)
    //const [down, setDown] = useState(false)
    return ((0, jsx_runtime_1.jsx)(button_1.Button, { ref: ref, variant: "ghost", size: size, className: (0, shadcn_utils_1.cn)("gap-x-2", className), ...props, children: children }));
});
exports.default = ToolbarButton;
//# sourceMappingURL=toolbar-button.js.map