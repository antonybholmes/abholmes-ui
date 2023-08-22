import useWindowListener from "./use-window-listener"

export default function useWindowClickListener(handler: any) {
  useWindowListener("click", handler)
}
