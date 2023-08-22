import type ILinkProps from "@interfaces/link-props"
import cn from "@lib/class-names"
import RoundedButtonLink from "./rounded-button-link"

interface IProps extends ILinkProps {
  selected?: boolean
}

export default function ModuleButtonLink({
  selected,
  className,
  children,
  ...props
}: IProps) {
  return (
    <RoundedButtonLink
      className={cn(
        "flex flex-col justify-start border-transparent p-2",
        [selected, "bg-gray-200", "hover:bg-gray-200 "],
        className,
      )}
      {...props}
    >
      {children}
    </RoundedButtonLink>
  )
}

//font-bold bg-theme-600 hover:bg-theme-600 text-white shadow-md rounded px-5 py-3 trans"
