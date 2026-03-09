import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold tracking-normal transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/40 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "min-h-12 px-5 py-3 bg-blue-600 text-white border border-blue-500 shadow-[0_10px_24px_rgba(37,99,235,0.25)] hover:bg-blue-700 hover:border-blue-600 hover:shadow-[0_14px_30px_rgba(37,99,235,0.32)]",
        destructive:
          "min-h-12 px-5 py-3 bg-red-600 text-white border border-red-500 shadow-[0_10px_24px_rgba(220,38,38,0.24)] hover:bg-red-700 hover:border-red-600",
        outline:
          "min-h-12 px-5 py-3 bg-[rgba(18,20,27,0.88)] text-slate-100 border border-white/20 shadow-[0_10px_30px_rgba(0,0,0,0.28)] hover:bg-[rgba(22,26,34,0.96)] hover:border-sky-400/50 hover:text-white",
        secondary:
          "min-h-12 px-5 py-3 bg-[rgba(18,20,27,0.92)] text-slate-100 border border-white/22 shadow-[0_10px_30px_rgba(0,0,0,0.30)] hover:bg-[rgba(24,28,36,0.98)] hover:border-sky-400/45 hover:text-white",
        ghost:
          "min-h-12 px-4 py-3 bg-transparent text-slate-100 border border-transparent hover:bg-white/5 hover:border-white/12 hover:text-white",
        link: "text-blue-400 underline-offset-4 hover:underline hover:text-sky-300",
      },
      size: {
        default: "h-12 px-5 py-3",
        sm: "h-10 rounded-lg px-4 text-xs",
        lg: "h-14 rounded-xl px-8 text-base",
        icon: "h-12 w-12",
      },
      fullWidth: {
        true: "w-full",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      fullWidth: false,
    },
  }
);

/**
 * @typedef {Object} ButtonProps
 * @property {string} [className]
 * @property {"default" | "destructive" | "outline" | "secondary" | "ghost" | "link"} [variant]
 * @property {"default" | "sm" | "lg" | "icon"} [size]
 * @property {boolean} [fullWidth]
 * @property {boolean} [asChild]
 */

/**
 * @type {React.ForwardRefExoticComponent<
 *   ButtonProps &
 *   React.ButtonHTMLAttributes<HTMLButtonElement> &
 *   React.RefAttributes<HTMLButtonElement>
 * >}
 */
const Button = React.forwardRef(function Button(
  { className, variant, size, fullWidth, asChild = false, ...props },
  ref
) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={cn(buttonVariants({ variant, size, fullWidth }), className)}
      ref={ref}
      {...props}
    />
  );
});

Button.displayName = "Button";

export { Button, buttonVariants };