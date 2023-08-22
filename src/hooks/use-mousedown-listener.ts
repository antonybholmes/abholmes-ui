import useWindowListener from "./use-window-listener"

export default function useMouseDownListener(handler: any) {
  useWindowListener("mousedown", handler)
}
