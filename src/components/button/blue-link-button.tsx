import IButtonProps from "../../interfaces/button-props"
import { clns } from "../../lib/class-names"
import { PRIMARY_LINK_CLS } from "../../theme"
import { BasicButton } from "./basic-button"

export function BlueLinkButton({
  className,
  children,
  ...props
}: IButtonProps) {
  return (
    <BasicButton
      className={clns(PRIMARY_LINK_CLS, "font-medium", className)}
      {...props}
    >
      {children}
    </BasicButton>
  )
}

//font-bold bg-theme-600 hover:bg-theme-600 text-white shadow-md rounded px-5 py-3 trans"
