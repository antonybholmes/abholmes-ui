import type ILinkProps from "@interfaces/link-props"
import cn from "@lib/class-names"
import { ROUNDED_CLS } from "@theme"

export const CLS_ORDER_ACTION = cn(
  "text-center trans-100 transition-color text-theme-500 hover:bg-theme-500 hover:text-white px-3 py-1.5 text-xs font-semibold whitespace-nowrap",
  ROUNDED_CLS,
)

export default function OrderActionLink({ href, children }: ILinkProps) {
  //const [lab, setLab] = useState<IDBItem | null>(null)

  // async function fetch() {
  //   try {
  //     const config = makeAuthBearerHeader(sessionTokenB64)

  //     let response = await axios.post(GROUP_URL, config)

  //     if (response.data.length > 0) {
  //       setLab(response.data[0])
  //     }
  //   } catch (e) {
  //     console.error(e)
  //   }
  // }

  // useEffect(() => {
  //   fetch()
  // }, [])

  return (
    <a
      className={cn(CLS_ORDER_ACTION, "inline-block")}
      href={href}
      aria-label={children?.toString() ?? "Order Action"}
    >
      {children}
    </a>
  )
}
