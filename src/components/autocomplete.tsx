import { INPUT_CLS } from "@consts"
import IElementProps from "@interfaces/element-props"
import cn from "@lib/class-names"
import { IDBItem } from "@lib/types"
import { PopoverAnchor } from "@radix-ui/react-popover"
import { ChangeEvent, KeyboardEvent, useMemo, useState } from "react"
import BaseSearchBar from "./base-search-bar"

import {
  DropDownClick,
  DropDownRenderer,
  defaultRenderListItem,
} from "@abholmes/ui"
import { Popover, PopoverContent } from "./ui/popover"

export type IAutoCompleteOnChange = (text: string) => void

interface IProps<T extends IDBItem> extends IElementProps {
  id: string
  name: string
  text: string
  items: T[]
  onValueChange?: IAutoCompleteOnChange
  onDropClick?: DropDownClick<T>
  renderListItem?: DropDownRenderer<T>
  placeholder?: string
  menuClassName?: string
}

export default function Autocomplete<T extends IDBItem>({
  id,
  name,
  text,
  items = [],
  onValueChange,
  onDropClick,
  placeholder = "Choose...",
  renderListItem = defaultRenderListItem,
  menuClassName,
  className,
}: IProps<T>) {
  const [dropDownVisible, setDropDownVisible] = useState(false)
  //const ref = useRef<HTMLDivElement>(null)
  // const menuRef = useRef<HTMLUListElement>(null)

  //useEffect(() => setDropDownVisible(items.length > 0), [items])

  function _onValueChange(text: string) {
    //setDropDownVisible(false)

    onValueChange && onValueChange(text)
  }

  function _onChange(e: ChangeEvent<HTMLInputElement>) {
    //setDropDownVisible(false)

    _onValueChange((e.target as HTMLInputElement).value)
  }

  function _onClose() {
    setDropDownVisible(false)
  }

  function _onDropClick(
    index: number,
    id: string | number,
    label: string,
    item: T,
  ) {
    setDropDownVisible(false)

    onDropClick && onDropClick(index, id, label, item)
  }

  function onKeyDown(e: KeyboardEvent) {
    if (e.key === "Enter") {
      setDropDownVisible(false)
    }
  }

  const dropdownItems = useMemo(() => {
    return items.map(item => ({
      id: item.uuid64,
      label: item.name,
      item,
    }))
  }, [items])

  return (
    // <Dropdown
    //   dropDownVisible={dropDownVisible}
    //   items={dropdownItems}
    //   renderListItem={renderListItem}
    //   onDropClick={_onClick}
    //   onClose={_onClose}
    //   onOpenAutoFocus={(e: Event) => e.stopPropagation()} // onOpenChange={setDropDownVisible}>
    // >
    <>
      <Popover open={dropDownVisible}>
        <PopoverAnchor asChild>
          <span />
        </PopoverAnchor>
        <PopoverContent
          onInteractOutside={() => _onClose()}
          onEscapeKeyDown={() => _onClose()}
          className={cn("text-sm", menuClassName)}
          sideOffset={6}
        >
          <BaseSearchBar
            id={id}
            onChange={_onChange}
            placeholder={placeholder}
            search={text}
            onClearClick={e => {
              e.preventDefault()
              //_onValueChange("")
            }}
            onKeyDown={onKeyDown}
          />

          <div className="border-border border-t pt-1">
            <ul className="flex max-h-48 flex-col gap-y-1 overflow-y-auto overflow-x-hidden ">
              {dropdownItems.length === 0 && (
                <li className="p-2">Nothing found.</li>
              )}
              {dropdownItems.map((item, i) => (
                <li key={i}>
                  {renderListItem(
                    i,
                    item.id,
                    item.label,
                    item.item,
                    _onDropClick,
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* <Command>
            <CommandInput value={text} onValueChange={onValueChange} />

            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>

                {dropdownItems.map((item, i) => (
                  <CommandItem
                    key={i}
                    onSelect={() =>
                      _onDropClick(i, item.id, item.label, item.item)
                    }
                  >
                    {item.label}
                  </CommandItem>
                ))}
             
            </CommandList>
          </Command> */}
        </PopoverContent>
      </Popover>
      <input
        id={id}
        name={name}
        //value="Vendor..."
        onChange={_onChange} //(e) => value = e.target.value}
        //onSelect={(val) => value = val}
        className={cn(INPUT_CLS, "h-10 w-full", className)}
        placeholder={placeholder}
        value={text}
        onFocus={() => setDropDownVisible(true)}
      />
    </>
  )
}
