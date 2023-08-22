"use client"

import BaseCol from "@components/base-col"
import PrimaryButton from "@components/button/primary-button"
import Toolbar from "@components/toolbar/toolbar"
import IQueryStatus from "@interfaces/query-status"
import { fetchPostJsonQueryStatus } from "@lib/url"
import { FormEvent, useState } from "react"
import {
  APP_NAME,
  BASE_FORM_CLS,
  CENTER_CONTENT_CLS,
  FORM_BLOCK_CLS,
  FORM_CLS,
  FORM_DIV_CLS,
  INPUT_CLS,
  INPUT_LABEL_CLS,
  SEND_RESET_PASSWORD_URL,
} from "src/consts"

export default function SendPasswordResetPage() {
  const [email, setEmail] = useState("")
  const [alert, setAlert] = useState<IQueryStatus | null>(null)

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // 👇 encode the data to application/x-www-form-urlencoded type

    const body = { email }

    const status = await fetchPostJsonQueryStatus(
      SEND_RESET_PASSWORD_URL,
      body,
      {},
    )

    setAlert(status)
  }

  return (
    <main className="flex h-screen flex-col">
      <Toolbar tab="Password Reset" alert={alert} />
      <div className={CENTER_CONTENT_CLS}>
        <BaseCol className={FORM_CLS}>
          <div>
            <h1 className="text-lg font-bold">Forgot your password?</h1>
            <p>
              {`Enter the email address you used to create your ${APP_NAME} account. We'll send you an email with instructions to reset your password.`}
            </p>
          </div>

          <form method="post" className={BASE_FORM_CLS} onSubmit={onSubmit}>
            <div className={FORM_DIV_CLS}>
              <div className={FORM_BLOCK_CLS}>
                <label htmlFor="email" className={INPUT_LABEL_CLS}>
                  Email:
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  className={INPUT_CLS}
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div>
              <PrimaryButton aria-label="Invite">
                Send Password Reset
              </PrimaryButton>
            </div>
          </form>
        </BaseCol>
      </div>
    </main>
  )
}
