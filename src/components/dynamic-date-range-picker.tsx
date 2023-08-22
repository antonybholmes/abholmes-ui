import dynamic from "next/dynamic"

export const DynamicDateRangePicker = dynamic(
  () => import("./date-range-picker-dropdown"),
  {
    loading: () => <p>Loading...</p>,
  },
)
