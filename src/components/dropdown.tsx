import MenuButton from "@components/toolbar/menu-button"
import IElementProps from "@interfaces/element-props"
import { MouseEvent, ReactElement } from "react"
import cn from "../lib/class-names"
import { BaseDropDown, DROPDOWN_CLS } from "./base-dropdown"

export interface IDropDownMenuItem<T> {
  id: string | number
  label: string
  item: T
}

export type DropDownClick<T> = (
  index: number,
  id: string | number,
  label: string,
  item: T,
) => void

export type DropDownRenderer<T> = (
  index: number,
  id: string | number,
  label: string,
  item: T,
  onDropClick: DropDownClick<T>,
) => ReactElement

export function defaultRenderListItem<T>(
  index: number,
  id: string | number,
  label: string,
  item: T,
  onClick: DropDownClick<T>,
) {
  function _onClick(e: MouseEvent) {
    e.preventDefault()
    onClick(index, id, label, item)
  }

  return (
    <MenuButton onClick={(e: MouseEvent) => _onClick(e)} aria-label={label}>
      <span>{label}</span>
    </MenuButton>
  )
}

interface IProps<T> extends IElementProps {
  dropDownVisible: boolean
  items: IDropDownMenuItem<T>[]
  onDropClick?: DropDownClick<T>
  renderListItem?: DropDownRenderer<T>
  onClose?: () => void
  placeholder?: string
  autoClose?: boolean
  onOpenAutoFocus?: (e: Event) => void
  menuClassName?: string
}

export function Dropdown<T>({
  dropDownVisible = false,
  items = [],
  onDropClick,
  renderListItem = defaultRenderListItem,
  onClose,
  onOpenAutoFocus,
  className,
  menuClassName,
  children,
}: IProps<T>) {
  //const menuRef = useRef<HTMLUListElement>(null)

  // useEffect(() => {
  //   setDropDownVisible(dropDownVisible)
  // }, [dropDownVisible])

  function _onClick(
    index: number,
    id: string | number,
    label: string,
    item: T,
  ) {
    ///setDropDownVisible(false)

    onDropClick && onDropClick(index, id, label, item)
  }

  return (
    <BaseDropDown
      dropDownVisible={dropDownVisible}
      className={className}
      onClose={onClose}
      menuClassName={cn(DROPDOWN_CLS, menuClassName)}
      onOpenAutoFocus={onOpenAutoFocus}
    >
      <div>{children}</div>

      <ul className="w-full">
        {items.map((item, i) => (
          <li key={i}>
            {renderListItem(i, item.id, item.label, item.item, _onClick)}
          </li>
        ))}
      </ul>
    </BaseDropDown>
  )
}
