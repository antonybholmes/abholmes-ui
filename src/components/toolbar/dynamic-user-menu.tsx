import dynamic from "next/dynamic"

export const DynamicUserMenu = dynamic(() => import("./user-menu"), {
  loading: () => <p>Loading...</p>,
})
