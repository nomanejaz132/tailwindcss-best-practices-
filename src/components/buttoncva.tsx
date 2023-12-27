import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils/cn";

const button = cva("flex items-center gap-2 rounded-md", {
  variants: {
    intent: {
      primary: [
        "text-white",
        "bg-[#1F883D] hover:bg-[#1C8139] disabled:bg-[#95D8A6] disabled:cursor-not-allowed",
        "border border-[#1F232826] disabled:border-[#95D8A6]",
        "shadow-[0px_1px_0px_0px_rgba(27,31,35,0.10)] disabled:shadow-none",
      ],
      secondary: [
        "text-[#24292F] disabled:text-[#8C959F]",
        "bg-[#F6F8FA] disabled:cursor-not-allowed",
        "border border-[#D0D7DE] disabled:border-[#F6F8FA]",
        "shadow-[0px_1px_0px_0px_rgba(27,31,35,0.04)] disabled:shadow-none",
      ],
    },
    size: {
      small: [
        "h-7",
        "text-xs",
        "leading-[18px]",
        "font-medium",
        "py-1",
        "px-2",
      ],
      medium: ["h-8", "text-sm", "leading-5", "font-medium", "py-1.5", "px-3"],
      large: ["h-10", "text-sm", "leading-5", "font-medium", "py-2.5", "px-4"],
    },
  },
  compoundVariants: [{ intent: "primary", size: "medium" }],
  defaultVariants: {
    intent: "primary",
    size: "medium",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

export const Button: React.FC<ButtonProps> = ({
  className,
  intent,
  size,
  ...props
}) => <button className={cn(button({ intent, size, className }))} {...props} />;
