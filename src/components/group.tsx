import BaseLink from "@components/link/base-link"
import VCenterRow from "@components/v-center-row"
import GearIcon from "@icons/gear"
import { ISessionUser } from "@lib/types"

interface IProps {
  session: ISessionUser
}

export default function Groups({ session }: IProps) {
  return (
    <VCenterRow className="gap-x-4">
      {/* <Logo /> */}
      <VCenterRow className="w-full justify-between gap-x-4">
        <p className="truncate text-sm font-semibold text-gray-600 dark:text-white">
          {session.group ? session.group.name : ""}
        </p>

        {session.user?.isAdmin && (
          <BaseLink href="/members" aria-label="Manage group">
            <GearIcon className="trans-300 transition-color  fill-gray-500/50 hover:fill-gray-500 dark:fill-white/50 dark:hover:fill-white" />
          </BaseLink>
        )}
      </VCenterRow>
    </VCenterRow>
  )
}
