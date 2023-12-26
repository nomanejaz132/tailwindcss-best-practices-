import { useState } from "react";
import { cn } from "../utils/cn";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ className, ...props }: ButtonProps) {
  const [pending] = useState<boolean>(false);
  return (
    <button
      className={cn(
        "bg-blue-500 py-2 px-4",
        className,
        {
          "bg-gray-500": pending,
        },
        {
          ...props,
        }
      )}
    >
      Submit
    </button>
  );
}
