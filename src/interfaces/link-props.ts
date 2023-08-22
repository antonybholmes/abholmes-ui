import { ComponentPropsWithoutRef } from "react"

export default interface ILinkProps extends ComponentPropsWithoutRef<"a"> {
  href: string
  "aria-label": string
  underline?: boolean
}
