"use client"

import PrimaryButton from "@components/button/primary-button"
import CatalogAutocomplete from "@components/content/catalog-autocomplete"
import VendorAutocomplete from "@components/content/vendor-autocomplete"
import InputDropdown from "@components/input-dropdown"
import Toolbar from "@components/toolbar/toolbar"

import VCenterRow from "@components/v-center-row"
import type IClassProps from "@interfaces/class-props"
import IQueryStatus from "@interfaces/query-status"
import { makeAuthBearerHeader } from "@lib/auth"
import cn from "@lib/class-names"
import {
  IDBItem,
  IInventoryDBItem,
  IProductDBItem,
  ISessionUser,
} from "@lib/types"
import { fetchPostJsonQueryStatus } from "@lib/url"
import { redirect } from "next/navigation"
import { FormEvent, useEffect, useMemo, useRef, useState } from "react"
import {
  ADD_ORDER_URL,
  CENTER_CONTENT_CLS,
  FORM_BLOCK_CLS,
  FORM_CLS,
  FORM_DIV_CLS,
  INPUT_CLS,
  INPUT_LABEL_CLS,
  ORDERS_ROUTE,
  ORDER_ITEM_TEXT,
  STATUS_SUCCESS,
} from "src/consts"

interface IProps extends IClassProps {
  session: ISessionUser
  vendors: IDBItem[]
  inventoryTypes: IDBItem[]
  items: IInventoryDBItem[]
}

export default function OrderPage({
  session,
  inventoryTypes,
  vendors,
  items,
  className,
}: IProps) {
  const [name, setName] = useState<string>("")
  const [url, setURL] = useState<string>("")
  const [catalog, setCatalog] = useState<string>("")
  const [unit, setUnit] = useState<string>("")
  const [vendor, setVendor] = useState<string>("")
  const [quantity, setQuantity] = useState<number>(1)
  const [price, setPrice] = useState<number>(0)
  const [type, setType] = useState("")
  const [alert, setAlert] = useState<IQueryStatus | null>(null)

  const nameRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (items.length > 0) {
      setName(items[0].name)
      setVendor(items[0].vendor)
      setCatalog(items[0].catalog)
      setURL(items[0].url)
      setPrice(items[0].price)
      setType(items[0].type)
    }
  }, [items])

  const total = useMemo(() => quantity * price, [quantity, price])

  function onVendorChange(text: string) {
    setVendor(text)
  }

  function onTypeClick(
    index: number,
    id: string | number,
    label: string,
    item: IDBItem,
  ) {
    setType(label)
  }

  function onCatalogClick(
    index: number,
    id: string | number,
    label: string,
    item: IProductDBItem,
  ) {
    //const product = item as IProductDBItem

    setName(item.name)
    setURL(item.url)
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // 👇 encode the data to application/x-www-form-urlencoded type

    // const formData = new FormData()
    // formData.append("name", name)
    // formData.append("vendor", vendor)
    // formData.append("catalog", catalog)
    // formData.append("unit", unit)
    // formData.append("quantity", quantity.toString())
    // formData.append("price", price.toString())
    // formData.append("type", type)
    // formData.append("url", url)
    // formData.append("session", JSON.stringify(session))

    // 👇 call backend endpoint using fetch API
    // const status: IQueryStatus = await fetchPostFormJson(
    //   "/api/orders/add",
    //   formData,
    // )

    const config = makeAuthBearerHeader(session)

    const body = { vendor, name, catalog, url, unit, quantity, price, type }

    const status = await fetchPostJsonQueryStatus(ADD_ORDER_URL, body, config)

    setAlert(status)
  }

  if (alert?.status === STATUS_SUCCESS) {
    redirect(ORDERS_ROUTE)
  }

  return (
    <>
      <Toolbar session={session} tab="Order" alert={alert} />
      <main className={CENTER_CONTENT_CLS}>
        <form
          method="post"
          className={cn(FORM_CLS, className)}
          onSubmit={onSubmit}
        >
          <h1 className="text-lg font-bold">Add your order</h1>
          <div className={FORM_DIV_CLS}>
            <div className="grid w-full grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-2">
              <div className={FORM_BLOCK_CLS}>
                <label htmlFor="vendor" className={INPUT_LABEL_CLS}>
                  Vendor:
                </label>
                <VendorAutocomplete
                  vendors={vendors}
                  onChange={onVendorChange}
                  className={INPUT_CLS}
                  value={vendor}
                />
              </div>
              <div className={FORM_BLOCK_CLS}>
                <label htmlFor="catalog" className={INPUT_LABEL_CLS}>
                  Catalog:
                </label>
                <CatalogAutocomplete
                  session={session}
                  value={catalog}
                  className={INPUT_CLS}
                  onDropClick={onCatalogClick}
                />
              </div>
            </div>

            <div className={FORM_BLOCK_CLS}>
              <label htmlFor="name" className={INPUT_LABEL_CLS}>
                Name:
              </label>
              <input
                ref={nameRef}
                id="name"
                type="text"
                name="name"
                value={name}
                className={INPUT_CLS}
                onChange={e => setName(e.target.value)}
              />
            </div>

            <div className={FORM_BLOCK_CLS}>
              <label htmlFor="url" className={INPUT_LABEL_CLS}>
                URL:
              </label>
              <input
                id="url"
                type="text"
                name="url"
                value={url}
                className={INPUT_CLS}
                onChange={e => setURL(e.target.value)}
              />
            </div>

            <div className="grid w-full grid-cols-1 items-center gap-x-8 gap-y-4 md:grid-cols-4">
              <div className={FORM_BLOCK_CLS}>
                <label htmlFor="unit" className={INPUT_LABEL_CLS}>
                  Unit:
                </label>
                <input
                  id="unit"
                  type="text"
                  name="unit"
                  value={unit}
                  onChange={e => setUnit(e.target.value)}
                  className={INPUT_CLS}
                />
              </div>

              <div className={FORM_BLOCK_CLS}>
                <label htmlFor="quantity" className={INPUT_LABEL_CLS}>
                  Quantity:
                </label>
                <input
                  id="quantity"
                  type="text"
                  name="quantity"
                  value={quantity}
                  className={INPUT_CLS}
                  onChange={e => setQuantity(parseFloat(e.target.value))}
                />
              </div>

              <div className={FORM_BLOCK_CLS}>
                <label htmlFor="price" className={INPUT_LABEL_CLS}>
                  Price:
                </label>
                <input
                  id="price"
                  type="text"
                  name="price"
                  value={price}
                  className={INPUT_CLS}
                  onChange={e => setPrice(parseFloat(e.target.value))}
                />
              </div>

              <div className={FORM_BLOCK_CLS}>
                <div className={FORM_BLOCK_CLS}>
                  <p className={INPUT_LABEL_CLS}>Total:</p>
                  <p>
                    <strong>${total}</strong>
                  </p>
                </div>
              </div>
            </div>

            <div className={FORM_BLOCK_CLS}>
              <label htmlFor="type" className={INPUT_LABEL_CLS}>
                Type:
              </label>
              <VCenterRow>
                <InputDropdown
                  id="type"
                  name="type"
                  value={type}
                  items={inventoryTypes}
                  className={cn(INPUT_CLS, "w-44")}
                  menuClassName="w-44"
                  onDropClick={onTypeClick}
                />
              </VCenterRow>
            </div>
          </div>
          <div>
            <PrimaryButton aria-label={ORDER_ITEM_TEXT}>
              {ORDER_ITEM_TEXT}
            </PrimaryButton>
          </div>
        </form>
      </main>
    </>
  )
}
