import useWindowListener from "./use-window-listener"

export default function useMouseMoveListener(handler: any) {
  useWindowListener("mousemove", handler)
}
