import IStringMap from "../interfaces/string-map"

export const THEME_CYCLE: IStringMap = {
  system: "light",
  light: "dark",
  dark: "system",
}

export function getTheme(): string {
  return localStorage.getItem("theme") ?? "system"
}

export function applyTheme(theme: string) {
  if (
    theme === "dark" ||
    (theme === "system" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark")
  } else {
    document.documentElement.classList.remove("dark")
  }

  localStorage.setItem("theme", theme)
}
