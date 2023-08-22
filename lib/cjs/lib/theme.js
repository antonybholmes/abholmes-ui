"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyTheme = exports.getTheme = exports.THEME_CYCLE = void 0;
exports.THEME_CYCLE = {
    system: "light",
    light: "dark",
    dark: "system",
};
function getTheme() {
    var _a;
    return (_a = localStorage.getItem("theme")) !== null && _a !== void 0 ? _a : "system";
}
exports.getTheme = getTheme;
function applyTheme(theme) {
    if (theme === "dark" ||
        (theme === "system" &&
            window.matchMedia("(prefers-color-scheme: dark)").matches)) {
        document.documentElement.classList.add("dark");
    }
    else {
        document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
}
exports.applyTheme = applyTheme;
//# sourceMappingURL=theme.js.map