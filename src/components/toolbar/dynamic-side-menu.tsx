import dynamic from "next/dynamic"

export const DynamicSideMenu = dynamic(() => import("./side-menu"), {
  loading: () => <p>Loading...</p>,
})
