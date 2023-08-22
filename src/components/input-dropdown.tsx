import VCenterRow from "@components/v-center-row"
import ChevronRightIcon from "@icons/chevron-right"
import cn from "@lib/class-names"

import IElementProps from "@interfaces/element-props"
import { IDBItem } from "@lib/types"
import { useState } from "react"
import { CHEVRON_CLS } from "src/consts"
import type { DropDownClick, DropDownRenderer } from "./dropdown"
import Dropdown, { defaultRenderListItem } from "./dropdown"

interface IProps<T extends IDBItem> extends IElementProps {
  id: string
  name: string
  value?: string
  items: T[]
  onDropClick?: DropDownClick<T>
  renderListItem?: DropDownRenderer<T>
  placeholder?: string
  menuClassName?: string
}

export default function InputDropdown<T extends IDBItem>({
  id,
  name,
  value,
  items = [],
  onDropClick,
  placeholder = "Choose...",
  renderListItem = defaultRenderListItem,
  className,
  menuClassName,
}: IProps<T>) {
  const [text, setText] = useState(value)
  const [dropDownVisible, setDropDownVisible] = useState(false)

  //useEffect(() => setDropDownVisible(items.length > 0), [items])

  function _onClick(
    index: number,
    id: string | number,
    label: string,
    item: T,
  ) {
    setText(label)
    setDropDownVisible(false)

    onDropClick && onDropClick(index, id, label, item)
  }

  const ditems = items.map(item => ({
    id: item.uuid64,
    label: item.name,
    item,
  }))

  function onClose() {
    setDropDownVisible(false)
  }

  return (
    <Dropdown
      dropDownVisible={dropDownVisible}
      className={className}
      menuClassName={menuClassName}
      items={ditems}
      renderListItem={renderListItem}
      onDropClick={_onClick}
      onClose={onClose}
    >
      <VCenterRow
        // onClick={() => {
        //   setDropDownVisible(!dropDownVisible)
        // }}
        className={className}
      >
        <input
          id={id}
          name={name}
          //value="Vendor..."
          //onChange={_onChange} //(e) => value = e.target.value}
          //onSelect={(val) => value = val}
          onFocus={() => {
            setDropDownVisible(true)
          }}
          className="w-full cursor-pointer outline-none"
          placeholder={placeholder}
          value={text ? text : items.length > 0 ? items[0].name : ""}
          readOnly={true}
        />

        <ChevronRightIcon
          className={cn("trans-300 transition-transform", CHEVRON_CLS, [
            dropDownVisible,
            "rotate-270",
            "rotate-90",
          ])}
          size="shrink-0 w-3"
        />
      </VCenterRow>
    </Dropdown>
  )
}
