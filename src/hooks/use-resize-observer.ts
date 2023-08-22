import { RefObject, useEffect } from "react"

export default function useResizeObserver<T extends HTMLElement>(
  ref: RefObject<T>,
  callback: (target: T) => void,
) {
  //const ref = useRef<T>(null)

  useEffect(() => {
    const element = ref?.current

    if (!element) {
      return
    }

    const observer = new ResizeObserver(() => {
      callback(element)
    })

    observer.observe(element)

    // cleanup by deactivating
    return () => {
      observer.disconnect()
    }
  }, [callback, ref])

  //return ref
}
