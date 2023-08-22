import ChevronRightIcon from "@icons/chevron-right"
import cn from "@lib/class-names"

import IElementProps from "@interfaces/element-props"
import { IDBItem } from "@lib/types"

import {
  DropDownClick,
  DropDownRenderer,
  Dropdown,
  IDropDownMenuItem,
  defaultRenderListItem,
} from "@abholmes/ui"
import { useState } from "react"
import BasicButton from "./button/basic-button"

// export const BASE_DROPDOWN_CLS =
//   "absolute mt-1 bg-white dark:bg-gray-700 shadow-lg rounded border border-gray-200 dark:border-gray-500 p-2 z-overlay text-sm gap-y-4"

// export const DROPDOWN_CLS = cn(BASE_DROPDOWN_CLS, "left-0 w-full")

// export function defaultRenderListItem<T extends IDBItem>(
//   index: number,
//   id: string | number,
//   label: string,
//   item: T,
//   onClick: DropDownClick<T>
// ) {
//   function _onClick(e: MouseEvent) {
//     e.preventDefault()
//     onClick(e, index, id, label, item)

//   }
//   return (
//     <BaseButton onClick={e => _onClick(e)} className={MENU_BUTTON_CLS}>
//       {label}
//     </BaseButton>
//   )
// }

interface IProps<T extends IDBItem> extends IElementProps {
  name: string
  items: IDropDownMenuItem<T>[]
  onDropClick?: DropDownClick<T>
  renderListItem?: DropDownRenderer<T>
  placeholder?: string
  menuClassName?: string
}

export default function ItemDropdown<T extends IDBItem>({
  name,
  items = [],
  onDropClick,
  renderListItem = defaultRenderListItem,
  className,
  menuClassName,
}: IProps<T>) {
  const [dropDownVisible, setDropDownVisible] = useState(false)
  //const ref = useRef<HTMLDivElement>(null)
  //const menuRef = useRef<HTMLUListElement>(null)

  // useEffect(()=>{
  //   setSelectedItems(
  //     Object.fromEntries(items.map((item, oi) => [item.uuid64, false]))
  //   )
  // }, [items])

  //useEffect(() => setDropDownVisible(items.length > 0), [items])

  function _onClick(
    index: number,
    id: string | number,
    label: string,
    item: T,
  ) {
    setDropDownVisible(false)

    onDropClick && onDropClick(index, id, label, item)
  }

  function onClose() {
    setDropDownVisible(false)
  }

  return (
    <Dropdown
      dropDownVisible={dropDownVisible}
      items={items}
      renderListItem={renderListItem}
      onDropClick={_onClick}
      onClose={onClose}
      menuClassName={menuClassName}
    >
      <BasicButton
        onClick={() => setDropDownVisible(!dropDownVisible)}
        aria-label="Show search"
        className={cn("gap-x-4 text-left", className)}
      >
        <p className="grow">{name}</p>
        <ChevronRightIcon
          className={cn(
            "trans-300 stroke-gray-800 transition-transform dark:stroke-white/50 ",
            [dropDownVisible, "rotate-270", "rotate-90"],
          )}
          size="shrink-0 w-2.5"
        />
      </BasicButton>
    </Dropdown>
  )
}
