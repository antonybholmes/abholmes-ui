import ILinkProps from "@interfaces/link-props"
import BaseLink from "./base-link"

/**
 * Creates a default underline link
 *
 * @param
 * @returns
 */
const UnderlineLink = ({ className, children, ...props }: ILinkProps) => (
  <BaseLink underline={true} className={className} {...props}>
    {children}
  </BaseLink>
)

export default UnderlineLink
