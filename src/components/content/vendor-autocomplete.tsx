import Autocomplete, { IAutoCompleteOnChange } from "@components/autocomplete"
import type { DropDownClick } from "@components/dropdown"
import type IClassProps from "@interfaces/class-props"
import { IDBItem } from "@lib/types"

import { useEffect, useState } from "react"

interface IProps extends IClassProps {
  vendors: IDBItem[]
  onDropClick?: DropDownClick<IDBItem>
  onChange?: IAutoCompleteOnChange
  maxItems?: number
  value?: string
}

export default function VendorAutocomplete({
  vendors,
  onDropClick,
  onChange,
  maxItems = 10,
  value = "",
  className,
}: IProps) {
  const [text, setText] = useState("")

  const [searchVendors, setSearchVendors] = useState<IDBItem[]>([])

  useEffect(() => {
    setText(value)
  }, [value])

  function _onClick(
    index: number,
    id: string | number,
    label: string,
    item: IDBItem,
  ) {
    setText(item.name)

    onDropClick && onDropClick(index, id, label, item)
  }

  //useEffect(()=>{setSearchVendors(vendors)},[vendors])

  // useEffect(() => {
  //   onChange && onChange(text)
  // }, [text])

  function _onChange(text: string) {
    setText(text)

    if (text.length > 0) {
      const s = text.toLowerCase()

      setSearchVendors(
        vendors
          .filter(v => v.name.toLowerCase().includes(s))
          .slice(0, maxItems),
      )
    } else {
      setSearchVendors([])
    }

    onChange && onChange(text)
  }

  return (
    <Autocomplete
      id="vendor"
      name="vendor"
      text={text}
      items={searchVendors}
      onDropClick={_onClick}
      onValueChange={_onChange}
      placeholder="Vendors..."
      className={className}
      menuClassName="w-96"
    />
  )
}
