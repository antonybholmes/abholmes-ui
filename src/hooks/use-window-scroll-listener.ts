import useWindowListener from "./use-window-listener"

export default function useWindowScrollListener(handler: any) {
  useWindowListener("scroll", handler)
}
