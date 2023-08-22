"use client"

import VCenterRow from "@components/v-center-row"
import IButtonProps from "@interfaces/button-props"
import cn from "@lib/class-names"
import * as Dialog from "@radix-ui/react-dialog"

import TableIcon from "@icons/table"
import { useState } from "react"
import MenuButtonLink from "./menu-button-link"
import SideMenuButton from "./side-menu-button"

export const SIDE_OVERLAY_CLS = cn(
  "fixed inset-0 z-overlay bg-slate-900/50 dark:bg-white/10 backdrop-blur-sm duration-500 ease-in-out",
  "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
)

const MENU_CLS = cn(
  "fixed left-0 top-0 z-modal h-screen w-64 bg-white dark:bg-gray-700 px-4 shadow-lg duration-500 ease-in-out fill-mode-forwards",
  "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=open]:slide-in-from-left-2 data-[state=closed]:fade-out-0 data-[state=closed]:slide-out-to-left-2",
)

export interface IMenuButtonProps extends IButtonProps {
  showMenu: boolean
}

export default function SideMenu({
  onClick,
  className,
  ...props
}: IButtonProps) {
  const [dropDownVisible, setDropDownVisible] = useState(false)
  // const hide = useDelayHide(dropDownVisible)

  // const menuRef = useOutsideListener<HTMLDivElement>(dropDownVisible, () =>
  //   setDropDownVisible(false),
  // )

  props["aria-label"] = dropDownVisible ? "Close Menu" : "Open Menu"

  return (
    <Dialog.Root open={dropDownVisible} onOpenChange={setDropDownVisible}>
      <Dialog.Trigger asChild>
        <SideMenuButton showMenu={dropDownVisible} className="md:hidden" />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={SIDE_OVERLAY_CLS} />
        <Dialog.Content
          className={MENU_CLS}
          onEscapeKeyDown={() => setDropDownVisible(false)}
          onPointerDownOutside={() => setDropDownVisible(false)}
        >
          <VCenterRow className="h-16">
            <Dialog.Close asChild>
              <SideMenuButton showMenu={dropDownVisible} />
            </Dialog.Close>
          </VCenterRow>

          <ul className="text-sm" onClick={e => e.stopPropagation()}>
            <li>
              <MenuButtonLink href="/orders" aria-label="Orders">
                <TableIcon />
                <span>Orders</span>
              </MenuButtonLink>
            </li>
            <li>
              <MenuButtonLink href="/inventory" aria-label="Inventory">
                <></>
                <span>Inventory</span>
              </MenuButtonLink>
            </li>
            <li>
              <MenuButtonLink href="/products" aria-label="Products">
                <></>
                <span>Products</span>
              </MenuButtonLink>
            </li>
          </ul>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
