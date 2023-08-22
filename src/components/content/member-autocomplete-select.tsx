import type IClassProps from "@interfaces/class-props"

//import { IAutoCompleteOnChange } from "./autocomplete"
import AutocompleteSelect, { ISelectClick } from "../autocomplete-select"

import { IDBItem, IUserDBItem } from "@lib/types"

interface IProps<T extends IDBItem> extends IClassProps {
  name: string
  members: IUserDBItem[]
  onClick?: ISelectClick<T>
  //onChange?: IAutoCompleteOnChange
  maxItems?: number
  value?: string
}

export default function MemberAutocompleteSelect({
  name,
  members,
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
      id="member-search"
      name={name}
      items={members}
      //onChange={_onChange}
      className={className}
      onClick={_onClick}
    />
  )
}
