import type IClassProps from "@interfaces/class-props"
import { makeAuthBearerHeader } from "@lib/auth"

import { ReactElement, useEffect, useState } from "react"
import { PRODUCTS_URL } from "src/consts"

import Autocomplete from "@components/autocomplete"

import { DropDownClick } from "@abholmes/ui"
import MenuButton from "@components/toolbar/menu-button"
import { productsFromRows } from "@lib/db"
import { IProductDBItem, ISessionUser } from "@lib/types"
import { fetchPostJsonArrayQuery } from "@lib/url"

export function defaultRenderListItem(
  index: number,
  id: string | number,
  label: string,
  item: IProductDBItem,
  onDropClick: DropDownClick<IProductDBItem>,
): ReactElement {
  return (
    <MenuButton
      onClick={e => onDropClick(index, id, label, item)}
      aria-label={label}
      className="py-1"
    >
      <span className="flex flex-col gap-y-1">
        <span className="font-semibold">{item?.catalog}</span>
        <span className="text-xs">{item?.name}</span>
      </span>
    </MenuButton>
  )
}

interface IProps extends IClassProps {
  session: ISessionUser
  vendor?: string
  onDropClick?: DropDownClick<IProductDBItem>
  maxItems?: number
  value?: string
}

export default function CatalogAutocomplete({
  session,
  vendor = "",
  onDropClick,
  maxItems = 8,
  value = "",
  className,
}: IProps) {
  const [text, setText] = useState("")
  const [items, setItems] = useState<IProductDBItem[]>([])
  const config = makeAuthBearerHeader(session)

  useEffect(() => {
    setText(value)
  }, [value])

  function _onClick(
    index: number,
    id: string | number,
    label: string,
    item: IProductDBItem,
  ) {
    setText(items[index].catalog)

    onDropClick && onDropClick(index, id, label, item)
  }

  async function _onChange(text: string) {
    setText(text)

    if (text.length > 0) {
      const body = {
        search: text,
        vendors: vendor ? [vendor] : [],
      }

      console.log(body, config)

      const { items } = await fetchPostJsonArrayQuery(
        PRODUCTS_URL,
        body,
        config,
      )

      setItems(productsFromRows(items.slice(0, maxItems)))
    } else {
      setItems([])
    }
  }

  return (
    <Autocomplete
      id="catalog"
      name="catalog"
      text={text}
      items={items}
      onDropClick={_onClick}
      onValueChange={_onChange}
      renderListItem={defaultRenderListItem}
      placeholder="Catalog..."
      className={className}
      menuClassName="w-96"
    />
  )
}
