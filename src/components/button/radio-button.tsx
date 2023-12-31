import VCenterRow from "@components/v-center-row"
import IButtonProps from "@interfaces/button-props"
import cn from "@lib/class-names"
import BaseButton from "./base-button"

// export const RADIO_SIZE = "18px"
// export const ORB_SIZE = "10px"
// export const ORB_OFFSET = "3px"

interface IRadioButtonProps extends IButtonProps {
  index: number
  selected: boolean
  onRadioClick: (index: number) => void
}

export default function RadioButton({
  index,
  selected,
  onRadioClick,
  children,
  ...props
}: IRadioButtonProps) {
  return (
    <VCenterRow className="gap-x-2 text-left">
      <BaseButton
        onClick={() => onRadioClick && onRadioClick(index)}
        className="group cursor-pointer"
        {...props}
      >
        {/* <div
          className={cn(
            `relative overflow-hidden rounded-full border bg-white`,
            [
              selected,
              "border-theme-600",
              cn("trans-300 transition-colors", [hover, "!border-theme-400", "!border-gray-300"]),
            ]
          )}
          style={{ width: RADIO_SIZE, height: RADIO_SIZE }}
        >
          {selected && (
            <div
              className="absolute rounded-full bg-theme-600"
              style={{
                width: ORB_SIZE,
                height: ORB_SIZE,
                left: ORB_OFFSET,
                top: ORB_OFFSET,
              }}
            />
          )}
        </div> */}

        <svg
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 shrink-0"
        >
          <circle
            cx="8"
            cy="8"
            r="7"
            className={cn("trans-300 transition-color fill-white", [
              selected,
              "stroke-theme-600",
              "stroke-gray-300 group-hover:stroke-gray-500",
            ])}
          />

          {selected && (
            <circle cx="8" cy="8" r="4" className="fill-theme-600" />
          )}
        </svg>
      </BaseButton>
      <span className="grow">{children}</span>
    </VCenterRow>
  )
}
