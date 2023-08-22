import { APP_NAME } from "@/consts"
import BaseLink from "@components/link/base-link"

import BioIcon from "@icons/bio"
import type IIconProps from "@interfaces/icon-props"
import cn from "@lib/class-names"
import { CENTERED_BUTTON_CLS } from "@theme"

export default function LogoIcon({ className, size = "w-7" }: IIconProps) {
  return (
    <BaseLink
      aria-label={APP_NAME}
      href="/"
      className={cn(
        CENTERED_BUTTON_CLS,
        "fill-sky-500 dark:fill-gray-100",
        className,
      )}
    >
      <BioIcon size={size} />
      {/* <div className="font-bold text-red-400 text-sm">{APP_NAME}</div> */}
    </BaseLink>
  )
}
