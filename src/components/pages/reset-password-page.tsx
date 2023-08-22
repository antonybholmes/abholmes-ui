"use client"

import BaseCol from "@components/base-col"
import PrimaryButton from "@components/button/primary-button"
import Toolbar from "@components/toolbar/toolbar"
import type IClassProps from "@interfaces/class-props"
import IQueryStatus from "@interfaces/query-status"
import { makeBaseAuthBearerHeader } from "@lib/auth"
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
  RESET_PASSWORD_URL,
  STATUS_FAIL,
  STATUS_SUCCESS,
} from "src/consts"

interface IProps extends IClassProps {
  token: string
  email: string
}

export default function ResetPasswordPage({ token, email }: IProps) {
  const [password, setPassword] = useState("")
  const [retypePassword, setRetypePassword] = useState("")
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

    if (password === retypePassword) {
      const config = makeBaseAuthBearerHeader(token)

      const body = { token, email, password }

      const status = await fetchPostJsonQueryStatus(
        RESET_PASSWORD_URL,
        body,
        config,
      )

      if (status.status === STATUS_SUCCESS) {
        setAlert(status)
      } else {
        setAlert({
          message:
            "There was an error updating your account. Please contact your group admin.",
          status: STATUS_FAIL,
        })
      }
    } else {
      setAlert({ message: "Passwords do not match.", status: STATUS_FAIL })
    }
  }

  return (
    <main className="flex h-screen flex-col">
      <Toolbar tab="Password Reset" alert={alert} />
      <div className={CENTER_CONTENT_CLS}>
        <BaseCol className={FORM_CLS}>
          <div>
            <h1 className="text-lg font-bold">Reset your password</h1>
            <p>
              {`Enter a new password for your ${APP_NAME} account. This link will only work once.`}
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
                  readOnly
                />
              </div>

              <div className={FORM_BLOCK_CLS}>
                <label htmlFor="password" className={INPUT_LABEL_CLS}>
                  Password:
                </label>
                <input
                  id="password"
                  type="password"
                  name="password"
                  className={INPUT_CLS}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
              </div>

              <div className={FORM_BLOCK_CLS}>
                <label htmlFor="retypePassword" className={INPUT_LABEL_CLS}>
                  Retype Password:
                </label>
                <input
                  id="retypePassword"
                  type="password"
                  name="retypePassword"
                  className={INPUT_CLS}
                  value={retypePassword}
                  onChange={e => setRetypePassword(e.target.value)}
                />
              </div>
            </div>

            <div>
              <PrimaryButton aria-label="Invite">Reset Password</PrimaryButton>
            </div>
          </form>
        </BaseCol>
      </div>
    </main>
  )
}
