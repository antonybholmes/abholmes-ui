import BaseLink from "@components/link/base-link";
import { CENTERED_BUTTON_CLS } from "@theme";
import { jsx as _jsx } from "react/jsx-runtime";
export default function ToolbarHelp() {
    return (_jsx(BaseLink, { href: "/about", "aria-label": "About", className: clns(CENTERED_BUTTON_CLS, "hidden h-5 w-5 rounded-full border border-gray-300 text-xs font-bold text-gray-400 dark:text-gray-50 md:flex"), children: "?" }));
}
//# sourceMappingURL=toolbar-help.js.map