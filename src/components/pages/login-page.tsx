"use client"

import {
  BASE_FORM_CLS,
  CENTER_CONTENT_CLS,
  FORM_BLOCK_CLS,
  FORM_CLS,
  FORM_DIV_CLS,
  INPUT_CLS,
  INPUT_LABEL_CLS,
  ORDERS_ROUTE,
  SEND_PASSWORD_RESET_ROUTE,
  STATUS_SUCCESS,
} from "@/consts"
import BaseCol from "@components/base-col"
import PrimaryButton from "@components/button/primary-button"
import BlueLink from "@components/link/blue-link"
import Toolbar from "@components/toolbar/toolbar"
import VCenterRow from "@components/v-center-row"
import IQueryStatus from "@interfaces/query-status"
import { ISessionUser } from "@lib/types"

import { fetchPostFormJson } from "@lib/url"
import { redirect } from "next/navigation"
import { FormEvent, useState } from "react"

interface IProps {
  session: ISessionUser
}

export default function LoginPage({ session }: IProps) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [alert, setAlert] = useState<IQueryStatus | null>(null)

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // encode the data to application/x-www-form-urlencoded type
    const formData = new FormData()
    formData.append("email", email)
    formData.append("password", password)

    // call backend endpoint using fetch API
    const status: IQueryStatus = await fetchPostFormJson("/api/login", formData)

    setAlert(status)
  }

  if (alert && alert?.status === STATUS_SUCCESS) {
    redirect(ORDERS_ROUTE)
  }

  return (
    <main className="flex grow flex-col">
      <Toolbar tab="Join" alert={alert} session={session} />

      <div className={CENTER_CONTENT_CLS}>
        <BaseCol className={FORM_CLS}>
          <form className={BASE_FORM_CLS} onSubmit={onSubmit}>
            <div className={FORM_DIV_CLS}>
              <div className={FORM_BLOCK_CLS}>
                <label htmlFor="email" className={INPUT_LABEL_CLS}>
                  Email:
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  className={INPUT_CLS}
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className={FORM_BLOCK_CLS}>
                <label htmlFor="password" className={INPUT_LABEL_CLS}>
                  Password:
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  className={INPUT_CLS}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                  minLength={4}
                />
              </div>
            </div>
            <VCenterRow className="justify-between">
              <PrimaryButton type="submit" aria-label="Login">
                Login
              </PrimaryButton>

              <BlueLink
                href={SEND_PASSWORD_RESET_ROUTE}
                aria-label="Login"
                className="text-sm font-bold"
              >
                Forgot Password?
              </BlueLink>
            </VCenterRow>
          </form>
        </BaseCol>
      </div>
    </main>
  )
}
