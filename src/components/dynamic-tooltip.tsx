import dynamic from "next/dynamic"

export const DynamicTooltip = dynamic(() => import("./tooltip"), {
  loading: () => <p>Loading...</p>,
})
