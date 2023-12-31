import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

import { cn } from "@lib/shadcn-utils"
import {
  BASE_BUTTON_CLS,
  BASE_PRIMARY_BUTTON_CLS,
  DEFAULT_BUTTON_SIZE_CLS,
  FOCUS_RING_CLS,
  ICON_BUTTON_SIZE_CLS,
  PRIMARY_BUTTON_CLS,
  ROUNDED_BUTTON_CLS,
  SECONDARY_BUTTON_CLS,
} from "@theme"

const BASE_CLS = cn(BASE_BUTTON_CLS, ROUNDED_BUTTON_CLS)

const buttonVariants = cva(BASE_CLS, {
  variants: {
    variant: {
      default: cn(BASE_PRIMARY_BUTTON_CLS, PRIMARY_BUTTON_CLS),
      destructive:
        "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
      outline:
        "border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground",
      secondary: cn(BASE_PRIMARY_BUTTON_CLS, SECONDARY_BUTTON_CLS),
      ghost: cn(
        BASE_PRIMARY_BUTTON_CLS,
        "hover:bg-accent hover:text-accent-foreground",
      ),
      menu: "hover:bg-accent hover:text-accent-foreground focus-visible:bg-accent justify-start text-left whitespace-nowrap",
      link: cn(
        FOCUS_RING_CLS,
        "text-primary underline-offset-4 hover:underline",
      ),
    },
    size: {
      default: DEFAULT_BUTTON_SIZE_CLS,
      sm: "h-8 rounded-md px-3 text-xs",
      lg: "h-10 rounded-md px-8",
      icon: cn("justify-center", ICON_BUTTON_SIZE_CLS),
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
})

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = "Button"

export { Button, buttonVariants }
