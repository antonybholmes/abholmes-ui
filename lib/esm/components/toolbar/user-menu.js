"use client";
import { BaseRow } from "@components/base-row";
import { DynamicTooltip } from "@components/dynamic-tooltip";
import BlueArrowLink from "@components/link/blue-index-link";
import SecondaryButtonLink from "@components/link/secondary-button-link";
import { Button } from "@components/ui/button";
import VCenterCol from "@components/v-center-col";
import VCenterRow from "@components/v-center-row";
import GearIcon from "@icons/gear";
import GroupIcon from "@icons/group";
import UserIcon from "@icons/user";
import cn from "@lib/class-names";
import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import MenuButtonLink from "./menu-button-link";
import { SIDE_OVERLAY_CLS } from "./side-menu";
import SideMenuButton from "./side-menu-button";
var MENU_CLS = cn("fixed right-0 top-0 z-modal h-screen w-72 bg-background px-4", "shadow-lg duration-400 ease-in-out fill-mode-forwards duration-500", "ease-in-out fill-mode-forwards", "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:slide-in-from-right-2", "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:slide-out-to-right-2");
export default function UserMenu(_a) {
    var session = _a.session, className = _a.className;
    var _b = useState(false), dropDownVisible = _b[0], setDropDownVisible = _b[1];
    // const hide = useDelayHide(dropDownVisible)
    // //useEffect(() => setDropDownVisible(items.length > 0), [items])
    // const menuRef = useOutsideListener<HTMLDivElement>(dropDownVisible, () =>
    //   setDropDownVisible(false),
    // )
    var name = session.user
        ? "".concat(session.user.firstName, " ").concat(session.user.lastName)
        : "";
    var groupName = session.group ? session.group.name : "";
    // const transitions = useTransition(dropDownVisible, {
    //   from: { opacity: 0, right: "-4rem" },
    //   enter: { opacity: 1, right: "0rem" },
    //   leave: { opacity: 0, right: "-4rem" },
    // })
    return (_jsxs(Dialog.Root, { open: dropDownVisible, onOpenChange: setDropDownVisible, children: [_jsx(DynamicTooltip, { content: "Show settings", direction: "left", children: _jsx(Dialog.Trigger, { asChild: true, children: _jsx(Button, { "aria-label": "Show user menu", variant: "link", size: "icon", onClick: function () { return setDropDownVisible(true); }, children: _jsx(UserIcon, { className: "h-6 w-6 rounded-full fill-gray-600 dark:fill-gray-100" }) }) }) }), _jsxs(Dialog.Portal, { children: [_jsx(Dialog.Overlay, { className: SIDE_OVERLAY_CLS }), _jsxs(Dialog.Content, { className: MENU_CLS, onEscapeKeyDown: function () { return setDropDownVisible(false); }, onPointerDownOutside: function () { return setDropDownVisible(false); }, children: [_jsx(VCenterRow, { className: "h-16 justify-end", children: _jsx(Dialog.Close, { asChild: true, children: _jsx(SideMenuButton, { showMenu: dropDownVisible }) }) }), _jsxs(VCenterCol, { className: "gap-y-8", children: [_jsxs("ul", { className: "flex flex-col gap-y-1 text-sm", onClick: function (e) { return e.stopPropagation(); }, children: [_jsx("li", { className: "inline-block w-full whitespace-nowrap px-1 pb-2 font-semibold", children: name }), _jsx("li", { children: _jsxs(MenuButtonLink, { href: "/profile", "aria-label": "Profile Settings", children: [_jsx(GearIcon, { className: "fill-gray-400" }), "Profile Settings"] }) }), _jsx("li", { children: _jsxs(MenuButtonLink, { href: "/members", "aria-label": "Profile Settings", children: [_jsx(GroupIcon, { className: "fill-gray-400" }), "Group Settings"] }) })] }), _jsx(SecondaryButtonLink, { href: "/signout", "aria-label": "Sign Out", className: "w-full", children: "Sign Out" }), _jsx("span", { className: "border-border border-t" }), _jsx(BaseRow, { children: _jsx(BlueArrowLink, { href: "/help", "aria-label": "Profile Settings", className: "font-semibold", children: "Help" }) })] })] })] })] }));
}
//# sourceMappingURL=user-menu.js.map