import dynamic from "next/dynamic"

export const DynamicModal = dynamic(() => import("./modal-dialog"), {
  loading: () => <p>Loading...</p>,
})
