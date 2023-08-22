import BaseButton from "@components/button/base-button"
import type IChildrenProps from "@interfaces/children-props"
import type IMouseProps from "@interfaces/mouse-props"
import { CLS_ORDER_ACTION } from "./order-action-link"

interface IProps extends IChildrenProps, IMouseProps {}

export default function OrderActionButton({ onClick, children }: IProps) {
  return (
    <BaseButton
      className={CLS_ORDER_ACTION}
      onClick={onClick}
      aria-label={children?.toString() ?? "Order Action"}
    >
      {children}
    </BaseButton>
  )
}
