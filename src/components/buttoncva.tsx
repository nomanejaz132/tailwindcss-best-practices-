import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils/cn";

const button = cva("flex items-center gap-2 rounded-md", {
  variants: {
    variant: {
      primary: [
        "text-white",
        "bg-[#1F883D] hover:bg-[#1C8139] active:bg-[#197935] disabled:bg-[#95D8A6] disabled:cursor-not-allowed",
        "border border-[#1F232826] focus:border-2 focus:border-[#0969DA] active:border-[#1F232826] disabled:border-[#95D8A6]",
        "focus:outline-2 focus:outline-[#0969DA] focus:shadow-[0px_0px_0px_3px_rgba(255,255,255,1)inset]",
        "shadow-[0px_1px_0px_0px_rgba(27,31,35,0.10)] active:shadow-[0px_1px_0px_0px_rgba(20,70,32,0.20)inset] disabled:shadow-none",
      ],
      secondary: [
        "text-[#24292F] disabled:text-[#8C959F]",
        "bg-[#F6F8FA] active:bg-[#E7EBEF] disabled:bg-[#F6F8FA] disabled:cursor-not-allowed",
        "border border-[#D0D7DE] disabled:border-[#F6F8FA]",
        "focus:outline-2 focus:outline-[#0969DA]",
        "shadow-[0px_1px_0px_0px_rgba(27,31,35,0.04)] active:shadow-[0px_1px_0.3px_0px_rgba(27,31,35,0.15)inset] disabled:shadow-none",
      ],
      invisible: [
        "text-[#24292F] disabled:text-[#8C959F]",
        "bg-[#F6F8FA] disabled:cursor-not-allowed",
        "border border-[#D0D7DE] disabled:border-[#F6F8FA]",
        "shadow-[0px_1px_0px_0px_rgba(27,31,35,0.04)] disabled:shadow-none",
      ],
      danger: [
        "text-[#24292F] disabled:text-[#8C959F]",
        "bg-[#F6F8FA] disabled:cursor-not-allowed",
        "border border-[#D0D7DE] disabled:border-[#F6F8FA]",
        "shadow-[0px_1px_0px_0px_rgba(27,31,35,0.04)] disabled:shadow-none",
      ],
      inactive: [
        "text-[#24292F] disabled:text-[#8C959F]",
        "bg-[#F6F8FA] disabled:cursor-not-allowed",
        "border border-[#D0D7DE] disabled:border-[#F6F8FA]",
        "shadow-[0px_1px_0px_0px_rgba(27,31,35,0.04)] disabled:shadow-none",
      ],
      loading: [
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
  compoundVariants: [{ variant: "primary", size: "medium" }],
  defaultVariants: {
    variant: "primary",
    size: "medium",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

export const Button: React.FC<ButtonProps> = ({
  className,
  variant,
  size,
  ...props
}) => (
  <button className={cn(button({ variant, size, className }))} {...props} />
);
