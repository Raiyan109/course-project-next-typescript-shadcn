import * as React from "react"

import { cn } from "@/lib/utils"
import { Search } from "lucide-react"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> { }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <div className="relative">
        <input
          type={type}
          className={cn(
            "flex h-10 w-full rounded-3xl border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300 placeholder:text-gray-300",
            className
          )}
          ref={ref}
          {...props}
          placeholder="Search anything here"
        />
        <span className="absolute top-2 right-2 text-black/70 "><Search size={20} /></span>
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }
