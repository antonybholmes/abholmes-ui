import { cn } from "..lib/class-names";
import Alert from "@components/alerts/alert";
import BaseLink from "@components/link/base-link";
import BlueLink from "@components/link/blue-link";
import VCenterRow from "@components/v-center-row";
import { BASE_BUTTON_CLS, CENTERED_BUTTON_CLS, FOCUS_RING_CLS, INPUT_BORDER_CLS, INPUT_DARK_BORDER_CLS, } from "@theme";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { LOGIN_ROUTE, TOOLBAR_MENU_ITEMS } from "src/consts";
import BaseCol from "../base-col";
import Logo from "../logo";
import { DynamicSideMenu } from "./dynamic-side-menu";
import { DynamicThemeMenu } from "./dynamic-theme-menu";
import { DynamicUserMenu } from "./dynamic-user-menu";
var TOOLBAR_BUTTON_CLS = cn(BASE_BUTTON_CLS, CENTERED_BUTTON_CLS, FOCUS_RING_CLS, "p-2");
export default function Toolbar(_a) {
    var session = _a.session, _b = _a.tab, tab = _b === void 0 ? "" : _b, _c = _a.showAlert, showAlert = _c === void 0 ? true : _c, middle = _a.middle, small = _a.small, className = _a.className, alert = _a.alert;
    return (_jsxs(BaseCol, { children: [_jsxs("nav", { className: cn("grid h-16 grid-cols-2 items-center border-b  px-4 lg:grid-cols-3", INPUT_BORDER_CLS, INPUT_DARK_BORDER_CLS), children: [_jsxs(VCenterRow, { className: cn("h-full w-full gap-x-2 "), children: [_jsx(DynamicSideMenu, {}), _jsx(Logo, {}), (session === null || session === void 0 ? void 0 : session.group) && (session === null || session === void 0 ? void 0 : session.user) && (_jsx("ul", { className: cn("hidden h-full grow flex-row items-center gap-x-2 pl-4 text-xs font-semibold md:flex"), children: TOOLBAR_MENU_ITEMS.map(function (menu, mi) { return (_jsx("li", { children: _jsx(BaseLink, { href: menu.url, "aria-label": menu.name, className: cn(TOOLBAR_BUTTON_CLS, [
                                            menu.name === tab,
                                            "text-sky-500",
                                            "hover:text-sky-400",
                                        ]), children: menu.name }) }, mi)); }) }))] }), _jsx("div", { className: "hidden lg:block", children: middle }), _jsxs(VCenterRow, { className: "justify-end gap-x-4 text-xs", children: [_jsx(DynamicThemeMenu, {}), (session === null || session === void 0 ? void 0 : session.user) ? (_jsx(DynamicUserMenu, { session: session })) : (_jsx(BlueLink, { href: LOGIN_ROUTE, "aria-label": "Login", className: "text-sm font-bold", underline: false, children: "Login" }))] })] }), showAlert && (alert === null || alert === void 0 ? void 0 : alert.message) && _jsx(Alert, { alert: alert }), _jsx("div", { className: "block p-4 lg:hidden", children: small })] }));
}
//# sourceMappingURL=toolbar.js.map