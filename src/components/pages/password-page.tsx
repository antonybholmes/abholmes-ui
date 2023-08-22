"use client"

import {
  BASE_FORM_CLS,
  CENTER_CONTENT_CLS,
  FORM_BLOCK_CLS,
  FORM_CLS,
  FORM_DIV_CLS,
  INPUT_CLS,
  INPUT_LABEL_CLS,
} from "@/consts"
import BaseCol from "@components/base-col"
import PrimaryButton from "@components/button/primary-button"
import BaseLink from "@components/link/base-link"
import Toolbar from "@components/toolbar/toolbar"
import IQueryStatus from "@interfaces/query-status"
import { ISessionUser } from "@lib/types"
import { fetchPostFormJson } from "@lib/url"
import { FormEvent, useState } from "react"

interface IProps {
  session: ISessionUser
}

export default function PasswordPage({ session }: IProps) {
  const [currentPassword, setCurrentPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [retypePassword, setRetypePassword] = useState("")
  const [alert, setAlert] = useState<IQueryStatus | null>(null)

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // 👇 encode the data to application/x-www-form-urlencoded type

    const formData = new FormData()
    formData.append("currentPassword", currentPassword)
    formData.append("newPassword", newPassword)
    formData.append("retypePassword", retypePassword)
    formData.append("session", JSON.stringify(session))

    // 👇 call backend endpoint using fetch API
    const status: IQueryStatus = await fetchPostFormJson(
      "/api/profile/password/update",
      formData,
    )

    setAlert(status)
  }

  return (
    <main className="flex h-screen flex-col">
      <Toolbar session={session} tab="Profile" alert={alert} />

      <div className={CENTER_CONTENT_CLS}>
        <BaseCol className={FORM_CLS}>
          <ul className="flex flex-row justify-center gap-x-1 text-sm font-semibold">
            <li>
              <BaseLink
                aria-label="Profile"
                href="/profile"
                className="block border-b-2 border-transparent px-3 py-2"
              >
                Profile
              </BaseLink>
            </li>
            <li>
              <BaseLink
                aria-label="Profile"
                href="/profile/password"
                className="border-theme-500 text-theme-500 block border-b-2  px-3 py-2"
              >
                Password
              </BaseLink>
            </li>
          </ul>
          <form method="post" className={BASE_FORM_CLS} onSubmit={onSubmit}>
            <div className={FORM_DIV_CLS}>
              <div className={FORM_BLOCK_CLS}>
                <label htmlFor="currentPassword" className={INPUT_LABEL_CLS}>
                  Current Password:
                </label>
                <input
                  id="currentPassword"
                  name="currentPassword"
                  type="password"
                  minLength={4}
                  required
                  value={currentPassword}
                  onChange={e => setCurrentPassword(e.target.value)}
                  className={INPUT_CLS}
                />
              </div>
              <div className={FORM_BLOCK_CLS}>
                <label htmlFor="newPassword" className={INPUT_LABEL_CLS}>
                  New Password:
                </label>
                <input
                  id="newPassword"
                  name="newPassword"
                  type="password"
                  minLength={4}
                  required
                  value={newPassword}
                  onChange={e => setNewPassword(e.target.value)}
                  className={INPUT_CLS}
                />
              </div>
              <div className={FORM_BLOCK_CLS}>
                <label htmlFor="retypePassword" className={INPUT_LABEL_CLS}>
                  Retype New Password:
                </label>
                <input
                  id="retypePassword"
                  type="password"
                  name="retypePassword"
                  value={retypePassword}
                  minLength={4}
                  required
                  onChange={e => setRetypePassword(e.target.value)}
                  className={INPUT_CLS}
                />
              </div>
            </div>

            <div>
              <PrimaryButton aria-label="Save Changes">
                Save Changes
              </PrimaryButton>
            </div>
          </form>
        </BaseCol>
      </div>
    </main>
  )
}
