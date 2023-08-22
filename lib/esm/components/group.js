import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import BaseLink from "@components/link/base-link";
import VCenterRow from "@components/v-center-row";
import GearIcon from "..icons/gear";
export default function Groups(_a) {
    var _b;
    var session = _a.session;
    return (_jsx(VCenterRow, { className: "gap-x-4", children: _jsxs(VCenterRow, { className: "w-full justify-between gap-x-4", children: [_jsx("p", { className: "truncate text-sm font-semibold text-gray-600 dark:text-white", children: session.group ? session.group.name : "" }), ((_b = session.user) === null || _b === void 0 ? void 0 : _b.isAdmin) && (_jsx(BaseLink, { href: "/members", "aria-label": "Manage group", children: _jsx(GearIcon, { className: "trans-300 transition-color  fill-gray-500/50 hover:fill-gray-500 dark:fill-white/50 dark:hover:fill-white" }) }))] }) }));
}
//# sourceMappingURL=group.js.map