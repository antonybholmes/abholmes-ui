"use client"

import {
  BASE_FORM_CLS,
  CENTER_CONTENT_CLS,
  FORM_BLOCK_CLS,
  FORM_CLS,
  FORM_DIV_CLS,
  INPUT_CLS,
  INPUT_LABEL_CLS,
  JOIN_URL,
  STATUS_FAIL,
  STATUS_SUCCESS,
} from "@/consts"
import BaseCol from "@components/base-col"
import PrimaryButton from "@components/button/primary-button"
import Toolbar from "@components/toolbar/toolbar"
import IClassProps from "@interfaces/class-props"
import IQueryStatus from "@interfaces/query-status"
import { makeBaseAuthBearerHeader } from "@lib/auth"
import { fetchPostJsonQueryStatus } from "@lib/url"
import { FormEvent, useState } from "react"

interface IProps extends IClassProps {
  token: string
  email: string
}

export default function JoinPage({ token, email }: IProps) {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")

  const [password, setPassword] = useState("")
  const [retypePassword, setRetypePassword] = useState("")

  const [alert, setAlert] = useState<IQueryStatus | null>(null)

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (password === retypePassword) {
      const config = makeBaseAuthBearerHeader(token)

      const body = { token, firstName, lastName, email, password }

      const status = await fetchPostJsonQueryStatus(JOIN_URL, body, config)

      if (status.status === STATUS_SUCCESS) {
        setAlert({
          message: "Account created successfully. You can now login.",
          status: STATUS_SUCCESS,
        })
        //return Astro.redirect(LOGIN_ROUTE)
      } else {
        setAlert({
          message:
            "There was an error creating your account. Please contact your group admin.",
          status: STATUS_FAIL,
        })
      }
    } else {
      setAlert({ message: "Your passwords do not match.", status: STATUS_FAIL })
    }
  }

  return (
    <main className="flex h-screen flex-col">
      <Toolbar tab="Join" alert={alert} />

      <div className={CENTER_CONTENT_CLS}>
        <BaseCol className={FORM_CLS}>
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
                  readOnly
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
                  value={password}
                  onChange={e => setPassword(e.target.value)}
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
