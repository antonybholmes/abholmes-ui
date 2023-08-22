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
import InputDropdown from "@components/input-dropdown"
import BaseLink from "@components/link/base-link"
import Toolbar from "@components/toolbar/toolbar"
import IQueryStatus from "@interfaces/query-status"
import cn from "@lib/class-names"
import { IDBItem, ISessionUser } from "@lib/types"

import { fetchPostFormJson } from "@lib/url"
import { FormEvent, useState } from "react"

interface IProps {
  session: ISessionUser
  positions: IDBItem[]
}

export default function ProfilePage({ session, positions }: IProps) {
  const [firstName, setFirstName] = useState(session.user?.firstName ?? "")
  const [lastName, setLastName] = useState(session.user?.lastName ?? "")
  const [email, setEmail] = useState(session.user?.email ?? "")
  const [position, setPosition] = useState(session.user?.position ?? "")
  const [alert, setAlert] = useState<IQueryStatus | null>(null)

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // 👇 encode the data to application/x-www-form-urlencoded type

    const formData = new FormData()
    formData.append("firstName", firstName)
    formData.append("lastName", lastName)
    formData.append("email", email)
    formData.append("position", position)
    formData.append("session", JSON.stringify(session))

    // 👇 call backend endpoint using fetch API
    const status = await fetchPostFormJson("/api/profile/update", formData)

    setAlert(status)
  }

  function onPositionClick(
    index: number,
    id: string | number,
    label: string,
    item: IDBItem,
  ) {
    setPosition(item.name)
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
                className="border-theme-500 text-theme-500 block border-b-2 px-3 py-2"
              >
                Profile
              </BaseLink>
            </li>
            <li>
              <BaseLink
                aria-label="Profile"
                href="/profile/password"
                className="block border-b-2 border-transparent px-3 py-2"
              >
                Password
              </BaseLink>
            </li>
          </ul>
          <form method="post" className={BASE_FORM_CLS} onSubmit={onSubmit}>
            <div className={FORM_DIV_CLS}>
              <div className={FORM_BLOCK_CLS}>
                <label htmlFor="firstName" className={INPUT_LABEL_CLS}>
                  First name:
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  value={firstName}
                  onChange={e => setFirstName(e.target.value)}
                  className={INPUT_CLS}
                />
              </div>
              <div className={FORM_BLOCK_CLS}>
                <label htmlFor="lastName" className={INPUT_LABEL_CLS}>
                  Last name:
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  value={lastName}
                  onChange={e => setLastName(e.target.value)}
                  className={INPUT_CLS}
                />
              </div>
              <div className={FORM_BLOCK_CLS}>
                <label htmlFor="email" className={INPUT_LABEL_CLS}>
                  Email:
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className={INPUT_CLS}
                />
              </div>

              <div className={FORM_BLOCK_CLS}>
                <label htmlFor="position" className={INPUT_LABEL_CLS}>
                  Position:
                </label>

                <InputDropdown
                  id="position"
                  name="position"
                  items={positions}
                  value={position}
                  onDropClick={onPositionClick}
                  className={cn(INPUT_CLS, "w-full lg:w-1/2 xl:w-1/3")}
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
