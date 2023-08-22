import { Children } from "react";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "../../components/ui/button";
import { cn } from "../../lib/class-names";
export default function MenuButton({ className, children, ...props }) {
    const c = Children.toArray(children);
    return (_jsxs(Button, { variant: "menu", className: cn("w-full grow", className), ...props, children: [c.length > 1 && _jsx("span", { className: "w-5 shrink-0", children: c[0] }), c[c.length - 1], _jsx("span", { className: "w-5 shrink-0" })] }));
}
//# sourceMappingURL=menu-button.js.map