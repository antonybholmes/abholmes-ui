"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const computer_1 = __importDefault(require("../../icons/computer"));
const moon_1 = require("../../icons/moon");
const sun_1 = require("../../icons/sun");
const theme_1 = require("../../lib/theme");
const tooltip_1 = require("../tooltip");
const button_1 = require("../ui/button");
const dropdown_menu_1 = require("../ui/dropdown-menu");
function ThemeMenu({ className }) {
    const [dropDownVisible, setDropDownVisible] = (0, react_1.useState)(false);
    const [theme, setTheme] = (0, react_1.useState)("system");
    (0, react_1.useEffect)(() => {
        setTheme((0, theme_1.getTheme)());
    }, []);
    (0, react_1.useEffect)(() => {
        (0, theme_1.applyTheme)(theme);
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
                return (0, jsx_runtime_1.jsx)(sun_1.SunIcon, { className: "w-4" });
            case "dark":
                return (0, jsx_runtime_1.jsx)(moon_1.MoonIcon, { className: "w-3.5 fill-sky-500" });
            default:
                return (0, jsx_runtime_1.jsx)(computer_1.default, { className: "w-4 -scale-x-100" });
        }
    }
    return ((0, jsx_runtime_1.jsxs)(dropdown_menu_1.DropdownMenu, { open: dropDownVisible, onOpenChange: setDropDownVisible, children: [(0, jsx_runtime_1.jsx)(tooltip_1.Tooltip, { content: "Toggle dark mode", children: (0, jsx_runtime_1.jsx)(dropdown_menu_1.DropdownMenuTrigger, { asChild: true, children: (0, jsx_runtime_1.jsx)(button_1.Button, { "aria-label": "Toggle dark mode", variant: "link", size: "icon", children: getIcon(theme) }) }) }), (0, jsx_runtime_1.jsxs)(dropdown_menu_1.DropdownMenuContent, { onEscapeKeyDown: () => setDropDownVisible(false), onInteractOutside: () => setDropDownVisible(false), align: "end", children: [(0, jsx_runtime_1.jsxs)(dropdown_menu_1.DropdownMenuItem, { onClick: () => clickTheme("light"), "aria-label": "Set theme to light", children: [(0, jsx_runtime_1.jsx)(sun_1.SunIcon, { className: "w-4" }), (0, jsx_runtime_1.jsx)("span", { children: "Light" })] }), (0, jsx_runtime_1.jsxs)(dropdown_menu_1.DropdownMenuItem, { onClick: () => clickTheme("dark"), "aria-label": "Set theme to dark", children: [(0, jsx_runtime_1.jsx)(moon_1.MoonIcon, { className: "w-3.5 dark:fill-sky-500" }), (0, jsx_runtime_1.jsx)("span", { children: "Dark" })] }), (0, jsx_runtime_1.jsxs)(dropdown_menu_1.DropdownMenuItem, { onClick: () => clickTheme("system"), "aria-label": "Set theme to system", children: [(0, jsx_runtime_1.jsx)(computer_1.default, { className: "w-4 -scale-x-100" }), (0, jsx_runtime_1.jsx)("span", { children: "System" })] })] })] }));
}
exports.default = ThemeMenu;
//# sourceMappingURL=theme-menu.js.map