import * as React from "react"

import { cn } from "@/lib/utils"

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[125px] w-full rounded-md border border-textLightActive focus:border-textDarker bg-zinc-50 focus:bg-greenLight text-BgDarker px-3 py-2 text-base placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm resize-none overflow-y-auto",
        className
      )}
      ref={ref}
      {...props}
    />
  );
})
Textarea.displayName = "Textarea"

export { Textarea }
