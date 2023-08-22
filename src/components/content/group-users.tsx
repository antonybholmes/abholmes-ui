import CheckBox from "@components/button/check-box"
import PrimaryButton from "@components/button/primary-button"
import type IBoolMap from "@interfaces/bool-map"
import { makeAuthBearerHeader } from "@lib/auth"
import cn from "@lib/class-names"
import { ISessionUser, IUserDBItem } from "@lib/types"

import { fetchPostJsonArray } from "@lib/url"
import { uuidFromBase64 } from "@lib/utils"
import { useEffect, useState } from "react"
import { DELETE_TEXT, GROUP_MEMBERS_URL } from "src/consts"

interface IProps {
  session: ISessionUser
  baseUrl?: string
}

const TD_CLS = "p-3"

export default function GroupUsers({
  session,
  baseUrl = GROUP_MEMBERS_URL,
}: IProps) {
  const [users, setUsers] = useState<IUserDBItem[]>([])
  const [selected, setSelected] = useState<IBoolMap>({})

  async function fetch() {
    try {
      const config = makeAuthBearerHeader(session)

      const data = await fetchPostJsonArray(baseUrl, {}, config)

      setUsers(data)
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    fetch()
  }, [])

  useEffect(() => {
    setSelected(
      Object.fromEntries(users.map((order, oi) => [oi.toString(), false])),
    )
  }, [users])

  return (
    <table className="w-full">
      <thead>
        <tr>
          <th></th>
          <th>User Id</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody className="border bg-white">
        {users.map((row, ri) => (
          <tr key={ri} className={cn([ri % 2 == 1, "bg-gray-50"])}>
            <td className={TD_CLS}>
              <CheckBox
                aria-label={`Remove ${row.firstName} ${row.lastName}`}
                isSelected={selected[ri]}
                onCheckClick={() =>
                  setSelected({
                    ...selected,
                    [ri.toString()]: !selected[ri.toString()],
                  })
                }
              />
            </td>
            <td className={TD_CLS}>{uuidFromBase64(row.uuid64)}</td>
            <td className={TD_CLS}>{row.firstName}</td>
            <td className={TD_CLS}>{row.lastName}</td>
            <td className={TD_CLS}>{row.email}</td>
            <td className={TD_CLS}>
              <form method="post">
                <input
                  type="hidden"
                  id="action"
                  name="action"
                  value="remove-order"
                />
                <input
                  type="hidden"
                  id="order-id"
                  name="order-id"
                  value={row.uuid64}
                />
                <PrimaryButton
                  aria-label={`Remove ${row.firstName} ${row.lastName}`}
                >
                  {DELETE_TEXT}
                </PrimaryButton>
              </form>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
