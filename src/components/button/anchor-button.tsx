import { MouseEvent } from "react"
import useMouseUpListener from "../../hooks/use-mouseup-listener"
import ILinkProps from "../../interfaces/link-props"

export default function AnchorButton({
  href = "#",
  onClick,
  onMouseUp,
  children,
  ...props
}: ILinkProps) {
  useMouseUpListener(onMouseUp)

  function _onClick(e: MouseEvent<HTMLAnchorElement>) {
    // prevent jumping to top of page
    e.preventDefault()
    onClick && onClick(e)
  }

  return (
    <a href={href} role="button" onClick={_onClick} {...props}>
      {children}
    </a>
  )
}
