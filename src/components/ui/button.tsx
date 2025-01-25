import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "py-2 px-4 bg-red text-grayText hover:bg-redHover focus:bg-white focus:border-2 focus:border-redHover focus:text-redTextFoucsed active:bg-redPressed active:border-0 active:text-grayText disabled:bg-redDisabled disabled:text-secondaryDisabled",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        primary:
          "rounded-lg  px-4 font-normal bg-greenNormal focus:bg-greenNormal focus:border focus:border-black active:bg-white active:text-grayDarker active:border active:border-greenDarker disabled:bg-greenLight disabled:text-gray-900 focus:text-black text-black hover:bg-greenDarker hover:text-white",
        secondary:
          "rounded-lg py-2 px-4 font-normal bg-white border border-greenDarker text-greenDarker hover:bg-greenLight focus:bg-white focus:text-greenDark focus:border-greenDark active:bg-greenNormal active:text-greenDarker active:border-greenDarker disabled:text-white disabled:border-0 disabled:bg-greenLightActive",
        error:
          "rounded-lg py-2 px-4 font-normal bg-redNormal text-gray-200 hover:bg-redDark focus:bg-white focus:text-redNormal focus:border focus:border-redNormal active:bg-redDarkActive active:border-0 active:text-gray-200",
        tabs:
          "py-2 px-4 font-normal bg-white text-greenDarker hover:bg-greenLight focus:text-greenDark active:bg-greenNormal active:text-greenDarker",
      },
      size: {
        default: "h-11 px-4 py-6",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

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
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
