import type IClassProps from "@interfaces/class-props"

//import { IAutoCompleteOnChange } from "./autocomplete"
import AutocompleteSelect, { ISelectClick } from "../autocomplete-select"

import { IDBItem } from "@lib/types"

interface IProps<T extends IDBItem> extends IClassProps {
  inventoryTypes: IDBItem[]
  onClick?: ISelectClick<T>
  //onChange?: IAutoCompleteOnChange
  maxItems?: number
  value?: string
}

export default function InventoryTypeAutocompleteSelect({
  inventoryTypes,
  onClick,
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
      id="inventory-type-search"
      name="Type"
      items={inventoryTypes}
      //onChange={_onChange}
      className={className}
      onClick={_onClick}
    />
  )
}
