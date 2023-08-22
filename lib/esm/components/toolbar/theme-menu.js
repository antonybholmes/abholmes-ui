"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import ComputerIcon from "../../icons/computer";
import { MoonIcon } from "../../icons/moon";
import { SunIcon } from "../../icons/sun";
import { applyTheme, getTheme } from "../../lib/theme";
import { Tooltip } from "../tooltip";
import { Button } from "../ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, } from "../ui/dropdown-menu";
export default function ThemeMenu({ className }) {
    const [dropDownVisible, setDropDownVisible] = useState(false);
    const [theme, setTheme] = useState("system");
    useEffect(() => {
        setTheme(getTheme());
    }, []);
    useEffect(() => {
        applyTheme(theme);
    }, [theme]);
    function onClose() {
        setDropDownVisible(false);
    }
    //useEffect(() => setDropDownVisible(items.length > 0), [items])
    function clickTheme(theme) {
        setTheme(theme);
        setDropDownVisible(false);
    }
    function getIcon(theme) {
        switch (theme) {
            case "light":
                return _jsx(SunIcon, { className: "w-4" });
            case "dark":
                return _jsx(MoonIcon, { className: "w-3.5 fill-sky-500" });
            default:
                return _jsx(ComputerIcon, { className: "w-4 -scale-x-100" });
        }
    }
    return (_jsxs(DropdownMenu, { open: dropDownVisible, onOpenChange: setDropDownVisible, children: [_jsx(Tooltip, { content: "Toggle dark mode", children: _jsx(DropdownMenuTrigger, { asChild: true, children: _jsx(Button, { "aria-label": "Toggle dark mode", variant: "link", size: "icon", children: getIcon(theme) }) }) }), _jsxs(DropdownMenuContent, { onEscapeKeyDown: () => setDropDownVisible(false), onInteractOutside: () => setDropDownVisible(false), align: "end", children: [_jsxs(DropdownMenuItem, { onClick: () => clickTheme("light"), "aria-label": "Set theme to light", children: [_jsx(SunIcon, { className: "w-4" }), _jsx("span", { children: "Light" })] }), _jsxs(DropdownMenuItem, { onClick: () => clickTheme("dark"), "aria-label": "Set theme to dark", children: [_jsx(MoonIcon, { className: "w-3.5 dark:fill-sky-500" }), _jsx("span", { children: "Dark" })] }), _jsxs(DropdownMenuItem, { onClick: () => clickTheme("system"), "aria-label": "Set theme to system", children: [_jsx(ComputerIcon, { className: "w-4 -scale-x-100" }), _jsx("span", { children: "System" })] })] })] }));
}
//# sourceMappingURL=theme-menu.js.map