import { APP_NAME } from "@/consts"
import BaseLink from "@components/link/base-link"

import BioIcon from "@icons/bio"
import type IIconProps from "@interfaces/icon-props"
import cn from "@lib/class-names"
import { BASE_BUTTON_CLS, CENTERED_BUTTON_CLS, FOCUS_RING_CLS } from "@theme"

export default function Logo({ className, size = "w-7" }: IIconProps) {
  return (
    <BaseLink
      aria-label={APP_NAME}
      href="/"
      className={cn(
        BASE_BUTTON_CLS,
        FOCUS_RING_CLS,
        CENTERED_BUTTON_CLS,
        "gap-x-2 fill-sky-500 dark:fill-gray-100",
        className,
      )}
    >
      <BioIcon size={size} />
      <span className="whitespace-nowrap text-sm font-bold dark:text-gray-100">
        {APP_NAME}
      </span>
    </BaseLink>
  )
}
