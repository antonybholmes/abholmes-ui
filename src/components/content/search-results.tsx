interface IProps {
  count: number
  search: string
}

export default function SearchResults({ count, search }: IProps) {
  return (
    <div>
      {`${count.toLocaleString()} ${count === 1 ? "result" : "results"}`}
      {search !== "" && (
        <span>
          {" for "}
          <strong>&quot;{search}&quot;</strong>
        </span>
      )}
    </div>
  )
}
