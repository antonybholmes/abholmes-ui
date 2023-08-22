import BaseCol from "@components/base-col"
import { BaseRow } from "@components/base-row"

import CheckBox from "@components/button/check-box"
import ChevronRightIcon from "@icons/chevron-right"
import CloseIcon from "@icons/close"
import cn from "@lib/class-names"

import IChildrenProps from "@interfaces/children-props"
import { IDBItem } from "@lib/types"
import { ROUNDED_BUTTON_CLS } from "@theme"
import { ChangeEvent, ReactElement, useEffect, useRef, useState } from "react"
import { CHEVRON_CLS } from "src/consts"

import { BaseButton, BaseDropDown, DROPDOWN_CLS } from "@abholmes/ui"
import BaseSearchBar from "./base-search-bar"

export type ISelectClick<T extends IDBItem> = (selected: T[]) => void

export type IRemoveClick<T extends IDBItem> = (item: T) => void

export function defaultRenderListItem<T extends IDBItem>(
  item: T,
  selected: boolean,
  onClick: (item: T, selected: boolean) => void,
): ReactElement {
  function _onClick(selected: boolean) {
    onClick(item, selected)
  }
  return (
    <CheckBox
      onCheckClick={e => _onClick(!selected)}
      aria-label={`Select ${item.name}`}
      isSelected={selected}
    >
      {item.name}
    </CheckBox>
  )
}

export function defaultRenderRemoveItem<T extends IDBItem>(
  item: T,
  onClick: IRemoveClick<T>,
): ReactElement {
  function _onClick(item: T) {
    onClick(item)
  }
  return (
    <BaseRow className="items-start gap-x-2">
      <BaseButton onClick={() => _onClick(item)} aria-label="Remove item">
        <CloseIcon className="stroke-gray-500" />
      </BaseButton>
      <p className="text-xs font-semibold">{item.name}</p>
    </BaseRow>
  )
}

export type ICheckClick<T extends IDBItem> = (
  item: T,
  selected: boolean,
) => void

interface IProps<T extends IDBItem> extends IChildrenProps {
  id: string
  name: string
  items: T[]
  onClick?: ISelectClick<T>
  renderListItem?: (
    item: T,
    selected: boolean,
    onClick: ICheckClick<T>,
  ) => ReactElement
  renderRemoveItem?: (item: T, onClick: IRemoveClick<T>) => ReactElement
  showRemoveItems?: boolean
  selectedMap?: Set<string>
  placeholder?: string
  maxItems?: number
}

export default function AutocompleteSelect<T extends IDBItem>({
  id,
  name,
  items = [],
  onClick,
  placeholder = "Search...",
  maxItems = 10,
  showRemoveItems = true,
  selectedMap,
  renderListItem = defaultRenderListItem,
  renderRemoveItem = defaultRenderRemoveItem,
  className,
  children,
}: IProps<T>) {
  const [dropDownVisible, setDropDownVisible] = useState(false)

  const menuRef = useRef<HTMLUListElement>(null)
  const [_selectedMap, setSelectedMap] = useState<Set<string>>(new Set())
  const [selectedItems, setSelectedItems] = useState<T[]>([])
  const [searchItems, setSearchItems] = useState<T[]>([])
  const [text, setText] = useState("")

  function onClose() {
    setDropDownVisible(false)
  }

  useEffect(() => {
    if (text.length > 0) {
      const s = text.toLowerCase()
      setSearchItems(items.filter(item => item.name.toLowerCase().includes(s)))
    } else {
      setSearchItems(items)
    }
  }, [items, text, selectedItems])

  // useEffect(()=>{
  //   setSelectedItems(
  //     Object.fromEntries(items.map((item, oi) => [item.uuid64, false]))
  //   )
  // }, [items])

  //useEffect(() => setDropDownVisible(items.length > 0), [items])

  useEffect(() => {
    if (selectedMap) {
      setSelectedMap(selectedMap)

      const selectedItems = items.filter(
        item => selectedMap.has(item.uuid64) || selectedMap.has(item.name),
      )

      setSelectedItems(selectedItems)
    }
  }, [items, selectedMap])

  function _onClick(item: T, selected: boolean) {
    const sm = selected
      ? new Set([..._selectedMap, item.uuid64, item.name])
      : new Set(
          [..._selectedMap].filter(x => x !== item.uuid64 && x !== item.name),
        )

    _onBaseClick(sm)
  }

  function _onRemoveClick(item: T) {
    const sm = new Set(
      [..._selectedMap].filter(x => x !== item.uuid64 && x !== item.name),
    )

    _onBaseClick(sm)
  }

  function _onBaseClick(selectedMap: Set<string>) {
    setSelectedMap(selectedMap)

    const selectedItems = items.filter(
      item => selectedMap.has(item.uuid64) || selectedMap.has(item.name),
    )

    setSelectedItems(selectedItems)

    onClick && onClick(selectedItems)
  }

  function _onChange(e: ChangeEvent<HTMLInputElement>) {
    setText((e.target as HTMLInputElement).value)
  }

  return (
    <BaseCol className={cn("gap-y-2 py-2", className)}>
      <BaseDropDown
        dropDownVisible={dropDownVisible}
        onClose={onClose}
        menuClassName={cn(DROPDOWN_CLS, "w-full")}
      >
        <BaseRow>
          <BaseButton
            onClick={() => setDropDownVisible(!dropDownVisible)}
            aria-label={`Show ${name}`}
            className={cn(ROUNDED_BUTTON_CLS, "w-full gap-x-4 p-1 text-left")}
          >
            <p className="grow">{name}</p>

            <ChevronRightIcon
              className={cn("trans-300 transition-transform", CHEVRON_CLS, [
                dropDownVisible,
                "rotate-270",
                "rotate-90",
              ])}
              size="shrink-0 w-3"
            />
          </BaseButton>
        </BaseRow>

        <BaseCol className="p-1 text-sm">
          <BaseSearchBar
            id={id}
            onChange={_onChange}
            placeholder={placeholder}
            search={text}
            onClearClick={e => {
              setText("")
              e.stopPropagation()
            }}
          />

          <div className="border-border border-t pt-2">
            <ul
              ref={menuRef}
              className="flex max-h-48 flex-col overflow-y-auto overflow-x-hidden"
            >
              {searchItems.length === 0 && (
                <li className="p-2">Nothing found.</li>
              )}
              {searchItems.map((item, i) => (
                <li key={i}>
                  {renderListItem(
                    item,
                    _selectedMap.has(item.name) ||
                      _selectedMap.has(item.uuid64),
                    _onClick,
                  )}
                </li>
              ))}
            </ul>
          </div>
          {children}
        </BaseCol>
      </BaseDropDown>

      {showRemoveItems && (
        <ul className="flex flex-col gap-y-1">
          {selectedItems.slice(0, maxItems).map((item, i) => (
            <li key={i}>{renderRemoveItem(item, _onRemoveClick)}</li>
          ))}
        </ul>
      )}
    </BaseCol>
  )
}
