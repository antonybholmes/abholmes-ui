import type IClassProps from "@interfaces/class-props"

import BaseLink from "@components/link/base-link"
import BlueLink from "@components/link/blue-link"
import VCenterRow from "@components/v-center-row"
import cn from "@lib/class-names"

import type { ISessionUser } from "@/lib/types"
import type IQueryStatus from "@interfaces/query-status"

import Alert from "@components/alerts/alert"
import {
  BASE_BUTTON_CLS,
  CENTERED_BUTTON_CLS,
  FOCUS_RING_CLS,
  INPUT_BORDER_CLS,
  INPUT_DARK_BORDER_CLS,
} from "@theme"
import { ReactElement } from "react"
import { LOGIN_ROUTE, TOOLBAR_MENU_ITEMS } from "src/consts"
import BaseCol from "../base-col"
import Logo from "../logo"
import { DynamicSideMenu } from "./dynamic-side-menu"
import { DynamicThemeMenu } from "./dynamic-theme-menu"
import { DynamicUserMenu } from "./dynamic-user-menu"

const TOOLBAR_BUTTON_CLS = cn(
  BASE_BUTTON_CLS,
  CENTERED_BUTTON_CLS,
  FOCUS_RING_CLS,
  "p-2",
)

interface IProps extends IClassProps {
  session?: ISessionUser
  tab?: string
  showAlert?: boolean
  middle?: ReactElement
  small?: ReactElement
  alert?: IQueryStatus | null
}

export default function Toolbar({
  session,
  tab = "",
  showAlert = true,
  middle,
  small,
  className,
  alert,
}: IProps) {
  return (
    <BaseCol>
      <nav
        className={cn(
          "grid h-16 grid-cols-2 items-center border-b  px-4 lg:grid-cols-3",
          INPUT_BORDER_CLS,
          INPUT_DARK_BORDER_CLS,
        )}
      >
        <VCenterRow className={cn("h-full w-full gap-x-2 ")}>
          {/* {group && user && (
          <BlueButtonLink
            aria-label="Request Item"
            href={ORDERS_ROUTE}
            className={cn(
              CENTERED_BUTTON_CLS,
              "fill-white w-12 h-12 shrink-0",
              [showSearch, "block", "block xl:hidden"]
            )}
          >
            <Logo className="fill-white" />
          </BlueButtonLink>
        )} */}

          <DynamicSideMenu />

          <Logo />

          {session?.group && session?.user && (
            <ul
              className={cn(
                "hidden h-full grow flex-row items-center gap-x-2 pl-4 text-xs font-semibold md:flex",
              )}
            >
              {TOOLBAR_MENU_ITEMS.map(
                (menu: { name: string; url: string }, mi: number) => (
                  <li key={mi}>
                    <BaseLink
                      href={menu.url}
                      aria-label={menu.name}
                      className={cn(TOOLBAR_BUTTON_CLS, [
                        menu.name === tab,
                        "text-sky-500",
                        "hover:text-sky-400",
                      ])}
                    >
                      {menu.name}
                    </BaseLink>
                  </li>
                ),
              )}
            </ul>
          )}
        </VCenterRow>
        <div className="hidden lg:block">{middle}</div>

        <VCenterRow className="justify-end gap-x-4 text-xs">
          <DynamicThemeMenu />

          {/* <ToolbarHelp /> */}

          {/* {session?.group && <ToolbarGroup session={session} />} */}

          {session?.user ? (
            <DynamicUserMenu session={session} />
          ) : (
            <BlueLink
              href={LOGIN_ROUTE}
              aria-label="Login"
              className="text-sm font-bold"
              underline={false}
            >
              Login
            </BlueLink>
          )}
        </VCenterRow>
      </nav>

      {showAlert && alert?.message && <Alert alert={alert} />}

      <div className="block p-4 lg:hidden">{small}</div>
    </BaseCol>
  )
}
