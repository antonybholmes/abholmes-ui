"use client"

import PrimaryButton from "@components/button/primary-button"
import CatalogAutocomplete from "@components/content/catalog-autocomplete"
import VendorAutocomplete from "@components/content/vendor-autocomplete"
import Toolbar from "@components/toolbar/toolbar"
import type IClassProps from "@interfaces/class-props"
import type IQueryStatus from "@interfaces/query-status"
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
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react"
import {
  ADD_PRODUCT_URL,
  CENTER_CONTENT_CLS,
  FORM_BLOCK_CLS,
  FORM_CLS,
  FORM_DIV_CLS,
  INPUT_CLS,
  INPUT_LABEL_CLS,
  INVENTORY_ROUTE,
  STATUS_SUCCESS,
} from "src/consts"

interface IProps extends IClassProps {
  session: ISessionUser
  items: IInventoryDBItem[]
  inventoryTypes: IDBItem[]
  vendors: IDBItem[]
}

export default function AddProductPage({
  session,
  items,
  inventoryTypes,
  vendors,
  className,
}: IProps) {
  const [name, setName] = useState<string>("")
  const [catalog, setCatalog] = useState<string>("")
  const [vendor, setVendor] = useState<string>("")
  const [unit, setUnit] = useState<string>("")
  //const [quantity, setQuantity] = useState(1)
  const [price, setPrice] = useState(0)
  const [url, setURL] = useState<string>("")

  const [alert, setAlert] = useState<IQueryStatus | null>(null)

  const nameRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (items.length > 0) {
      setName(items[0].name)
      setVendor(items[0].vendor)
      setCatalog(items[0].catalog)
      setUnit(items[0].unit)
      setURL(items[0].url)
      setPrice(items[0].price)
    }
  }, [items])

  function onChange(text: string) {
    setVendor(text)
  }

  function onNameChange(e: ChangeEvent<HTMLInputElement>) {
    setName((e.target as HTMLInputElement).value)
  }

  function onURLChange(e: ChangeEvent<HTMLInputElement>) {
    setURL((e.target as HTMLInputElement).value)
  }

  // function onQuantityChange(e: ChangeEvent<HTMLInputElement>) {
  //   try {
  //     setQuantity(parseInt((e.target as HTMLInputElement).value))
  //   } catch (error) {
  //     setQuantity(1)
  //   }
  // }

  function onPriceChange(e: ChangeEvent<HTMLInputElement>) {
    try {
      setPrice(parseFloat((e.target as HTMLInputElement).value))
    } catch (error) {
      setPrice(0)
    }
  }

  function onCatalogClick(
    index: number,
    id: string | number,
    label: string,
    item: IProductDBItem,
  ) {
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

    const body = { vendor, name, catalog, unit, price, url }

    const alert = await fetchPostJsonQueryStatus(ADD_PRODUCT_URL, body, config)

    setAlert(alert)
  }

  if (alert && alert.status === STATUS_SUCCESS) {
    redirect(INVENTORY_ROUTE)
  }

  return (
    <>
      <Toolbar session={session} tab="Add Product" alert={alert} />

      <div className={CENTER_CONTENT_CLS}>
        <form
          method="post"
          className={cn(FORM_CLS, className)}
          onSubmit={onSubmit}
        >
          <h1 className="text-lg font-bold">Add Product</h1>
          <div className={FORM_DIV_CLS}>
            <div className="grid w-full grid-cols-1 gap-x-4 gap-y-4 md:grid-cols-2">
              <div className={FORM_BLOCK_CLS}>
                <label htmlFor="vendor" className={INPUT_LABEL_CLS}>
                  Vendor:
                </label>
                <VendorAutocomplete
                  vendors={vendors}
                  onChange={onChange}
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
                onChange={onNameChange}
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
                onChange={onURLChange}
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
                  className={INPUT_CLS}
                  onChange={e => setUnit((e.target as HTMLInputElement).value)}
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
                  onChange={onPriceChange}
                />
              </div>
            </div>
          </div>
          <div>
            <PrimaryButton type="submit" aria-label="Add Item">
              Add Item
            </PrimaryButton>
          </div>
        </form>
      </div>
    </>
  )
}
