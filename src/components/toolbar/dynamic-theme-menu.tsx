import dynamic from "next/dynamic"

export const DynamicThemeMenu = dynamic(() => import("./theme-menu"), {
  loading: () => <p>Loading...</p>,
})
