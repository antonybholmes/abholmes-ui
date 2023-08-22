import type IClassProps from "@interfaces/class-props"

//import { IAutoCompleteOnChange } from "./autocomplete"

import BlueArrowLink from "@components/link/blue-index-link"
import { VENDORS_ROUTE } from "@consts"
import { IDBItem } from "@lib/types"
import AutocompleteSelect, { ISelectClick } from "../autocomplete-select"

interface IProps<T extends IDBItem> extends IClassProps {
  vendors: IDBItem[]
  onClick?: ISelectClick<T>
  //onChange?: IAutoCompleteOnChange
  maxItems?: number
  value?: string
}

export default function VendorAutocompleteSelect({
  vendors,
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
      id="vendor-search"
      name="Vendor"
      items={vendors}
      //onChange={_onChange}
      className={className}
      onClick={_onClick}
    >
      <div className=" pb-2 pt-4">
        <BlueArrowLink
          href={VENDORS_ROUTE}
          aria-label="Manage Vendors"
          className="text-xs font-semibold"
        >
          Manage Vendors
        </BlueArrowLink>
      </div>
    </AutocompleteSelect>
  )
}
