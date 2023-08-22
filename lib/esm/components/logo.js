import { cn } from "..lib/class-names";
import { APP_NAME } from "@/consts";
import BaseLink from "@components/link/base-link";
import BioIcon from "@icons/bio";
import { BASE_BUTTON_CLS, CENTERED_BUTTON_CLS, FOCUS_RING_CLS } from "@theme";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function Logo(_a) {
    var className = _a.className, _b = _a.size, size = _b === void 0 ? "w-7" : _b;
    return (_jsxs(BaseLink, { "aria-label": APP_NAME, href: "/", className: cn(BASE_BUTTON_CLS, FOCUS_RING_CLS, CENTERED_BUTTON_CLS, "gap-x-2 fill-sky-500 dark:fill-gray-100", className), children: [_jsx(BioIcon, { size: size }), _jsx("span", { className: "whitespace-nowrap text-sm font-bold dark:text-gray-100", children: APP_NAME })] }));
}
//# sourceMappingURL=logo.js.map