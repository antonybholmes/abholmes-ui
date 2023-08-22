"use client"

import type IClassProps from "@interfaces/class-props"

import BlueArrowLink from "@components/link/blue-index-link"

import BaseRow from "@components/base-row"
import { DynamicTooltip } from "@components/dynamic-tooltip"
import SecondaryButtonLink from "@components/link/secondary-button-link"
import { Button } from "@components/ui/button"
import VCenterCol from "@components/v-center-col"
import VCenterRow from "@components/v-center-row"
import GearIcon from "@icons/gear"
import GroupIcon from "@icons/group"
import UserIcon from "@icons/user"
import cn from "@lib/class-names"
import { ISessionUser } from "@lib/types"
import * as Dialog from "@radix-ui/react-dialog"
import { useState } from "react"
import MenuButtonLink from "./menu-button-link"
import { SIDE_OVERLAY_CLS } from "./side-menu"
import SideMenuButton from "./side-menu-button"

const MENU_CLS = cn(
  "fixed right-0 top-0 z-modal h-screen w-72 bg-background px-4",
  "shadow-lg duration-400 ease-in-out fill-mode-forwards duration-500",
  "ease-in-out fill-mode-forwards",
  "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:slide-in-from-right-2",
  "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:slide-out-to-right-2",
)

interface IProps extends IClassProps {
  session: ISessionUser
}

export default function UserMenu({ session, className }: IProps) {
  const [dropDownVisible, setDropDownVisible] = useState(false)

  // const hide = useDelayHide(dropDownVisible)

  // //useEffect(() => setDropDownVisible(items.length > 0), [items])

  // const menuRef = useOutsideListener<HTMLDivElement>(dropDownVisible, () =>
  //   setDropDownVisible(false),
  // )

  const name = session.user
    ? `${session.user.firstName} ${session.user.lastName}`
    : ""

  const groupName = session.group ? session.group.name : ""

  // const transitions = useTransition(dropDownVisible, {
  //   from: { opacity: 0, right: "-4rem" },
  //   enter: { opacity: 1, right: "0rem" },
  //   leave: { opacity: 0, right: "-4rem" },
  // })

  return (
    <Dialog.Root open={dropDownVisible} onOpenChange={setDropDownVisible}>
      <DynamicTooltip content="Show settings" direction="left">
        <Dialog.Trigger asChild>
          <Button
            aria-label="Show user menu"
            variant="link"
            size="icon"
            onClick={() => setDropDownVisible(true)}
          >
            <UserIcon className="h-6 w-6 rounded-full fill-gray-600 dark:fill-gray-100" />
          </Button>
        </Dialog.Trigger>
      </DynamicTooltip>
      <Dialog.Portal>
        <Dialog.Overlay className={SIDE_OVERLAY_CLS} />
        <Dialog.Content
          className={MENU_CLS}
          onEscapeKeyDown={() => setDropDownVisible(false)}
          onPointerDownOutside={() => setDropDownVisible(false)}
        >
          <VCenterRow className="h-16 justify-end">
            <Dialog.Close asChild>
              <SideMenuButton showMenu={dropDownVisible} />
            </Dialog.Close>
          </VCenterRow>

          <VCenterCol className="gap-y-8">
            <ul
              className="flex flex-col gap-y-1 text-sm"
              onClick={e => e.stopPropagation()}
            >
              <li className="inline-block w-full whitespace-nowrap px-1 pb-2 font-semibold">
                {name}
              </li>
              <li>
                <MenuButtonLink href="/profile" aria-label="Profile Settings">
                  <GearIcon className="fill-gray-400" />
                  Profile Settings
                </MenuButtonLink>
              </li>

              <li>
                <MenuButtonLink href="/members" aria-label="Profile Settings">
                  <GroupIcon className="fill-gray-400" />
                  Group Settings
                </MenuButtonLink>
              </li>
            </ul>

            <SecondaryButtonLink
              href="/signout"
              aria-label="Sign Out"
              className="w-full"
            >
              Sign Out
            </SecondaryButtonLink>

            <span className="border-border border-t" />

            <BaseRow>
              <BlueArrowLink
                href="/help"
                aria-label="Profile Settings"
                className="font-semibold"
              >
                Help
              </BlueArrowLink>
            </BaseRow>
          </VCenterCol>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
