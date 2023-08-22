import type { ISessionUser } from "@/lib/types"
import PillButtonLink from "@components/link/pill-button-link"
import cn from "@lib/class-names"

interface IProps {
  session: ISessionUser
}

export default function ToolbarGroup({ session }: IProps) {
  const name = session.group ? session.group.name : ""
  return (
    <PillButtonLink
      href="/members"
      aria-label="Manage group"
      className={cn(
        "hidden flex-row whitespace-nowrap bg-gray-600 px-3 py-1 font-semibold text-white hover:bg-gray-500 lg:flex",
      )}
    >
      {name}
    </PillButtonLink>
  )
}
