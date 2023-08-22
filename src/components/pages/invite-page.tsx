"use client"

import BaseCol from "@components/base-col"
import PrimaryButton from "@components/button/primary-button"
import Toolbar from "@components/toolbar/toolbar"
import type IClassProps from "@interfaces/class-props"
import IQueryStatus from "@interfaces/query-status"
import { makeAuthBearerHeader } from "@lib/auth"
import { ISessionUser } from "@lib/types"

import { fetchPostJsonArray } from "@lib/url"
import { FormEvent, useState } from "react"
import {
  BASE_FORM_CLS,
  CENTER_CONTENT_CLS,
  FORM_CLS,
  FORM_DIV_CLS,
  INPUT_CLS,
  INPUT_LABEL_CLS,
  INVITE_USER_URL,
} from "src/consts"

interface IProps extends IClassProps {
  session: ISessionUser
}

export default function InvitePage({ session }: IProps) {
  const [email, setEmail] = useState("")
  const [alert, setAlert] = useState<IQueryStatus | null>(null)

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // 👇 encode the data to application/x-www-form-urlencoded type

    // const name = getFormValue(data, "name")
    // const vendor = getFormValue(data, "vendor")
    // const catalog = getFormValue(data, "catalog")
    // const url = getFormValue(data, "url")
    // const unit = getFormValue(data, "unit")
    // const quantity = getFormValue(data, "quantity")
    // const price = getFormValue(data, "price")
    // const type = getFormValue(data, "type")

    const config = makeAuthBearerHeader(session)

    let alert = {
      message: `There was an issue sending invites.`,
      success: false,
    }

    const emails = email.split(",").map((e: string) => e.trim())

    for (const e of emails) {
      const body = { email: e }

      const data = await fetchPostJsonArray(INVITE_USER_URL, body, config)

      if (data.length > 0 && data[0].success) {
        alert = {
          message: `The invitations were sent.`,
          success: true,
        }
      }
    }
  }

  return (
    <main className="flex h-screen flex-col">
      <Toolbar tab="Password Reset" session={session} alert={alert} />
      <div className={CENTER_CONTENT_CLS}>
        <BaseCol className={FORM_CLS}>
          <div>
            <h1 className="text-lg font-bold">Invite members</h1>
            <p>
              {`Enter a comma separated list of people you want to invite to the group.`}
            </p>
          </div>

          <form method="post" className={BASE_FORM_CLS} onSubmit={onSubmit}>
            <div className={FORM_DIV_CLS}>
              <div className="flex flex-col gap-y-2">
                <label htmlFor="email" className={INPUT_LABEL_CLS}>
                  Email:
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  aria-label="Email"
                  value={email}
                  className={INPUT_CLS}
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div>
              <PrimaryButton aria-label="Invite">Invite</PrimaryButton>
            </div>
          </form>
        </BaseCol>
      </div>
    </main>
  )
}
