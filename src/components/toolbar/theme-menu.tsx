
"use client"

import { useEffect, useState } from "react"

import { ComputerIcon } from "../../icons/computer"
import { MoonIcon } from "../../icons/moon"
import { SunIcon } from "../../icons/sun"
import { IElementProps } from "../../interfaces/element-props"
import { applyTheme, getTheme } from "../../lib/theme"
import { Tooltip } from "../tooltip"
import { Button } from "../ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu"

export function ThemeMenu({ className }: IElementProps) {
  const [dropDownVisible, setDropDownVisible] = useState(false)

  const [theme, setTheme] = useState<string>("system")

  useEffect(() => {
    setTheme(getTheme())
  }, [])

  useEffect(() => {
    applyTheme(theme)
  }, [theme])

  function onClose() {
    setDropDownVisible(false)
  }

  //useEffect(() => setDropDownVisible(items.length > 0), [items])

  function clickTheme(theme: string) {
    setTheme(theme)
    setDropDownVisible(false)
  }

  function getIcon(theme: string) {
    switch (theme) {
      case "light":
        return <SunIcon className="w-4" />
      case "dark":
        return <MoonIcon className="w-3.5 fill-sky-500" />
      default:
        return <ComputerIcon className="w-4 -scale-x-100" />
    }
  }

  return (
    <DropdownMenu open={dropDownVisible} onOpenChange={setDropDownVisible}>
      <Tooltip content="Toggle dark mode">
        <DropdownMenuTrigger asChild>
          <Button aria-label="Toggle dark mode" variant="link" size="icon">
            {getIcon(theme)}
          </Button>
        </DropdownMenuTrigger>
      </Tooltip>

      <DropdownMenuContent
        onEscapeKeyDown={() => setDropDownVisible(false)}
        onInteractOutside={() => setDropDownVisible(false)}
        align="end"
      >
        <DropdownMenuItem
          onClick={() => clickTheme("light")}
          aria-label="Set theme to light"
        >
          <SunIcon className="w-4" />

          <span>Light</span>
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={() => clickTheme("dark")}
          aria-label="Set theme to dark"
        >
          <MoonIcon className="w-3.5 dark:fill-sky-500" />

          <span>Dark</span>
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={() => clickTheme("system")}
          aria-label="Set theme to system"
        >
          <ComputerIcon className="w-4 -scale-x-100" />

          <span>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
