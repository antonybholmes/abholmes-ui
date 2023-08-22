"use client";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import VCenterRow from "@components/v-center-row";
import cn from "@lib/class-names";
import * as Dialog from "@radix-ui/react-dialog";
import TableIcon from "@icons/table";
import { useState } from "react";
import MenuButtonLink from "./menu-button-link";
import SideMenuButton from "./side-menu-button";
export var SIDE_OVERLAY_CLS = cn("fixed inset-0 z-overlay bg-slate-900/50 dark:bg-white/10 backdrop-blur-sm duration-500 ease-in-out", "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0");
var MENU_CLS = cn("fixed left-0 top-0 z-modal h-screen w-64 bg-white dark:bg-gray-700 px-4 shadow-lg duration-500 ease-in-out fill-mode-forwards", "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=open]:slide-in-from-left-2 data-[state=closed]:fade-out-0 data-[state=closed]:slide-out-to-left-2");
export default function SideMenu(_a) {
    var onClick = _a.onClick, className = _a.className, props = __rest(_a, ["onClick", "className"]);
    var _b = useState(false), dropDownVisible = _b[0], setDropDownVisible = _b[1];
    // const hide = useDelayHide(dropDownVisible)
    // const menuRef = useOutsideListener<HTMLDivElement>(dropDownVisible, () =>
    //   setDropDownVisible(false),
    // )
    props["aria-label"] = dropDownVisible ? "Close Menu" : "Open Menu";
    return (_jsxs(Dialog.Root, { open: dropDownVisible, onOpenChange: setDropDownVisible, children: [_jsx(Dialog.Trigger, { asChild: true, children: _jsx(SideMenuButton, { showMenu: dropDownVisible, className: "md:hidden" }) }), _jsxs(Dialog.Portal, { children: [_jsx(Dialog.Overlay, { className: SIDE_OVERLAY_CLS }), _jsxs(Dialog.Content, { className: MENU_CLS, onEscapeKeyDown: function () { return setDropDownVisible(false); }, onPointerDownOutside: function () { return setDropDownVisible(false); }, children: [_jsx(VCenterRow, { className: "h-16", children: _jsx(Dialog.Close, { asChild: true, children: _jsx(SideMenuButton, { showMenu: dropDownVisible }) }) }), _jsxs("ul", { className: "text-sm", onClick: function (e) { return e.stopPropagation(); }, children: [_jsx("li", { children: _jsxs(MenuButtonLink, { href: "/orders", "aria-label": "Orders", children: [_jsx(TableIcon, {}), _jsx("span", { children: "Orders" })] }) }), _jsx("li", { children: _jsxs(MenuButtonLink, { href: "/inventory", "aria-label": "Inventory", children: [_jsx(_Fragment, {}), _jsx("span", { children: "Inventory" })] }) }), _jsx("li", { children: _jsxs(MenuButtonLink, { href: "/products", "aria-label": "Products", children: [_jsx(_Fragment, {}), _jsx("span", { children: "Products" })] }) })] })] })] })] }));
}
//# sourceMappingURL=side-menu.js.map