"use client"

import { CENTER_CONTENT_CLS, LOGIN_ROUTE } from "@/consts"
import Toolbar from "@components/toolbar/toolbar"
import IQueryStatus from "@interfaces/query-status"

import BlueArrowLink from "@components/link/blue-index-link"
import { ISessionUser } from "@lib/types"
import { fetchPostJson } from "@lib/url"
import { useEffect, useState } from "react"

interface IProps {
  session: ISessionUser
}

export default function SignoutPage({ session }: IProps) {
  const [alert, setAlert] = useState<IQueryStatus | null>(null)

  async function signout() {
    // 👇 call backend endpoint using fetch API
    const data = await fetchPostJson("/api/signout")

    setAlert(data)
  }

  useEffect(() => {
    signout()
  }, [])

  return (
    <main className="flex grow flex-col">
      <Toolbar tab="Signout" alert={alert} session={session} />

      <div className={CENTER_CONTENT_CLS}>
        <BlueArrowLink href={LOGIN_ROUTE} aria-label="Login">
          Login back in
        </BlueArrowLink>
      </div>
    </main>
  )
}
