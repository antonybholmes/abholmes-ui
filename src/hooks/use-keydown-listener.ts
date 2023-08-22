import useWindowListener from "./use-window-listener"

export default function useKeyDownListener(handler: any) {
  useWindowListener("keydown", handler)
}
