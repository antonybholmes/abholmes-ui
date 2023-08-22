import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from "../../lib/class-names";
export const SCREEN_CLS = cn("fixed left-0 top-0 z-100 h-screen w-screen", "bg-gray-500/50 duration-300 ease-in-out", "fill-mode-forwards dark:bg-gray-900/50", "backdrop-blur-sm");
export default function ModalBgScreen({ visible, className, children, ...props }) {
    console.log(visible);
    return (_jsx("div", { className: cn(SCREEN_CLS, [visible, "animate-in fade-in", "animate-out fade-out"], className), ...props, children: children }));
}
//# sourceMappingURL=modal-bg-screen.js.map