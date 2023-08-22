import { cn } from "..lib/class-names";
import PillButtonLink from "@components/link/pill-button-link";
import { jsx as _jsx } from "react/jsx-runtime";
export default function ToolbarGroup(_a) {
    var session = _a.session;
    var name = session.group ? session.group.name : "";
    return (_jsx(PillButtonLink, { href: "/members", "aria-label": "Manage group", className: cn("hidden flex-row whitespace-nowrap bg-gray-600 px-3 py-1 font-semibold text-white hover:bg-gray-500 lg:flex"), children: name }));
}
//# sourceMappingURL=toolbar-group.js.map