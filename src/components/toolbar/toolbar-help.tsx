import BaseLink from "@components/link/base-link"
import cn from "@lib/class-names"
import { CENTERED_BUTTON_CLS } from "@theme"

export default function ToolbarHelp() {
  return (
    <BaseLink
      href="/about"
      aria-label="About"
      className={cn(
        CENTERED_BUTTON_CLS,
        "hidden h-5 w-5 rounded-full border border-gray-300 text-xs font-bold text-gray-400 dark:text-gray-50 md:flex",
      )}
    >
      ?
    </BaseLink>
  )
}
