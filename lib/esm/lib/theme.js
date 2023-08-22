export var THEME_CYCLE = {
    system: "light",
    light: "dark",
    dark: "system",
};
export function getTheme() {
    var _a;
    return (_a = localStorage.getItem("theme")) !== null && _a !== void 0 ? _a : "system";
}
export function applyTheme(theme) {
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
//# sourceMappingURL=theme.js.map