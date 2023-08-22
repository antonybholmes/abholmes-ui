export const THEME_CYCLE = {
    system: "light",
    light: "dark",
    dark: "system",
};
export function getTheme() {
    return localStorage.getItem("theme") ?? "system";
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