import type IClassProps from "@interfaces/class-props"

import { IDBItem } from "@lib/types"
import { ReactElement } from "react"
import AutocompleteSelect, {
  IRemoveClick,
  ISelectClick,
} from "../autocomplete-select"

interface IProps<T extends IDBItem> extends IClassProps {
  items: IDBItem[]
  onClick?: ISelectClick<T>
  renderRemoveItem?: (item: T, onClick: IRemoveClick<T>) => ReactElement
  maxItems?: number
  showRemoveItems?: boolean
  selectedMap?: Set<string>
  value?: string
}

export default function OrderStatusAutocompleteSelect({
  items,
  onClick,
  showRemoveItems = true,
  selectedMap = new Set(),
  className,
}: IProps<IDBItem>) {
  function _onClick(selected: IDBItem[]) {
    //setText(vendors[index].name)

    onClick && onClick(selected)
  }

  // useEffect(() => {
  //   onChange && onChange(text)
  // }, [text])

  // function _onChange(text: string) {
  //   setText(text)

  //   if (text.length > 0) {
  //     const s = text.toLowerCase()

  //     setSearchVendors(
  //       vendors.filter(v => v.name.toLowerCase().includes(s)).slice(0, maxItems)
  //     )
  //   } else {
  //     setVendors([])
  //   }

  //   onChange && onChange(text)
  // }

  return (
    <AutocompleteSelect
      id="order-status-search"
      name="Order Status"
      items={items}
      //onChange={_onChange}
      className={className}
      onClick={_onClick}
      showRemoveItems={showRemoveItems}
      selectedMap={selectedMap}
    />
  )
}
