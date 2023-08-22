import { ComponentPropsWithoutRef } from "react"

export default interface IButtonProps
  extends ComponentPropsWithoutRef<"button"> {
  size?: "default" | "sm" | "lg" | "icon" | null | undefined
  isSelected?: boolean
  selectedClassName?: string
  unSelectedClassName?: string
}
