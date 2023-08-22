import type IClassProps from "@interfaces/class-props"

import { useMemo } from "react"
//import { IAutoCompleteOnChange } from "./autocomplete"
import type { DropDownClick } from "@components/dropdown"
import cn from "@lib/class-names"
import { IDBItem } from "@lib/types"
import { BUTTON_H_CLS } from "@theme"
import ItemDropdown from "../item-dropdown"

interface IProps<T extends IDBItem> extends IClassProps {
  items: IDBItem[]
  onDropClick?: DropDownClick<T>
  //onChange?: IAutoCompleteOnChange
  maxItems?: number
  value?: string
}

export default function OrderStatusesDropdown({
  items,
  onDropClick,
  className,
}: IProps<IDBItem>) {
  function _onClick(
    index: number,
    id: string | number,
    label: string,
    item: IDBItem,
  ) {
    onDropClick && onDropClick(index, id, label, item)
  }

  const ditems = useMemo(
    () => items.map(item => ({ id: item.uuid64, label: item.name, item })),
    [items],
  )

  return (
    <ItemDropdown
      name="Update Status"
      items={ditems}
      //onChange={_onChange}
      className={cn("w-48", BUTTON_H_CLS, className)}
      menuClassName="w-48"
      onDropClick={_onClick}
    />
  )
}
