import type { ChangeEvent, MouseEvent } from "react"
import SearchBar from "./search-bar"

interface IProps {
  search: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  onClick: (e: MouseEvent) => void
}

export default function SideSearchBar({ search, onChange, onClick }: IProps) {
  return (
    <SearchBar
      id="side-search"
      search={search}
      onChange={onChange}
      onClick={onClick}
    />
  )
}
